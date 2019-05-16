import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import ReservaSelectSala from '../../components/Reserva-Select-Sala/Reserva-Select-Sala';
import CalendarioService from "../../services/CalendarioService";

import './calendario.css';
import '../../../node_modules/moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('pt-BR');
const localizer = BigCalendar.momentLocalizer(moment)
const messages = {
    allDay: 'Todo o dia',
    previous: '<',
    next: '>',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
    date: 'Data',
    time: 'Horário',
    event: 'Evento',
    noEventsInRange: 'Não existem reservas.',
    showMore: total => `+ Ver mais (${total})`
  };

  function Event({ event }) {
    return (
      <span>
        <strong>{event.title}</strong>
        {event.desc && ':  ' + event.desc}
      </span>
    )
  }
  

class Calendario extends Component {
    
    SALA_A = 'tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com';
    SALA_B = '5cnouho3pad6a3mb5f6s2n729o@group.calendar.google.com';
    SALA_C = '9chtrrtd5uqfvo601ovs0imuq8@group.calendar.google.com';
    SALA_CLIENTE = '3h4hbt3i63ibr572jr1p8hmtcc@group.calendar.google.com';
    SALA_DESIGN_SPRINT = '07pp9tf4j0mbfo15rt4ls38ho0@group.calendar.google.com';
    SALA_FAMILY = 'agctvaqims6bqiitih166438rc@group.calendar.google.com';

    constructor(props) {
        super(props);

        this.state = {
            eventos: [],
            idCalendarioSelecionado: 'Todas',
            nomeCalendarioSelecionado: 'Todas as salas',
            carregando: false
        }

        this.atualizarCalendario = this.atualizarCalendario.bind(this);
        this.editarEvento = this.editarEvento.bind(this);
        this.aoMudarCarregando = this.aoMudarCarregando.bind(this);
        this.tratarNumeroDoisAlgarismos = this.tratarNumeroDoisAlgarismos.bind(this);
        this.obterCorPorId = this.obterCorPorId.bind(this);
        this.buscarTodosEventos = this.buscarTodosEventos.bind(this);
        this.obterEstiloEvento = this.obterEstiloEvento.bind(this);
        this.obterNomePorId = this.obterNomePorId.bind(this);

        this.buscarTodosEventos();
    }

    render() {
        return(
            <div className="containerCalendario">
                <Paper >
                    <div className="containerSala">
                        <ReservaSelectSala valor={this.state.idCalendarioSelecionado} atualizarEscolha={this.atualizarCalendario} todos={true}></ReservaSelectSala>
                    </div>
                    <div className="containerBigCalendar">
                        <BigCalendar
                            localizer={localizer}
                            events={this.state.eventos}
                            startAccessor="start"
                            endAccessor="end"
                            messages = {messages}
                            culture="pt-BR"
                            views={["month", "week", "day"]}
                            components={{
                                event: Event
                            }}
                            eventPropGetter={this.obterEstiloEvento}
                            onSelectEvent = {this.editarEvento}
                        />
                    </div>
                </Paper>
            </div>
        )
    }

    obterEstiloEvento(event) {
        var style = {
            backgroundColor: event.cor
        };
        return {
            style: style
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.carregando !== this.props.carregando && !this.state.carregando) {
            this.setState({eventos: []});

            if(this.state.idCalendarioSelecionado === 'Todas') {
                this.buscarTodosEventos();
            } else {
                this.buscarEventosCalendario(this.state.idCalendarioSelecionado);   
            }
        }
    }

    editarEvento(evento) {
        let inicioEvento = evento.start;
        let fimEvento = evento.end;
        let novoDadosEvento = {
            idSala: evento.idSala,
            nomeSala: evento.nomeSala,
            titulo: evento.title,
            descricao: evento.desc.split('\n')[0].replace('Projeto (Centro de Custo): ', ''),
            id: evento.resource,
            dataEvento: inicioEvento.getFullYear() + "-" + this.tratarNumeroDoisAlgarismos((inicioEvento.getMonth()+1)) + "-" + this.tratarNumeroDoisAlgarismos(inicioEvento.getDate()),
            inicio: this.tratarNumeroDoisAlgarismos(inicioEvento.getHours()) + ":" + this.tratarNumeroDoisAlgarismos(inicioEvento.getMinutes()),
            fim: this.tratarNumeroDoisAlgarismos(fimEvento.getHours()) + ":" + this.tratarNumeroDoisAlgarismos(fimEvento.getMinutes()),
            internaOuCliente: (evento.desc.replace("Cliente ou Interno? ", "").indexOf("Interno") === -1 ? "cliente" : "interna"),
            dono: window.localStorage.getItem("email") === evento.email,
            numeroClientes: Number(evento.desc.substring(evento.desc.indexOf("Quantidade pessoas: ") + 20))
        };
        console.log(novoDadosEvento);
        this.props.mudarDadosEvento(novoDadosEvento);
    }

    tratarNumeroDoisAlgarismos(horas) {
        let string = horas.toString();
        if(string.length === 1) {
            string = "0" + string;
        }

        return string;
    }

    aoMudarCarregando(novoCarregando) {
        this.setState({carregando: novoCarregando});
        if(!this.state.carregando) {
            this.setState({eventos: []});
            if(this.state.idCalendarioSelecionado === 'Todas') {
                this.buscarTodosEventos();
            } else {
                this.buscarEventosCalendario(this.state.idCalendarioSelecionado);   
            }
        }
    }

    buscarEventosCalendario(id) {
        CalendarioService.buscarEventos(id).then((resultado) => {
            resultado.forEach((evento) => {
                this.state.eventos.push({
                    title: evento.summary,
                    start: new Date(evento.start.dateTime),
                    end: new Date(evento.end.dateTime),
                    allDay: false,
                    resource: evento.id,
                    desc: evento.description,
                    email: evento.email,
                    cor: this.obterCorPorId(id),
                    idSala: id,
                    nomeSala: this.obterNomePorId(id)  
                })
            });
            this.forceUpdate();
          })
          .catch((err) => {
              console.log("Erro ao listar eventos do calendario");
          }); 
    }

    
    buscarTodosEventos() {
        let calendarios = [this.SALA_A, this.SALA_B, this.SALA_C, this.SALA_CLIENTE, this.SALA_DESIGN_SPRINT, this.SALA_FAMILY];

        CalendarioService.buscarVariosEventos(calendarios).then((resultado) => {
            resultado.forEach((evento) => {
                this.state.eventos.push({
                    title: evento.summary,
                    start: new Date(evento.start.dateTime),
                    end: new Date(evento.end.dateTime),
                    allDay: false,
                    resource: evento.id,
                    desc: evento.description,
                    email: evento.email,
                    cor: this.obterCorPorId(evento.idSala),
                    idSala: evento.idSala,
                    nomeSala: this.obterNomePorId(evento.idSala) 
                })
            });
            this.forceUpdate();
          })
          .catch((err) => {
              console.log("Erro ao listar eventos do calendario");
          }); 
    }

    atualizarCalendario(nome, id) {
        this.setState({idCalendarioSelecionado: id});
        this.setState({nomeCalendarioSelecionado: nome});
        this.setState({eventos: []});
        
        if(id === 'Todas') {
            this.buscarTodosEventos();
        } else {
            this.buscarEventosCalendario(id);
        }
        
    }

    obterCorPorId(id) {
        if(id === this.SALA_A) {
            return '#3f51b5';
        }

        if(id === this.SALA_B) {
            return '#a79b8e';
        }

        if(id === this.SALA_C) {
            return '#7cb342';
        }

        if(id === this.SALA_DESIGN_SPRINT) {
            return '#e67c73';
        }

        if(id === this.SALA_FAMILY) {
            return '#f09300';
        }

        if(id === this.SALA_CLIENTE) {
            return '#c0ca33';
        }
    }

    obterNomePorId(id) {
        if(id === this.SALA_A) {
            return 'A (Maior)';
        }

        if(id === this.SALA_B) {
            return 'B (Meio)';
        }

        if(id === this.SALA_C) {
            return 'C (under rede)';
        }

        if(id === this.SALA_DESIGN_SPRINT) {
            return 'Sala de Sprint dti digital';
        }

        if(id === this.SALA_FAMILY) {
            return 'Family';
        }

        if(id === this.SALA_CLIENTE) {
            return 'A Casa (do cliente dti)';
        }
    }
    

}
 
export default Calendario;
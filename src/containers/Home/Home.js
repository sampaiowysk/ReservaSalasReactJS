import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import FormularioReserva from '../../components/Formulario-Reserva/Formulario-Reserva';
import Calendario from '../../components/Calendario/Calendario';
import CircularProgress from '@material-ui/core/CircularProgress';

import './home.css';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class Home extends Component {
    
    SALA_A = 'tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com';
    SALA_B = '5cnouho3pad6a3mb5f6s2n729o@group.calendar.google.com';
    SALA_C = '9chtrrtd5uqfvo601ovs0imuq8@group.calendar.google.com';
    SALA_CLIENTE = '3h4hbt3i63ibr572jr1p8hmtcc@group.calendar.google.com';
    SALA_DESIGN_SPRINT = '07pp9tf4j0mbfo15rt4ls38ho0@group.calendar.google.com';
    SALA_FAMILY = 'agctvaqims6bqiitih166438rc@group.calendar.google.com';

    constructor(props) {
        super(props);

        this.state = {
            dadosEvento: {},
            carregando: false
        }

        this.aoMudarCarregando = this.aoMudarCarregando.bind(this);
        this.limparDadosEditar = this.limparDadosEditar.bind(this);
        this.mudarDadosEvento = this.mudarDadosEvento.bind(this);
    }

    render() {
        return(
          <div>
            <div className={this.state.carregando? "containerComponenteCalendario blur" : "containerComponenteCalendario"}>
                <div className="containerCalendario">
                    <Calendario mudarDadosEvento={this.mudarDadosEvento} dadosEvento={this.state.dadosEvento} limparDadosEditar={this.limparDadosEditar} carregando={this.state.carregando}></Calendario>
                </div>
                <div className="containerFormulario">
                    <FormularioReserva className="containerFormulario" carregando={this.state.carregando} aoMudarCarregando={this.aoMudarCarregando} dadosEvento={this.state.dadosEvento} limparDadosEditar={this.limparDadosEditar}></FormularioReserva>
                </div>
            </div>
            {this.state.carregando &&  <div>  
                                            <div className="overlay">
                                                <Paper className="containerProgresso">
                                                    <CircularProgress className="progresso" />
                                                    <p style={{"paddingTop": 30}}>Aguarde um pouco enquanto processamos seu pedido.</p>
                                                </Paper>
                                            </div>
                                        </div>}
          </div>
        )
    }

    mudarDadosEvento(dadosEvento) {
        this.setState({dadosEvento: dadosEvento});
    }

    limparDadosEditar() {
        this.setState({dadosEvento: {}});
    }

    aoMudarCarregando(novoCarregando) {
        this.setState({carregando: novoCarregando});
    }

}
 
export default Home;
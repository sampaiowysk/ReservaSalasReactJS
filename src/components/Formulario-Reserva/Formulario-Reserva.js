import React, { Component } from 'react';
import ReservaInput from '../../components/Reserva-Input/Reserva-Input';
import InternaClienteRadio from '../../components/Reserva-Radio/Interna-Cliente-Radio';
import DialogoProcessando from '../../components/Dialogo-Processando/Dialogo-Processando';
import CalendarioService from "../../services/CalendarioService";
import ReservaSelectSala from '../../components/Reserva-Select-Sala/Reserva-Select-Sala';
import Constantes from '../../constants';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import Checkbox from "./Checkbox";

import './formulario-reserva.css';

class Cadastro extends Component {

  idSalaDefault = 'tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com';
  nomeSalaDefault = 'A';

  constructor(props) {
    super(props);
    this.state = {
      idSala: props.dadosEvento.idSala || this.idSalaDefault,
      nomeSala: props.dadosEvento.nomeSala || this.nomeSalaDefault,
      tituloReserva: props.dadosEvento.titulo || '',
      descricaoReserva: props.dadosEvento.descricao || '',
      dietaCliente: '',
      sugestaoHorario: '',
      quantidadePessoas: props.dadosEvento.numeroClientes || '',
      dataEvento: props.dadosEvento.dataEvento || '',
      inicioEvento: props.dadosEvento.inicio || '',
      fimEvento: props.dadosEvento.fim || '',
      internaOuCliente: props.dadosEvento.internaOuCliente || '',
      mensagemResultado: '',
      checkboxes: [],
      lanches: [],
      lanchesSelecionados: []
    };
    this.atualizarSala = this.atualizarSala.bind(this);
    this.atualizarTitulo = this.atualizarTitulo.bind(this);
    this.atualizarDescricao = this.atualizarDescricao.bind(this);
    this.atualizarDieta = this.atualizarDieta.bind(this);
    this.atualizarHorario = this.atualizarHorario.bind(this);
    this.atualizarQuantidade = this.atualizarQuantidade.bind(this);
    this.atualizarData = this.atualizarData.bind(this);
    this.atualizarInicio = this.atualizarInicio.bind(this);
    this.atualizarFim = this.atualizarFim.bind(this);
    this.atualizarInternaOuCliente = this.atualizarInternaOuCliente.bind(this);
    this.enviarReserva = this.enviarReserva.bind(this);
    this.fecharDialogo = this.fecharDialogo.bind(this);
    this.limparFormulario = this.limparFormulario.bind(this);
    this.deletarReserva = this.deletarReserva.bind(this);
    this.selecionarSala = this.selecionarSala.bind(this);
    this.obterDataLimite = this.obterDataLimite.bind(this);
    this.createCheckbox = this.createCheckbox.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.listarLanches = this.listarLanches.bind(this);
    this.atualizarLanches = this.atualizarLanches.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dadosEvento !== this.props.dadosEvento) {
      this.setState({idSala : this.props.dadosEvento.idSala || this.idSalaDefault});
      this.setState({nomeSala : this.props.dadosEvento.nomeSala || this.nomeSalaDefault});
      this.setState({tituloReserva : this.props.dadosEvento.titulo || ''});
      this.setState({descricaoReserva : this.props.dadosEvento.descricao || ''});
      this.setState({sugestaoLanches : this.props.dadosEvento.descricao || ''});
      this.setState({dietaCliente : this.props.dadosEvento.descricao || ''});
      this.setState({sugestaoHorario : this.props.dadosEvento.descricao || ''});
      this.setState({quantidadePessoas : this.props.dadosEvento.numeroClientes || ''});
      this.setState({dataEvento : this.props.dadosEvento.dataEvento || ''});
      this.setState({inicioEvento : this.props.dadosEvento.inicio || ''});
      this.setState({fimEvento : this.props.dadosEvento.fim || ''});
      this.setState({internaOuCliente : this.props.dadosEvento.internaOuCliente || ''}); 
    }
  }

  atualizarSala(valor) {
    this.setState({idSala: valor});
  }

  atualizarTitulo(valor) {
    this.setState({tituloReserva: valor});
  }

  atualizarDescricao(valor) {
    this.setState({descricaoReserva: valor});
  }

  atualizarDieta(valor) {
    this.setState({dietaCliente: valor});
  }

  atualizarHorario(valor) {
    this.setState({sugestaoHorario: valor});
  }

  atualizarQuantidade(valor) {
    this.setState({quantidadePessoas: valor});
  }

  atualizarData(valor) {
    this.setState({dataEvento: valor});
  }

  atualizarInicio(valor) {
    this.setState({inicioEvento: valor});
  }

  atualizarFim(valor) {
    this.setState({fimEvento: valor});
  }

  atualizarInternaOuCliente(valor) {
    this.setState({internaOuCliente: valor});
  }

  atualizarLanches() {
    this.setState({lanches: []});
  }

  handleCheckboxChange = changeEvent => {
    if(changeEvent.target.checked)
      this.state.lanchesSelecionados.push(changeEvent.target.name);
    else
      this.setState({lanchesSelecionados: this.state.lanchesSelecionados.filter(item => item !== changeEvent.target.name)});
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    var lanches = '';

    for(var lanche in this.state.lanchesSelecionados){
      lanches = lanches + this.state.lanchesSelecionados[lanche] + ", ";
    }
    
    return lanches;
  };

  createCheckbox = (OP) => OP.map(option => (
      <Checkbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
      />
    )
  );

  exibirCheckbox(){
    return (
      <div className="containerRadioTitulo">
        <h3 className="titulo">Seleção de Lanches</h3>
        <div className = "containerRadio">
            { this.createCheckbox(this.state.lanches)}
        </div>
      </div>
    );
  }

  listarLanches() {

    return new Promise((resolve, reject) => {
      axios.get(Constantes.URL_BACKEND + "api/v1/Lanches", {
          headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
        })
        .then((lanches) => {
          var nomeLanches = [];

          for (var lanche in lanches.data){
            nomeLanches.push(lanches.data[lanche].nome);
          }

          resolve(nomeLanches);

        })
        .catch((err) => {
          reject(err);
        }); 
    });
  }

  componentDidMount() {
    this.listarLanches().then(_lanches => this.setState({lanches: _lanches}));
  }
  
  render() {
    return (
      <div>
        <Paper className="container">
          {this.props.dadosEvento && this.props.dadosEvento.id ?
                (<div className="iconeFechar" onClick={this.limparFormulario}><CloseIcon></CloseIcon></div>) 
                :(<span></span>)
          }
          <div className="tituloFormulario">
            <h2 className="textoTitulo">Reserva de Salas</h2>
          </div>
          <form onSubmit={this.handleFormSubmit}>
            <ReservaSelectSala valor={this.state.idSala} atualizarEscolha={this.selecionarSala} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaSelectSala>
            <ReservaInput ref={this.referenciaLargura} label="Titulo da Reserva" texto={this.state.tituloReserva} atualizarTexto={this.atualizarTitulo} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
            <InternaClienteRadio valor={this.state.internaOuCliente} atualizarEscolha={this.atualizarInternaOuCliente} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></InternaClienteRadio>
            {this.state.internaOuCliente === "cliente" ? (
              <div>
                <ReservaInput label="Projeto (Centro de Custo)" texto={this.state.descricaoReserva} atualizarTexto={this.atualizarDescricao} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>

                {this.exibirCheckbox()}

                <ReservaInput label="Dieta do Cliente" texto={this.state.dietaCliente} atualizarTexto={this.atualizarDieta} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
                <ReservaInput label="Sugestão de Horário (Lanche)" tipoCampo="time" texto={this.state.sugestaoHorario} atualizarTexto={this.atualizarHorario} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
              </div>
            ) : (
              <ReservaInput label="Descrição" texto={this.state.descricaoReserva} atualizarTexto={this.atualizarDescricao} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
            )}
            <ReservaInput label="Quantidade de Pessoas" tipoCampo="number"  texto={this.state.quantidadePessoas} atualizarTexto={this.atualizarQuantidade} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
            <ReservaInput label="Data do Evento" tipoCampo="date" textoAjuda={this.state.dataEvento ? `A reserva deve ser feita a partir de ${this.obterDataLimite()}, caso precise realizar antes por favor procurar a Carol ou a Thais.`:""}  texto={this.state.dataEvento} atualizarTexto={this.atualizarData} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
            <ReservaInput label="Inicio do Evento" tipoCampo="time"  texto={this.state.inicioEvento} atualizarTexto={this.atualizarInicio} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
            <ReservaInput label="Fim do Evento" tipoCampo="time"  texto={this.state.fimEvento} atualizarTexto={this.atualizarFim} disabled={this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono}></ReservaInput>
            <br/>
            <Grid container justify ={this.props.dadosEvento && this.props.dadosEvento.id ? "space-evenly" : "center"} className="containerBotao"> 
              <Button type="button" onClick={this.enviarReserva} variant="contained" color="primary" size="large" disabled={ this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono }>Enviar</Button>
              {this.props.dadosEvento && this.props.dadosEvento.id ?
                (<Button type="button" onClick={this.deletarReserva} className="botaoDeletar" variant="contained" color="secondary" size="large" disabled={ this.props.dadosEvento && this.props.dadosEvento.id && !this.props.dadosEvento.dono }>Remover</Button>) 
                :(<span></span>)
              }
            </Grid>
          </form>
          <DialogoProcessando mensagem={this.state.mensagemResultado} fecharDialogo={this.fecharDialogo}></DialogoProcessando>
        </Paper>
        
      </div>

    )
  }

  obterDataLimite() {
    let data = new Date(this.state.dataEvento);
    data.setDate(data.getDate() - 2);
    return data.toLocaleDateString();
  }

  limparFormulario() {
    this.setState({idSala : this.idSalaDefault});
    this.setState({nomeSala : this.nomeSalaDefault});
    this.setState({tituloReserva : ''});
    this.setState({descricaoReserva : ''});
    this.setState({sugestaoLanches : ''});
    this.setState({dietaCliente : ''});
    this.setState({sugestaoHorario : ''});
    this.setState({quantidadePessoas : ''});
    this.setState({dataEvento : ''});
    this.setState({inicioEvento : ''});
    this.setState({fimEvento : ''});
    this.setState({internaOuCliente : ''});
    this.props.limparDadosEditar();
  }

  deletarReserva(deveEsconderMensagem) {
    this.props.aoMudarCarregando(true);
    CalendarioService.removerEvento(this.props.dadosEvento.id, this.props.dadosEvento.idSala)
      .then((resultado) => {
        this.props.aoMudarCarregando(false);
        if(!deveEsconderMensagem)
          this.setState({mensagemResultado: resultado.data ? "Pedido removido com sucesso" : "Erro"});
        this.limparFormulario();
      })
      .catch((err) => {
        this.props.aoMudarCarregando(false);
        this.setState({mensagemResultado: "Erro: " + err.response.data});
      });
  }

  fecharDialogo() {
    this.setState({mensagemResultado: ""});
  }

  enviarReserva(e) {
    e.preventDefault();
    let dadosEvento = {
      dataEvento: this.state.dataEvento,
      inicioEvento: this.tratarHorasUTC(this.state.inicioEvento),
      fimEvento: this.tratarHorasUTC(this.state.fimEvento),
      titulo: this.state.tituloReserva,
      nomeSala: this.state.nomeSala,
      internaOuCliente: this.state.internaOuCliente,
      quantidadePessoas: this.state.quantidadePessoas,
      descricaoReserva: this.state.descricaoReserva,
      sugestaoLanches: this.handleFormSubmit(),
      dietaCliente: this.state.dietaCliente,
      sugestaoHorario: this.state.sugestaoHorario,
      idSala: this.state.idSala,
      edicao: Boolean(this.props.dadosEvento && this.props.dadosEvento.id),
      alterouSala: this.props.dadosEvento.idSala !== this.state.idSala,
      idEvento: this.props.dadosEvento ? this.props.dadosEvento.id : null,
      idSalaAnterior: this.props.dadosEvento.idSala
    }
    this.props.aoMudarCarregando(true);
    let promiseRequisicao = CalendarioService.salvarOuEditarEvento(dadosEvento);
    if(promiseRequisicao) {
      promiseRequisicao.then((resultado) => {
        this.props.aoMudarCarregando(false);
        this.setState({mensagemResultado: resultado.data ? "Pedido criado com sucesso. Lembre-se que você perderá a reserva caso não ocupe a sala em 30 minutos." : "Erro"});
        this.limparFormulario();
      })
      .catch((err) => {
        this.props.aoMudarCarregando(false);
        this.setState({mensagemResultado: "Erro: " + err.response.data});
      });
    } else {
      this.props.aoMudarCarregando(false);
    }
  }

  tratarHorasUTC(horario) {
    return horario;
    // let tempo = horario.split(':');
    // let horas = tempo[0];
    // horas = Number(horas) - new Date().getTimezoneOffset()/60;
    // let minutos = tempo[1];
    // return horas + ":" + minutos;
  }

  selecionarSala(nome, id) {
    this.setState({idSala: id});
    this.setState({nomeSala: nome});
  }

}

export default Cadastro;
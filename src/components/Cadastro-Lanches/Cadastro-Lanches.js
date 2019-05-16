import React, { Component } from 'react';
import ReservaInput from '../../components/Reserva-Input/Reserva-Input';
import Constantes from '../../constants';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './cadastro-lanches.css';

class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nomeLanche: '',
      listar: false,
      lanches: []
    };
    this.atualizarNome = this.atualizarNome.bind(this);
    this.atualizarListar = this.atualizarListar.bind(this);
    this.atualizarLanches = this.atualizarLanches.bind(this);
    this.limparCadastro = this.limparCadastro.bind(this);
    this.cadastrarLanche = this.cadastrarLanche.bind(this);
    this.listarLanches = this.listarLanches.bind(this);
    this.exibirLanches = this.exibirLanches.bind(this);
  }

  atualizarNome(valor) {
    this.setState({nomeLanche: valor});
  }

  atualizarListar() {
    this.setState({listar: !this.state.listar});
  }

  atualizarLanches() {
    this.setState({lanches: []});
  }

  limparCadastro() {
    this.setState({nomeLanche: ''});
  }

  exibirLanches () {
    var opt = this.state.lanches;
    return opt.map(option => (
        <li>
          {option}
        </li>
      )
    );
  }

  componentDidMount() {
    this.listarLanches().then(_lanches => this.setState({lanches: _lanches}));
  }

  render() {
    if(this.state.listar) {
      return (
        <div>
          <Paper className="container">
            <div className="tituloFormulario">
              <h2 className="textoTitulo">Cadastro de Lanches</h2>
            </div>
            <form>
              <ul>
                {this.exibirLanches()}
              </ul>
              <Grid container justify className="containerBotao"> 
                <Button type="button" onClick={this.atualizarListar} variant="contained" color="primary" size="large">Voltar</Button>
              </Grid>
            </form>
          </Paper>
        </div>
      )
    }
    return (
      <div>
        <Paper className="container">
          <div className="tituloFormulario">
            <h2 className="textoTitulo">Cadastro de Lanches</h2>
          </div>
          <form>
            <ReservaInput label="Nome" texto={this.state.nomeLanche} atualizarTexto={this.atualizarNome}></ReservaInput>
            <br/>
            <Grid container justify className="containerBotao"> 
              <Button type="button" onClick={this.cadastrarLanche} variant="contained" color="primary" size="large">Cadastrar Lanche</Button>
              <Button type="button" onClick={this.atualizarListar} variant="contained" color="primary" size="large">Listar Lanches</Button>
            </Grid>
          </form>
        </Paper>
      </div>

    )
  }

  cadastrarLanche(e) {
    e.preventDefault();

    return new Promise((resolve, reject) => {
      axios({
          method: "POST",
          url: Constantes.URL_BACKEND + "api/v1/Lanches",
          data: this.nomeLanche,
          headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
        })
        .then((resultado) => {
          resolve(resultado);
        })
        .catch((err) => {
          reject(err);
        }); 
    });

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

}

export default Cadastro;
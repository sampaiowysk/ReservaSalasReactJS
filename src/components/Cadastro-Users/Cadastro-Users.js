import React, { Component } from 'react';
import ReservaInput from '../../components/Reserva-Input/Reserva-Input';
import PermissaoUser from '../../components/Reserva-Radio/Administracao-Permissao';
import Constantes from '../../constants';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './cadastro-users.css';

class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailUser: '',
      permissaoUser: '',
      listar: false,
      users: []
    };
    this.atualizarUser = this.atualizarUser.bind(this);
    this.atualizarListar = this.atualizarListar.bind(this);
    this.atualizarPermissao = this.atualizarPermissao.bind(this);
    this.atualizarUsers = this.atualizarUsers.bind(this);
    this.limparCadastro = this.limparCadastro.bind(this);
    this.cadastrarUser = this.cadastrarUser.bind(this);
    this.listarUsers = this.listarUsers.bind(this);
    this.exibirUsers = this.exibirUsers.bind(this);
  }

  atualizarUser(valor) {
    this.setState({emailUser: valor});
  }

  atualizarPermissao(valor) {
    this.setState({permissaoUser: valor});
  }

  atualizarListar() {
    this.setState({listar: !this.state.listar});
  }

  atualizarUsers() {
    this.setState({users: []});
  }

  limparCadastro() {
    this.setState({emailUser : ''});
  }

  exibirUsers () {
    var opt = this.state.users;
    return opt.map(option => (
        <li>
          {option}
        </li>
      )
    );
  }

  componentDidMount() {
    this.listarUsers().then(_users => this.setState({users: _users}));
  }

  render() {
    if(this.state.listar) {
      return (
        <div>
          <Paper className="container">
            <div className="tituloFormulario">
              <h2 className="textoTitulo">Cadastro de Usuários</h2>
            </div>
            <form>
              <ul>
                {this.exibirUsers()}
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
            <h2 className="textoTitulo">Cadastro de Usuários</h2>
          </div>
          <form>
            <ReservaInput label="Email" texto={this.state.emailUser} atualizarTexto={this.atualizarUser}></ReservaInput>
            <PermissaoUser valor={this.state.permissaoUser} atualizarEscolha={this.atualizarPermissao}></PermissaoUser>
            <br/>
            <Grid container justify className="containerBotao"> 
              <Button type="button" onClick={this.cadastrarUser} variant="contained" color="primary" size="large">Cadastrar Usuário</Button>
              <Button type="button" onClick={this.atualizarListar} variant="contained" color="primary" size="large">Listar Usuários</Button>
            </Grid>
          </form>
        </Paper>
      </div>
    )
  }

  cadastrarUser(e) {
    e.preventDefault();

    let promiseRequisicao;

    try{
      promiseRequisicao = new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: Constantes.URL_BACKEND + "api/v1/Usuarios/" + this.emailUser,
            data: this.permissaoUser,
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
    catch{
      promiseRequisicao = new Promise((resolve, reject) => {
        axios({
            method: "PUT",
            url: Constantes.URL_BACKEND + "api/v1/Usuarios/" + this.emailUser,
            data: this.permissaoUser,
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

    return promiseRequisicao;

  }

  listarUsers() {
    return new Promise((resolve, reject) => {
      axios.get(Constantes.URL_BACKEND + "api/v1/Usuarios", {
          headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
        })
        .then((users) => {
          var nomeUsers = [];

          for (var user in users.data){
            nomeUsers.push(users.data[user].email);
          }

          resolve(nomeUsers);

        })
        .catch((err) => {
          reject(err);
        }); 
    });

  }

}

export default Cadastro;
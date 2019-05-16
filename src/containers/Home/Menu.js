import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Constantes from '../../constants';
import axios from 'axios';

import './home.css';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageHome: false,
            pageAdmin: false,
            permissao: [],
            validacao: 0
        };

        this.toHome = this.toHome.bind(this);
        this.toAdmin = this.toAdmin.bind(this);
        this.atualizarHome = this.atualizarHome.bind(this);
        this.atualizarAdmin = this.atualizarAdmin.bind(this);
        this.getPermissao = this.getPermissao.bind(this);
    }

    atualizarHome(valor) {
        this.setState({pageHome: valor});
    }

    atualizarAdmin(valor) {
        this.setState({pageAdmin: valor});
    }

    render() {
        if(this.state.pageHome) {
            return <Redirect push to="/home" />;
        } else {
            if(this.state.pageAdmin) {
                return <Redirect push to="/admin" />;
            } else {
                this.getPermissao(window.localStorage.getItem("email"));
                return(
                    <div className="containerAutenticacao">
                    <Paper>
                        <div className="containerConteudo">
                            <h2>Agendamento de Salas</h2>
                            <br/>
                            <Grid container justify className="containerBotao"> 
                                <Button type="button" onClick={this.toHome} variant="contained" color="primary" size="large" disabled={this.state.validacao<2}>Reserva de Salas</Button>
                                <Button type="button" onClick={this.toAdmin} variant="contained" color="primary" size="large" disabled={this.state.validacao!==1 && this.state.validacao!==4}>Administração</Button>
                            </Grid>
                        </div>
                    </Paper>
                </div>
                );
            }
        }
    }

    toHome(){
        this.atualizarHome(true);
    }

    toAdmin(){
        this.atualizarAdmin(true);
    }

    getPermissao(email) {

        return new Promise((resolve, reject) => {
          axios.get(Constantes.URL_BACKEND + "api/v1/Usuarios/" + email, {
              headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
            })
            .then((resultado) => {
                resolve(resultado);

                this.setState({permissao: resultado.data[0]});

                var validacao = this.state.permissao;
                if(validacao === []){this.setState({validacao: '0'}); }
                else if(validacao.permissao === 'admin'){this.setState({validacao: 1}); }
                else if(validacao.permissao === 'read'){this.setState({validacao: 2}); }
                else if(validacao.permissao === 'write'){this.setState({validacao: 3}); }
                else if(validacao.permissao === 'root'){this.setState({validacao: 4}); }
                else {this.setState({validacao: '0'}); }

                this.forceUpdate();
              })
            .catch((err) => {
              reject(err);
            }); 
        });
    }

}
 
export default Menu;
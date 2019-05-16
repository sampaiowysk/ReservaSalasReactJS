import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import './autenticacao.css';

class Autenticacao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autenticado: false,
            cumprimento: this.definirCumprimento()
        };

        this.autenticarUsuario = this.autenticarUsuario.bind(this);
    }

    definirCumprimento() {
        var d = new Date();
        var time = d.getHours();

        if (time >= 5 && time < 12) {
            return "Bom dia";
        }

        if (time > 12 && time < 18) {
            return "Boa tarde";
        }
        
        return "Boa noite";
    }

    render() {
        if(this.state.autenticado) {
            return <Redirect push to="/menu" />;
        } 
        return (
            <div className="containerAutenticacao">
                <Paper>
                    <div className="containerConteudo">
                        <h2>Agendamento de Salas</h2>
                        <div>{this.state.cumprimento}, por favor clique no botão abaixo para autenticar sua conta do google em que as agendas serão acessadas.</div>
                        <br/>
                        <div className = "containerBotao">
                            <Button variant="contained" color="primary" size="large" onClick={this.autenticarUsuario}>Entrar</Button>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }

    autenticarUsuario() {
        window.gapi.auth2.getAuthInstance().signIn({'approval_prompt' : 'force'}).then((e) => {
        window.localStorage.setItem("email", e.w3.U3);
        }).then(() => {
            this.setState({autenticado: true});
        });
    }
}
  
export default Autenticacao;
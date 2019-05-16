import React, { Component } from 'react';
import CadastroLanches from '../../components/Cadastro-Lanches/Cadastro-Lanches';
import CadastroUsers from '../../components/Cadastro-Users/Cadastro-Users';

import './home.css';

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return(
            <div className={this.state.carregando? "containerComponenteCalendario blur" : "containerComponenteCalendario"}>
                <div className="containerLanches">
                    <CadastroLanches className="containerLanches"></CadastroLanches>
                </div>
                <div className="containerUsers">
                    <CadastroUsers className="containerLanches"></CadastroUsers>
                </div>
            </div>
        )
    }

}
 
export default Admin;
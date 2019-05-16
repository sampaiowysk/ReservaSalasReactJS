import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './interna-cliente-radio.css';

class PermissaoUser extends Component {

  handleChange = event => {
        this.props.atualizarEscolha(event.target.value);
    };

  render() {
    
    return (
        <div className="containerRadioTitulo">
            <h3 className="titulo">Permissão Usuário</h3>
            <div className = "containerRadio">
                <FormControl required component="fieldset">
                    <RadioGroup
                        aria-label="Permissão Usuário"
                        name="permissaoUser"
                        value={this.props.valor}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="read" control={<Radio disabled={this.props.disabled} color="primary" />} label="Apenas visualizar" />
                        <FormControlLabel value="write" control={<Radio disabled={this.props.disabled} color="primary" />} label="Visualizar e Editar" />
                        <FormControlLabel value="admin" control={<Radio disabled={this.props.disabled} color="primary" />} label="Adminstrador" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
  }
}
  
export default PermissaoUser;
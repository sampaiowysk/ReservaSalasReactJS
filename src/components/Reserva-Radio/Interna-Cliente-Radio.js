import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './interna-cliente-radio.css';

class InternaClienteRadio extends Component {

  handleChange = event => {
        this.props.atualizarEscolha(event.target.value);
    };

  render() {
    
    return (
        <div className="containerRadioTitulo">
            <h3 className="titulo">Interna ou Cliente</h3>
            <div className = "containerRadio">
                <FormControl required component="fieldset">
                    <RadioGroup
                        aria-label="Interna ou Cliente"
                        name="internaOuCliente"
                        value={this.props.valor}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="interna" control={<Radio disabled={this.props.disabled} color="primary" />} label="Interna" />
                        <FormControlLabel value="cliente" control={<Radio disabled={this.props.disabled} color="primary" />} label="Cliente" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
  }
}
  
export default InternaClienteRadio;
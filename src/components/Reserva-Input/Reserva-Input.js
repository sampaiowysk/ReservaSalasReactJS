import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import './reserva-input.css';

class ReservaInput extends Component {
  
  handleChange = event => {
      this.props.atualizarTexto(event.target.value);
  };

  render() {
    return (
      <div className="containerInput">
          <h3 className="titulo">{this.props.label}</h3>
          <TextField
            placeholder={this.props.label}
            value={this.props.texto}
            type={this.props.tipoCampo}
            onChange={this.handleChange}
            fullWidth
            required
            margin="normal"
            variant="outlined"
            helperText={this.props.disabled ? '' : this.props.textoAjuda}
            disabled={this.props.disabled}
          />
      </div>
    )
  }
}

export default ReservaInput;
import React, { Component } from 'react';  
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';  
import Button from '@material-ui/core/Button';

import './dialogo-processando.css';

class DialogoProcessando extends Component {

  handleChange = event => {
        this.props.atualizarEscolha(event.target.value);
    };

  constructor(props) {
      super(props);

      this.fecharDialogo = this.fecharDialogo.bind(this);
  }

  render() {
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={!!this.props.mensagem}>
            <DialogTitle id="simple-dialog-title">Reserva de Sala</DialogTitle>
            <div style={{padding: 20, paddingTop: 0}}>
                <div className="dialog">{this.props.mensagem}</div>
                <br/>
                <Button style={{float: "right"}} variant="contained" color="primary" size="large" onClick={this.fecharDialogo}>Ok</Button>
            </div>
        </Dialog>
    );
  }

  fecharDialogo() {
      this.props.fecharDialogo();
  }
}
  
export default DialogoProcessando;
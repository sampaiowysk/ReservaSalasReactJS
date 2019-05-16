import React, { Component } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './reserva-select-sala.css';

class ReservaSelectSala extends Component {

    SALA_A = 'tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com';
    SALA_B = '5cnouho3pad6a3mb5f6s2n729o@group.calendar.google.com';
    SALA_C = '9chtrrtd5uqfvo601ovs0imuq8@group.calendar.google.com';
    SALA_CLIENTE = '3h4hbt3i63ibr572jr1p8hmtcc@group.calendar.google.com';
    SALA_DESIGN_SPRINT = '07pp9tf4j0mbfo15rt4ls38ho0@group.calendar.google.com';
    SALA_FAMILY = 'agctvaqims6bqiitih166438rc@group.calendar.google.com';

  handleChange = event => {
        this.props.atualizarEscolha(event.currentTarget.innerText, event.target.value);
    };

  render() {
    
    return (
        <div className = "containerSelect">
            <h3>Sala</h3>
            <FormControl variant="outlined" fullWidth required>
                <Select
                    fullWidth
                    required
                    disabled={this.props.disabled}
                    value={this.props.valor}
                    onChange={this.handleChange}
                    input={
                        <OutlinedInput
                            name="sala"
                            id="outlined-sala-simple"
                            labelWidth={0}
                        />
                    }
                >
                    {this.props.todos ? (<MenuItem value="Todas">Todas as salas</MenuItem>) : (<span></span>)}
                    <MenuItem value={this.SALA_A}>A (Maior)</MenuItem>
                    <MenuItem value={this.SALA_B}>B (Meio)</MenuItem>
                    <MenuItem value={this.SALA_CLIENTE}>A Casa (do cliente dti)</MenuItem>
                    <MenuItem value={this.SALA_C}>C (under rede)</MenuItem>
                    <MenuItem value={this.SALA_FAMILY}>Family</MenuItem>
                    <MenuItem value={this.SALA_DESIGN_SPRINT}>Sala de Sprint dti digital</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
  }
}
  
export default ReservaSelectSala;
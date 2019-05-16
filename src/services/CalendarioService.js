import Constantes from '../constants';
import axios from 'axios';

const CalendarioService = {
    salvarOuEditarEvento: function(dadosEvento) {
        var lanches = "\n";
        lanches.concat("Tipos de lanche: ", dadosEvento.sugestaoLanches, "no Horário: ", dadosEvento.sugestaoHorario, ", cosiderando a Dieta do Cliente: ", dadosEvento.dietaCliente, "."); 
        let requisicao = {};
        requisicao.dataInicio = dadosEvento.dataEvento + "T" + dadosEvento.inicioEvento +":00.000Z";
        requisicao.dataFim = dadosEvento.dataEvento + "T" + dadosEvento.fimEvento + ":00.000Z";
        requisicao.titulo = dadosEvento.titulo;
        requisicao.sala = dadosEvento.nomeSala;
        requisicao.descricao = (dadosEvento.internaOuCliente === "cliente" ? "Projeto (Centro de Custo): " : '') + dadosEvento.descricaoReserva + '\n' + 
                            "Cliente ou Interno? "+ (dadosEvento.internaOuCliente === "cliente" ? "Cliente": "Interno") + '\n' + 
                            "Quantidade pessoas: " + dadosEvento.quantidadePessoas + (dadosEvento.internaOuCliente === "cliente" ? lanches : '');
        requisicao.idCalendario = dadosEvento.idSala;
        requisicao.email = window.localStorage.getItem("email");
        if(requisicao.dataInicio && requisicao.dataFim && requisicao.titulo && requisicao.sala && requisicao.descricao && requisicao.idCalendario && requisicao.email) {
            let promiseRequisicao;
            if(dadosEvento.edicao) {
                if(!dadosEvento.alterouSala) {
                    requisicao.id = dadosEvento.idEvento;
                    promiseRequisicao = this._editarEvento(requisicao);
                } else {
                    this.removerEvento(dadosEvento.idEvento, dadosEvento.idSalaAnterior);
                    promiseRequisicao = this._salvarEvento(requisicao);
                }

            } else {
                promiseRequisicao = this._salvarEvento(requisicao);
            }
            return promiseRequisicao;
        } else {
            alert("Erro ao preencher campos");
            return null;
        }
    },

    _salvarEvento: function(requisicao) {
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: Constantes.URL_BACKEND + "api/v1/Reserva/",
                data: requisicao,
                headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
              })
              .then((resultado) => {
                resolve(resultado);
              })
              .catch((err) => {
                reject(err);
              }); 
        });
    },

    _editarEvento: function(requisicao) {
        return new Promise((resolve, reject) => {
            axios({
                method: "PUT",
                url: Constantes.URL_BACKEND + "api/v1/Reserva/",
                data: requisicao,
                headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
              })
              .then((resultado) => {
                resolve(resultado);
              })
              .catch((err) => {
                reject(err);
              }); 
        });
    },

    buscarEventos: function(id) {
        return new Promise((resolve, reject) => {
            axios.get(Constantes.URL_BACKEND + "api/v1/Reserva/", {
                params: {
                    idCalendario: id
                },
                headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
              })
              .then((resultado) => {
                resultado.data.forEach((evento) => {
                    evento.email = evento.attendees[0].email;
                });
                resolve(resultado.data);
              })
              .catch((err) => {
                reject(err);
              }); 
        });
    },
    
    removerEvento: function(idEvento, idCalendario) {
        return new Promise((resolve, reject) => {
            axios.delete(Constantes.URL_BACKEND + "api/v1/Reserva/", {
                params: {
                    idCalendario: idCalendario,
                    idEvento: idEvento
                },
                headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
              })
              .then((resultado) => {
                resolve(resultado);
              })
              .catch((err) => {
                reject(err);
              }); 
        });
    },

    buscarVariosEventos: function(idsCalendarios) {
        return new Promise((resolve, reject) => {
            axios.get(Constantes.URL_BACKEND + "api/v1/Reserva/many", {
                params: {
                    idsCalendarios: idsCalendarios
                },
                headers: {"Authorization" : "Bearer 75f481ccbe884ad38b9766f35e13d177"}
              })
              .then((resultado) => {
                resultado.data.forEach((evento) => {
                    evento.email = evento.attendees[0].email;
                });
                resolve(resultado.data);
              })
              .catch((err) => {
                reject(err);
              }); 
        });
    }
};

export default CalendarioService;
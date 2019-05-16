(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,a,t){e.exports=t(589)},240:function(e,a,t){},243:function(e,a,t){},315:function(e,a,t){},370:function(e,a,t){},383:function(e,a,t){},406:function(e,a,t){},412:function(e,a,t){},581:function(e,a,t){},584:function(e,a,t){},587:function(e,a,t){},589:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),i=t(16),r=t.n(i),s=t(18),l=t(19),d=t(21),c=t(20),u=t(22),h=t(591),m=t(590),v=(t(240),t(4)),p=t(592),E=t(42),b=t.n(E),f=t(31),g=t.n(f),S=(t(243),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).state={autenticado:!1,cumprimento:t.definirCumprimento()},t.autenticarUsuario=t.autenticarUsuario.bind(Object(v.a)(Object(v.a)(t))),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"definirCumprimento",value:function(){var e=(new Date).getHours();return e>=5&&e<12?"Bom dia":e>12&&e<18?"Boa tarde":"Boa noite"}},{key:"render",value:function(){return this.state.autenticado?n.a.createElement(p.a,{push:!0,to:"/home"}):n.a.createElement("div",{className:"containerAutenticacao"},n.a.createElement(g.a,null,n.a.createElement("div",{className:"containerConteudo"},n.a.createElement("h2",null,"Agendamento de Salas"),n.a.createElement("div",null,this.state.cumprimento,", por favor clique no bot\xe3o abaixo para autenticar sua conta do google em que as agendas ser\xe3o acessadas."),n.a.createElement("br",null),n.a.createElement("div",{className:"containerBotao"},n.a.createElement(b.a,{variant:"contained",color:"primary",size:"large",onClick:this.autenticarUsuario},"Entrar")))))}},{key:"autenticarUsuario",value:function(){var e=this;window.gapi.auth2.getAuthInstance().signIn({approval_prompt:"force"}).then(function(e){window.localStorage.setItem("email",e.w3.U3)}).then(function(){e.setState({autenticado:!0})})}}]),a}(o.Component)),C=t(227),A=t.n(C),O=(t(315),function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).handleChange=function(e){t.props.atualizarTexto(e.target.value)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"containerInput"},n.a.createElement("h3",{className:"titulo"},this.props.label),n.a.createElement(A.a,{placeholder:this.props.label,value:this.props.texto,type:this.props.tipoCampo,onChange:this.handleChange,fullWidth:!0,required:!0,margin:"normal",variant:"outlined",helperText:this.props.disabled?"":this.props.textoAjuda,disabled:this.props.disabled}))}}]),a}(o.Component)),j=t(142),D=t.n(j),y=t(228),N=t.n(y),L=t(141),I=t.n(L),z=t(66),T=t.n(z),_=(t(370),function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).handleChange=function(e){t.props.atualizarEscolha(e.target.value)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"containerRadioTitulo"},n.a.createElement("h3",{className:"titulo"},"Interna ou Cliente"),n.a.createElement("div",{className:"containerRadio"},n.a.createElement(T.a,{required:!0,component:"fieldset"},n.a.createElement(N.a,{"aria-label":"Interna ou Cliente",name:"internaOuCliente",value:this.props.valor,onChange:this.handleChange},n.a.createElement(I.a,{value:"interna",control:n.a.createElement(D.a,{disabled:this.props.disabled,color:"primary"}),label:"Interna"}),n.a.createElement(I.a,{value:"cliente",control:n.a.createElement(D.a,{disabled:this.props.disabled,color:"primary"}),label:"Cliente"})))))}}]),a}(o.Component)),k=t(230),R=t.n(k),w=t(229),P=t.n(w),q=(t(383),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).handleChange=function(e){t.props.atualizarEscolha(e.target.value)},t.fecharDialogo=t.fecharDialogo.bind(Object(v.a)(Object(v.a)(t))),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(P.a,{"aria-labelledby":"simple-dialog-title",open:!!this.props.mensagem},n.a.createElement(R.a,{id:"simple-dialog-title"},"Reserva de Sala"),n.a.createElement("div",{style:{padding:20,paddingTop:0}},n.a.createElement("div",{className:"dialog"},this.props.mensagem),n.a.createElement("br",null),n.a.createElement(b.a,{style:{float:"right"},variant:"contained",color:"primary",size:"large",onClick:this.fecharDialogo},"Ok")))}},{key:"fecharDialogo",value:function(){this.props.fecharDialogo()}}]),a}(o.Component)),B={URL_BACKEND:"https://reserva-salas-dti.herokuapp.com/"},M=t(53),x=t.n(M),F={salvarOuEditarEvento:function(e){var a,t={};return t.dataInicio=e.dataEvento+"T"+e.inicioEvento+":00.000Z",t.dataFim=e.dataEvento+"T"+e.fimEvento+":00.000Z",t.titulo=e.titulo,t.sala=e.nomeSala,t.descricao=("cliente"===e.internaOuCliente?"Projeto (Centro de Custo): ":"")+e.descricaoReserva+"\nCliente ou Interno? "+("cliente"===e.internaOuCliente?"Cliente":"Interno")+"\nQuantidade pessoas: "+e.quantidadePessoas,t.idCalendario=e.idSala,t.email=window.localStorage.getItem("email"),t.dataInicio&&t.dataFim&&t.titulo&&t.sala&&t.descricao&&t.idCalendario&&t.email?(e.edicao?e.alterouSala?(this.removerEvento(e.idEvento,e.idSalaAnterior),a=this._salvarEvento(t)):(t.id=e.idEvento,a=this._editarEvento(t)):a=this._salvarEvento(t),a):(alert("Erro ao preencher campos"),null)},_salvarEvento:function(e){return new Promise(function(a,t){x()({method:"POST",url:B.URL_BACKEND+"api/Reserva/",data:e,headers:{Authorization:"Bearer 75f481ccbe884ad38b9766f35e13d177"}}).then(function(e){a(e)}).catch(function(e){t(e)})})},_editarEvento:function(e){return new Promise(function(a,t){x()({method:"PUT",url:B.URL_BACKEND+"api/Reserva/",data:e,headers:{Authorization:"Bearer 75f481ccbe884ad38b9766f35e13d177"}}).then(function(e){a(e)}).catch(function(e){t(e)})})},buscarEventos:function(e){return new Promise(function(a,t){x.a.get(B.URL_BACKEND+"api/Reserva/",{params:{idCalendario:e},headers:{Authorization:"Bearer 75f481ccbe884ad38b9766f35e13d177"}}).then(function(e){e.data.forEach(function(e){e.email=e.attendees[0].email}),a(e.data)}).catch(function(e){t(e)})})},removerEvento:function(e,a){return new Promise(function(t,o){x.a.delete(B.URL_BACKEND+"api/Reserva/",{params:{idCalendario:a,idEvento:e},headers:{Authorization:"Bearer 75f481ccbe884ad38b9766f35e13d177"}}).then(function(e){t(e)}).catch(function(e){o(e)})})},buscarVariosEventos:function(e){return new Promise(function(a,t){x.a.get(B.URL_BACKEND+"api/Reserva/many",{params:{idsCalendarios:e},headers:{Authorization:"Bearer 75f481ccbe884ad38b9766f35e13d177"}}).then(function(e){e.data.forEach(function(e){e.email=e.attendees[0].email}),a(e.data)}).catch(function(e){t(e)})})}},U=t(139),G=t.n(U),H=t(38),Q=t.n(H),Y=t(140),K=t.n(Y),W=(t(406),function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).SALA_A="tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com",t.SALA_B="5cnouho3pad6a3mb5f6s2n729o@group.calendar.google.com",t.SALA_C="9chtrrtd5uqfvo601ovs0imuq8@group.calendar.google.com",t.SALA_CLIENTE="3h4hbt3i63ibr572jr1p8hmtcc@group.calendar.google.com",t.SALA_DESIGN_SPRINT="07pp9tf4j0mbfo15rt4ls38ho0@group.calendar.google.com",t.SALA_FAMILY="agctvaqims6bqiitih166438rc@group.calendar.google.com",t.handleChange=function(e){t.props.atualizarEscolha(e.currentTarget.innerText,e.target.value)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"containerSelect"},n.a.createElement("h3",null,"Sala"),n.a.createElement(T.a,{variant:"outlined",fullWidth:!0,required:!0},n.a.createElement(K.a,{fullWidth:!0,required:!0,disabled:this.props.disabled,value:this.props.valor,onChange:this.handleChange,input:n.a.createElement(G.a,{name:"sala",id:"outlined-sala-simple",labelWidth:0})},this.props.todos?n.a.createElement(Q.a,{value:"Todas"},"Todas as salas"):n.a.createElement("span",null),n.a.createElement(Q.a,{value:this.SALA_A},"A (Maior)"),n.a.createElement(Q.a,{value:this.SALA_B},"B (Meio)"),n.a.createElement(Q.a,{value:this.SALA_CLIENTE},"A Casa (do cliente dti)"),n.a.createElement(Q.a,{value:this.SALA_C},"C (under rede)"),n.a.createElement(Q.a,{value:this.SALA_FAMILY},"Family"),n.a.createElement(Q.a,{value:this.SALA_DESIGN_SPRINT},"Sala de Sprint dti digital"))))}}]),a}(o.Component)),V=t(232),Z=t.n(V),J=t(231),$=t.n(J),X=(t(412),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).idSalaDefault="tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com",t.nomeSalaDefault="A",t.state={idSala:e.dadosEvento.idSala||t.idSalaDefault,nomeSala:e.dadosEvento.nomeSala||t.nomeSalaDefault,tituloReserva:e.dadosEvento.titulo||"",descricaoReserva:e.dadosEvento.descricao||"",quantidadePessoas:e.dadosEvento.numeroClientes||"",dataEvento:e.dadosEvento.dataEvento||"",inicioEvento:e.dadosEvento.inicio||"",fimEvento:e.dadosEvento.fim||"",internaOuCliente:e.dadosEvento.internaOuCliente||"",mensagemResultado:""},t.atualizarSala=t.atualizarSala.bind(Object(v.a)(Object(v.a)(t))),t.atualizarTitulo=t.atualizarTitulo.bind(Object(v.a)(Object(v.a)(t))),t.atualizarDescricao=t.atualizarDescricao.bind(Object(v.a)(Object(v.a)(t))),t.atualizarQuantidade=t.atualizarQuantidade.bind(Object(v.a)(Object(v.a)(t))),t.atualizarData=t.atualizarData.bind(Object(v.a)(Object(v.a)(t))),t.atualizarInicio=t.atualizarInicio.bind(Object(v.a)(Object(v.a)(t))),t.atualizarFim=t.atualizarFim.bind(Object(v.a)(Object(v.a)(t))),t.atualizarInternaOuCliente=t.atualizarInternaOuCliente.bind(Object(v.a)(Object(v.a)(t))),t.enviarReserva=t.enviarReserva.bind(Object(v.a)(Object(v.a)(t))),t.fecharDialogo=t.fecharDialogo.bind(Object(v.a)(Object(v.a)(t))),t.limparFormulario=t.limparFormulario.bind(Object(v.a)(Object(v.a)(t))),t.deletarReserva=t.deletarReserva.bind(Object(v.a)(Object(v.a)(t))),t.selecionarSala=t.selecionarSala.bind(Object(v.a)(Object(v.a)(t))),t.obterDataLimite=t.obterDataLimite.bind(Object(v.a)(Object(v.a)(t))),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){e.dadosEvento!==this.props.dadosEvento&&(this.setState({idSala:this.props.dadosEvento.idSala||this.idSalaDefault}),this.setState({nomeSala:this.props.dadosEvento.nomeSala||this.nomeSalaDefault}),this.setState({tituloReserva:this.props.dadosEvento.titulo||""}),this.setState({descricaoReserva:this.props.dadosEvento.descricao||""}),this.setState({quantidadePessoas:this.props.dadosEvento.numeroClientes||""}),this.setState({dataEvento:this.props.dadosEvento.dataEvento||""}),this.setState({inicioEvento:this.props.dadosEvento.inicio||""}),this.setState({fimEvento:this.props.dadosEvento.fim||""}),this.setState({internaOuCliente:this.props.dadosEvento.internaOuCliente||""}))}},{key:"atualizarSala",value:function(e){this.setState({idSala:e})}},{key:"atualizarTitulo",value:function(e){this.setState({tituloReserva:e})}},{key:"atualizarDescricao",value:function(e){this.setState({descricaoReserva:e})}},{key:"atualizarQuantidade",value:function(e){this.setState({quantidadePessoas:e})}},{key:"atualizarData",value:function(e){this.setState({dataEvento:e})}},{key:"atualizarInicio",value:function(e){this.setState({inicioEvento:e})}},{key:"atualizarFim",value:function(e){this.setState({fimEvento:e})}},{key:"atualizarInternaOuCliente",value:function(e){this.setState({internaOuCliente:e})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g.a,{className:"container"},this.props.dadosEvento&&this.props.dadosEvento.id?n.a.createElement("div",{className:"iconeFechar",onClick:this.limparFormulario},n.a.createElement($.a,null)):n.a.createElement("span",null),n.a.createElement("div",{className:"tituloFormulario"},n.a.createElement("h2",{className:"textoTitulo"},"Reserva de Salas")),n.a.createElement("form",null,n.a.createElement(W,{valor:this.state.idSala,atualizarEscolha:this.selecionarSala,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),n.a.createElement(O,{ref:this.referenciaLargura,label:"Titulo da Reserva",texto:this.state.tituloReserva,atualizarTexto:this.atualizarTitulo,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),n.a.createElement(_,{valor:this.state.internaOuCliente,atualizarEscolha:this.atualizarInternaOuCliente,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),"cliente"===this.state.internaOuCliente?n.a.createElement("div",null,n.a.createElement(O,{label:"Projeto (Centro de Custo)",texto:this.state.descricaoReserva,atualizarTexto:this.atualizarDescricao,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono})):n.a.createElement(O,{label:"Descri\xe7\xe3o",texto:this.state.descricaoReserva,atualizarTexto:this.atualizarDescricao,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),n.a.createElement(O,{label:"Quantidade de Pessoas",tipoCampo:"number",texto:this.state.quantidadePessoas,atualizarTexto:this.atualizarQuantidade,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),n.a.createElement(O,{label:"Data do Evento",tipoCampo:"date",textoAjuda:this.state.dataEvento?"A reserva deve ser feita a partir de ".concat(this.obterDataLimite(),", caso precise realizar antes por favor procurar a Carol ou a Thais."):"",texto:this.state.dataEvento,atualizarTexto:this.atualizarData,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),n.a.createElement(O,{label:"Inicio do Evento",tipoCampo:"time",texto:this.state.inicioEvento,atualizarTexto:this.atualizarInicio,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),n.a.createElement(O,{label:"Fim do Evento",tipoCampo:"time",texto:this.state.fimEvento,atualizarTexto:this.atualizarFim,disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono}),n.a.createElement("br",null),n.a.createElement(Z.a,{container:!0,justify:this.props.dadosEvento&&this.props.dadosEvento.id?"space-evenly":"center",className:"containerBotao"},n.a.createElement(b.a,{type:"button",onClick:this.enviarReserva,variant:"contained",color:"primary",size:"large",disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono},"Enviar"),this.props.dadosEvento&&this.props.dadosEvento.id?n.a.createElement(b.a,{type:"button",onClick:this.deletarReserva,className:"botaoDeletar",variant:"contained",color:"secondary",size:"large",disabled:this.props.dadosEvento&&this.props.dadosEvento.id&&!this.props.dadosEvento.dono},"Remover"):n.a.createElement("span",null))),n.a.createElement(q,{mensagem:this.state.mensagemResultado,fecharDialogo:this.fecharDialogo})))}},{key:"obterDataLimite",value:function(){var e=new Date(this.state.dataEvento);return e.setDate(e.getDate()-2),e.toLocaleDateString()}},{key:"limparFormulario",value:function(){this.setState({idSala:this.idSalaDefault}),this.setState({nomeSala:this.nomeSalaDefault}),this.setState({tituloReserva:""}),this.setState({descricaoReserva:""}),this.setState({quantidadePessoas:""}),this.setState({dataEvento:""}),this.setState({inicioEvento:""}),this.setState({fimEvento:""}),this.setState({internaOuCliente:""}),this.props.limparDadosEditar()}},{key:"deletarReserva",value:function(e){var a=this;this.props.aoMudarCarregando(!0),F.removerEvento(this.props.dadosEvento.id,this.props.dadosEvento.idSala).then(function(t){a.props.aoMudarCarregando(!1),e||a.setState({mensagemResultado:t.data?"Pedido removido com sucesso":"Erro"}),a.limparFormulario()}).catch(function(e){a.props.aoMudarCarregando(!1),a.setState({mensagemResultado:"Erro: "+e.response.data})})}},{key:"fecharDialogo",value:function(){this.setState({mensagemResultado:""})}},{key:"enviarReserva",value:function(e){var a=this;e.preventDefault();var t={dataEvento:this.state.dataEvento,inicioEvento:this.tratarHorasUTC(this.state.inicioEvento),fimEvento:this.tratarHorasUTC(this.state.fimEvento),titulo:this.state.tituloReserva,nomeSala:this.state.nomeSala,internaOuCliente:this.state.internaOuCliente,quantidadePessoas:this.state.quantidadePessoas,descricaoReserva:this.state.descricaoReserva,idSala:this.state.idSala,edicao:Boolean(this.props.dadosEvento&&this.props.dadosEvento.id),alterouSala:this.props.dadosEvento.idSala!==this.state.idSala,idEvento:this.props.dadosEvento?this.props.dadosEvento.id:null,idSalaAnterior:this.props.dadosEvento.idSala};this.props.aoMudarCarregando(!0);var o=F.salvarOuEditarEvento(t);o?o.then(function(e){a.props.aoMudarCarregando(!1),a.setState({mensagemResultado:e.data?"Pedido criado com sucesso. Lembre-se que voc\xea perder\xe1 a reserva caso n\xe3o ocupe a sala em 30 minutos.":"Erro"}),a.limparFormulario()}).catch(function(e){a.props.aoMudarCarregando(!1),a.setState({mensagemResultado:"Erro: "+e.response.data})}):this.props.aoMudarCarregando(!1)}},{key:"tratarHorasUTC",value:function(e){return e}},{key:"selecionarSala",value:function(e,a){this.setState({idSala:a}),this.setState({nomeSala:e})}}]),a}(o.Component)),ee=t(143),ae=t.n(ee),te=t(90),oe=t.n(te);t(581),t(224),t(225);oe.a.locale("pt-BR");var ne=ae.a.momentLocalizer(oe.a),ie={allDay:"Todo o dia",previous:"<",next:">",today:"Hoje",month:"M\xeas",week:"Semana",day:"Dia",agenda:"Agenda",date:"Data",time:"Hor\xe1rio",event:"Evento",noEventsInRange:"N\xe3o existem reservas.",showMore:function(e){return"+ Ver mais (".concat(e,")")}};function re(e){var a=e.event;return n.a.createElement("span",null,n.a.createElement("strong",null,a.title),a.desc&&":  "+a.desc)}var se=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).SALA_A="tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com",t.SALA_B="5cnouho3pad6a3mb5f6s2n729o@group.calendar.google.com",t.SALA_C="9chtrrtd5uqfvo601ovs0imuq8@group.calendar.google.com",t.SALA_CLIENTE="3h4hbt3i63ibr572jr1p8hmtcc@group.calendar.google.com",t.SALA_DESIGN_SPRINT="07pp9tf4j0mbfo15rt4ls38ho0@group.calendar.google.com",t.SALA_FAMILY="agctvaqims6bqiitih166438rc@group.calendar.google.com",t.state={eventos:[],idCalendarioSelecionado:"Todas",nomeCalendarioSelecionado:"Todas as salas",carregando:!1},t.atualizarCalendario=t.atualizarCalendario.bind(Object(v.a)(Object(v.a)(t))),t.editarEvento=t.editarEvento.bind(Object(v.a)(Object(v.a)(t))),t.aoMudarCarregando=t.aoMudarCarregando.bind(Object(v.a)(Object(v.a)(t))),t.tratarNumeroDoisAlgarismos=t.tratarNumeroDoisAlgarismos.bind(Object(v.a)(Object(v.a)(t))),t.obterCorPorId=t.obterCorPorId.bind(Object(v.a)(Object(v.a)(t))),t.buscarTodosEventos=t.buscarTodosEventos.bind(Object(v.a)(Object(v.a)(t))),t.obterEstiloEvento=t.obterEstiloEvento.bind(Object(v.a)(Object(v.a)(t))),t.obterNomePorId=t.obterNomePorId.bind(Object(v.a)(Object(v.a)(t))),t.buscarTodosEventos(),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"containerCalendario"},n.a.createElement(g.a,null,n.a.createElement("div",{className:"containerSala"},n.a.createElement(W,{valor:this.state.idCalendarioSelecionado,atualizarEscolha:this.atualizarCalendario,todos:!0})),n.a.createElement("div",{className:"containerBigCalendar"},n.a.createElement(ae.a,{localizer:ne,events:this.state.eventos,startAccessor:"start",endAccessor:"end",messages:ie,culture:"pt-BR",views:["month","week","day"],components:{event:re},eventPropGetter:this.obterEstiloEvento,onSelectEvent:this.editarEvento}))))}},{key:"obterEstiloEvento",value:function(e){return{style:{backgroundColor:e.cor}}}},{key:"componentDidUpdate",value:function(e){e.carregando===this.props.carregando||this.state.carregando||(this.setState({eventos:[]}),"Todas"===this.state.idCalendarioSelecionado?this.buscarTodosEventos():this.buscarEventosCalendario(this.state.idCalendarioSelecionado))}},{key:"editarEvento",value:function(e){var a=e.start,t=e.end,o={idSala:e.idSala,nomeSala:e.nomeSala,titulo:e.title,descricao:e.desc.split("\n")[0].replace("Projeto (Centro de Custo): ",""),id:e.resource,dataEvento:a.getFullYear()+"-"+this.tratarNumeroDoisAlgarismos(a.getMonth()+1)+"-"+this.tratarNumeroDoisAlgarismos(a.getDate()),inicio:this.tratarNumeroDoisAlgarismos(a.getHours())+":"+this.tratarNumeroDoisAlgarismos(a.getMinutes()),fim:this.tratarNumeroDoisAlgarismos(t.getHours())+":"+this.tratarNumeroDoisAlgarismos(t.getMinutes()),internaOuCliente:-1===e.desc.replace("Cliente ou Interno? ","").indexOf("Interno")?"cliente":"interna",dono:window.localStorage.getItem("email")===e.email,numeroClientes:Number(e.desc.substring(e.desc.indexOf("Quantidade pessoas: ")+20))};console.log(o),this.props.mudarDadosEvento(o)}},{key:"tratarNumeroDoisAlgarismos",value:function(e){var a=e.toString();return 1===a.length&&(a="0"+a),a}},{key:"aoMudarCarregando",value:function(e){this.setState({carregando:e}),this.state.carregando||(this.setState({eventos:[]}),"Todas"===this.state.idCalendarioSelecionado?this.buscarTodosEventos():this.buscarEventosCalendario(this.state.idCalendarioSelecionado))}},{key:"buscarEventosCalendario",value:function(e){var a=this;F.buscarEventos(e).then(function(t){t.forEach(function(t){a.state.eventos.push({title:t.summary,start:new Date(t.start.dateTime),end:new Date(t.end.dateTime),allDay:!1,resource:t.id,desc:t.description,email:t.email,cor:a.obterCorPorId(e),idSala:e,nomeSala:a.obterNomePorId(e)})}),a.forceUpdate()}).catch(function(e){console.log("Erro ao listar eventos do calendario")})}},{key:"buscarTodosEventos",value:function(){var e=this,a=[this.SALA_A,this.SALA_B,this.SALA_C,this.SALA_CLIENTE,this.SALA_DESIGN_SPRINT,this.SALA_FAMILY];F.buscarVariosEventos(a).then(function(a){a.forEach(function(a){e.state.eventos.push({title:a.summary,start:new Date(a.start.dateTime),end:new Date(a.end.dateTime),allDay:!1,resource:a.id,desc:a.description,email:a.email,cor:e.obterCorPorId(a.idSala),idSala:a.idSala,nomeSala:e.obterNomePorId(a.idSala)})}),e.forceUpdate()}).catch(function(e){console.log("Erro ao listar eventos do calendario")})}},{key:"atualizarCalendario",value:function(e,a){this.setState({idCalendarioSelecionado:a}),this.setState({nomeCalendarioSelecionado:e}),this.setState({eventos:[]}),"Todas"===a?this.buscarTodosEventos():this.buscarEventosCalendario(a)}},{key:"obterCorPorId",value:function(e){return e===this.SALA_A?"#3f51b5":e===this.SALA_B?"#a79b8e":e===this.SALA_C?"#7cb342":e===this.SALA_DESIGN_SPRINT?"#e67c73":e===this.SALA_FAMILY?"#f09300":e===this.SALA_CLIENTE?"#c0ca33":void 0}},{key:"obterNomePorId",value:function(e){return e===this.SALA_A?"A (Maior)":e===this.SALA_B?"B (Meio)":e===this.SALA_C?"C (under rede)":e===this.SALA_DESIGN_SPRINT?"Sala de Sprint dti digital":e===this.SALA_FAMILY?"Family":e===this.SALA_CLIENTE?"A Casa (do cliente dti)":void 0}}]),a}(o.Component),le=t(233),de=t.n(le),ce=(t(584),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this,e))).SALA_A="tqv44si5ikhc919fojfboq5fdc@group.calendar.google.com",t.SALA_B="5cnouho3pad6a3mb5f6s2n729o@group.calendar.google.com",t.SALA_C="9chtrrtd5uqfvo601ovs0imuq8@group.calendar.google.com",t.SALA_CLIENTE="3h4hbt3i63ibr572jr1p8hmtcc@group.calendar.google.com",t.SALA_DESIGN_SPRINT="07pp9tf4j0mbfo15rt4ls38ho0@group.calendar.google.com",t.SALA_FAMILY="agctvaqims6bqiitih166438rc@group.calendar.google.com",t.state={dadosEvento:{},carregando:!1},t.aoMudarCarregando=t.aoMudarCarregando.bind(Object(v.a)(Object(v.a)(t))),t.limparDadosEditar=t.limparDadosEditar.bind(Object(v.a)(Object(v.a)(t))),t.mudarDadosEvento=t.mudarDadosEvento.bind(Object(v.a)(Object(v.a)(t))),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:this.state.carregando?"containerComponenteCalendario blur":"containerComponenteCalendario"},n.a.createElement("div",{className:"containerCalendario"},n.a.createElement(se,{mudarDadosEvento:this.mudarDadosEvento,dadosEvento:this.state.dadosEvento,limparDadosEditar:this.limparDadosEditar,carregando:this.state.carregando})),n.a.createElement("div",{className:"containerFormulario"},n.a.createElement(X,{className:"containerFormulario",carregando:this.state.carregando,aoMudarCarregando:this.aoMudarCarregando,dadosEvento:this.state.dadosEvento,limparDadosEditar:this.limparDadosEditar}))),this.state.carregando&&n.a.createElement("div",null,n.a.createElement("div",{className:"overlay"},n.a.createElement(g.a,{className:"containerProgresso"},n.a.createElement(de.a,{className:"progresso"}),n.a.createElement("p",{style:{paddingTop:30}},"Aguarde um pouco enquanto processamos seu pedido.")))))}},{key:"mudarDadosEvento",value:function(e){this.setState({dadosEvento:e})}},{key:"limparDadosEditar",value:function(){this.setState({dadosEvento:{}})}},{key:"aoMudarCarregando",value:function(e){this.setState({carregando:e})}}]),a}(o.Component)),ue=function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"loadGoogleApi",value:function(){var e=document.createElement("script");e.src="https://apis.google.com/js/client.js",e.onload=function(){window.gapi.load("client",function(){window.gapi.client.init({apiKey:"AIzaSyCh0DfhONP-ElWD3dDNCiZAaEQ-D-mUwuw",clientId:"265362638456-vmqs7h6sd392u8h5cldt80jnb9miu8fg.apps.googleusercontent.com",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],scope:"https://www.googleapis.com/auth/calendar.readonly"})})},document.body.appendChild(e)}},{key:"render",value:function(){return this.loadGoogleApi(),n.a.createElement("div",null,n.a.createElement(h.a,null,n.a.createElement("div",null,n.a.createElement(m.a,{exact:!0,path:"/",component:S}),n.a.createElement(m.a,{path:"/home",component:ce}))))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(587);r.a.render(n.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,2,1]]]);
//# sourceMappingURL=main.a57defd3.chunk.js.map
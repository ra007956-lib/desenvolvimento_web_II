const frm=document.querySelector("form")
const resp=document.querySelector("h3")
//CRIA UM OUVINTE DE EVENTE, ACIONADO QUANDO O BOTÃO SUBMIT FOR CLICADO

frm.addEventListener("submit", (e)=> {
    const nome = frm.inNome.value //Obtem valor caixa texto
    resp.innerText = `Olá ${nome}!`
    e.preventDefault() //evita o envio do form
})

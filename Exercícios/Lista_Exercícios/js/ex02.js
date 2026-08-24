const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const valor = frm.inValor.value;
    const tempo = frm.inTempo.value;

    const pagar = Math.ceil(tempo / 15) * valor;

    resp.innerText = `Valor à Pagar: R$${pagar.toFixed(2)}`;

    e.preventDefault()
})
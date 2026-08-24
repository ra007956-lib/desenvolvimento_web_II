const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const porQuilo = frm.inQuilo.value;
    const consumoCliente = frm.inConsumo.value;

    const valorTotal = (consumoCliente / 1000) * porQuilo;

    resp.innerText = `O cliente vai pagar R$${valorTotal.toFixed(2)}.`

    e.preventDefault();
})
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3#outResp1");
const resp2 = document.querySelector("h3#outResp2");

frm.addEventListener("submit", (e)=>{
    const remedio = frm.inRemedio.value;
    const preco = frm.inPreco.value;

    const promocao = Math.floor(preco*2);

    resp1.innerText = `Promoção de ${remedio}`;
    resp2.innerText = `Leve 2 por R$${promocao.toFixed(2)}`;

    e.preventDefault();

})


const frm = document.querySelector("form");
const resp1 = document.querySelector("h3#outResp1");
const resp2 = document.querySelector("h3#outResp2");

frm.addEventListener("submit", (e)=>{
    const produto = frm.inProduto.value;
    const preco = frm.inPreco.value;
    const terceiro_prod = preco / 2;
    const promocao = preco * 2 + terceiro_prod;

    resp1.innerText = `${produto} - Leve 3 por R$${promocao.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$${terceiro_prod.toFixed(2)}`;

    e.preventDefault()

})
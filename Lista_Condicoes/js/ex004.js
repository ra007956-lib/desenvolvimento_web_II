const frm = document.querySelector("form");
const resp1 = document.querySelector("pre#outResp1");
const resp2 = document.querySelector("pre#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const lado1 = Number(frm.inA.value);
    const lado2 = Number(frm.inB.value);
    const lado3 = Number(frm.inC.value);

    if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)) {
        resp1.innerText = "Os lados podem formar um triangulo.";

        if (lado1 === lado2 && lado2 === lado3) {
            resp2.innerText = "Triangulo Equilatero.";

        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            resp2.innerText = "Triangulo Isosceles.";

        } else {
            resp2.innerText = "Triangulo Escaleno.";
        }

    } else {
        resp1.innerText = "Os lados NAO podem formar um triangulo.";
        resp2.innerText = "";
    }
});

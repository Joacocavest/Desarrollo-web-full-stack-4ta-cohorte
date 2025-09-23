
import {calcular_descuento, aplicar_descuento} from "./Ejercicio13_modelo.js";

window.addEventListener("load",()=>{

    const importeIngresado = document.querySelector("#ingresar_importe");
    const btnCalcular = document.querySelector("#btn_calcular");
    const resultado = document.querySelector("#resultado");

    btnCalcular.addEventListener("click", ()=>{

        let importe_ingresado = Number(importeIngresado.value);
        let descuento = calcular_descuento(importe_ingresado);
        let descuento_aplicado = aplicar_descuento(importe_ingresado, descuento);

        resultado.textContent = `Importe ingresado: ${importe_ingresado}
        Descuento del 15%: ${descuento}
        Total a pagar: ${descuento_aplicado}`

    });

})
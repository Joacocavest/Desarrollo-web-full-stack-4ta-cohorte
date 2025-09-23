
import {calcular_descuento, aplicar_descuento, calcular_desceunto_porcentual} from "./Ejercicio16_modelo.js";

window.addEventListener("load",()=>{

    const importeIngresado = document.querySelector("#ingresar_importe");
    const btnCalcular = document.querySelector("#btn_calcular");
    const resultado = document.querySelector("#resultado");

    btnCalcular.addEventListener("click", ()=>{

        let importe_ingresado = Number(importeIngresado.value);
        let descuento;
        let descuento_aplicado;
        let descuento_porcentual;
        if(importe_ingresado > 0){
            descuento = calcular_descuento(importe_ingresado);
            descuento_porcentual = calcular_desceunto_porcentual(importe_ingresado);
            descuento_aplicado = aplicar_descuento(importe_ingresado, descuento);

            resultado.textContent = `Importe ingresado: ${importe_ingresado} - 
            Descuento del ${descuento_porcentual}: ${descuento} - 
            Total a pagar: ${descuento_aplicado}`
        }else{
            resultado.textContent = `Ingrese un importe VÁLIDO`;
        }
        
    });

})
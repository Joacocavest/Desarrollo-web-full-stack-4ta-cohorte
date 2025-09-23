
import {calcular_descuento, calcularSueldoNeto, nombreLegislacion} from "./Ejercicio14_modelo.js";

window.addEventListener("load",()=>{

    const sueldoBruto = document.querySelector("#ingresar_sueldo_bruto");
    const tipoLegislacion = document.querySelector("#select_legislacion");
    const btnCalcular = document.querySelector("#btnCalcularSueldo");
    const resultado = document.querySelector("#resultado");

    btnCalcular.addEventListener("click", ()=>{

        let sueldo = Number(sueldoBruto.value);
        let tipo_Legislacion = Number(tipoLegislacion.value);

        let descuento = calcular_descuento(sueldo, tipo_Legislacion);
        let sueldoNeto = calcularSueldoNeto(sueldo, descuento);
        let legislacion = nombreLegislacion(tipo_Legislacion);

        resultado.textContent=`
        Sueldo en bruto: ${sueldo} - 
        Legislacion: ${legislacion} - 
        Descuento: ${descuento} - 
        Sueldo neto: ${sueldoNeto}
        `;

    })
})

    

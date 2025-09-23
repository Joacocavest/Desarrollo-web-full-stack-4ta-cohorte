
import {clasificar_edad} from "./Ejercicio15_modelo.js";

window.addEventListener("load", ()=>{

    const edad = document.querySelector("#edad");
    const btnCalcular = document.querySelector("#btnCalcular");
    const resultado = document.querySelector("#resultado");

    console.log(edad, btnCalcular, resultado);

    btnCalcular.addEventListener("click", ()=>{

        let edad_ = Number(edad.value);

        let clasificacion_edad = clasificar_edad(edad_);

        resultado.textContent = `
        La edad ingresada es: ${edad_} - ${clasificacion_edad}
        `;

    })

})
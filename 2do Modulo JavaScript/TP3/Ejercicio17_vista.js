
import {calcular_insulina} from "./Ejercicio17_modelo.js";
window.addEventListener("load", ()=>{

    const glucosa = document.querySelector("#ingresar_glucosa");
    const peso = document.querySelector("#ingresar_peso");
    const tipo_diabetes = document.querySelector("#tipo_diabetes");
    const btnCalcular = document.querySelector("#btn_calcular");
    const resultado = document.querySelector("#resultado");

    btnCalcular.addEventListener("click", ()=>{

        let nivel_glucosa = Number(glucosa.value);
        let valor_peso = Number(peso.value);
        let diabetes = Number(tipo_diabetes.value);

        if(nivel_glucosa < 0 || valor_peso < 0){
            resultado.textContent=`ERROR, ingresó un dato inválido.`;
        }else{
            let calculo = calcular_insulina(nivel_glucosa, valor_peso, diabetes);

            resultado.textContent = `
            La dosis de insulina recomendada para el paciente segun los datos del
            peso (${valor_peso}), glucosa en sangre (${nivel_glucosa}) y tipo de
            diabetes (${diabetes}) es de ${calculo}%.
            `;
        }

    })

})
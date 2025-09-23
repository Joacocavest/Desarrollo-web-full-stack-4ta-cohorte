

export const calcular_insulina = (glucosa, peso, tipo_diabetes)=>{

    let calculo;

    if(tipo_diabetes == 1){
        if(glucosa > 180){
            calculo = (peso * 0.50) + (glucosa * 0.50);
        }else{
            calculo = (peso * 0.50);
        }
    }else if(tipo_diabetes == 2){
        if(glucosa > 180){
            calculo = (peso * 0.20) + (glucosa * 0.50);
        }else{
            calculo = (peso * 0.20);
        }
    }else{
        calculo = 'ERROR en el tipo de diabetes';
    }
    return calculo;
}

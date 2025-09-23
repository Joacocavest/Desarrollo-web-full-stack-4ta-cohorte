

export const calcular_descuento = (sueldoBruto, legislacion)=>{

    let descuento = 0;
    switch(legislacion){
        case 1:{
            descuento = sueldoBruto*0.11;
            break;
        }
        case 2:{
            descuento = sueldoBruto*0.03;
            break;
        }
        case 3:{
            descuento = sueldoBruto*0.03;
            break;
        }
        default:{
            descuento = 0;
        }
    }
    return descuento;
}

export const calcularSueldoNeto = (sueldoBruto, descuento)=>{

    let sueldoNeto = sueldoBruto-descuento;
    return sueldoNeto;
}

export const nombreLegislacion = (tipoLegislacion)=>{

    let nombre = '';
    switch(tipoLegislacion){
        case 1:{
            nombre = 'APORTES JUBILATORIOS'
            break;
        }
        case 2:{
            nombre = 'OBRA SOCIAL'
            break;
        }
        case 3:{
            nombre = 'PAMI'
            break;
        }
        default:{
            nombre = ''
        }
    }
    return nombre;

}
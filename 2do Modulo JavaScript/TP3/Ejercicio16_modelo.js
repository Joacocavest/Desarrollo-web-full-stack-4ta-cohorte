
export const calcular_descuento = (importe_ingresado)=>{
    let descuento = 0;
    if(importe_ingresado >= 0 && importe_ingresado < 10000){
        descuento = 0;
    }else if(importe_ingresado >= 10000 && importe_ingresado <= 50000){
        descuento = importe_ingresado * 0.10;
    }else if(importe_ingresado > 50000){
        descuento = importe_ingresado * 0.20;
    }else{
        descuento = 'Ingreso un importe inválido';
    }
    return descuento;
}

export const calcular_desceunto_porcentual = (importe_ingresado)=>{
    let porcentual;
    if(importe_ingresado >= 0 && importe_ingresado < 10000){
        porcentual = '0%';
    }else if(importe_ingresado >= 10000 && importe_ingresado <= 50000){
        porcentual = '10%';
    }else if(importe_ingresado > 50000){
        porcentual = '20%';
    }else{
        porcentual = 'Ingreso un importe inválido';
    }
    return porcentual;
}

export const aplicar_descuento = (importe_ingresado, descuento)=>{
    let totalAPagar = importe_ingresado - descuento;
    return totalAPagar;
}
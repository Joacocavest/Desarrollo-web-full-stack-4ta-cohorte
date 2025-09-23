

export const calcular_descuento = (importe_ingresado)=>{
    let descuento = (importe_ingresado * 0.15);
    return descuento;
}

export const aplicar_descuento = (importe_ingresado, descuento)=>{
    let totalAPagar = importe_ingresado - descuento;
    return totalAPagar;
}
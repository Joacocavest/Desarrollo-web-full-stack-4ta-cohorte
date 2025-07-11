let clasificar_huevo = (peso)=>{
    let clasificacion;
    if(peso >= 73){
        clasificacion = 'XL';
    }else if(peso >= 63 && peso < 73){
        clasificacion = 'L';
    }else if(peso >= 53 && peso < 63){
        clasificacion = 'M';
    }else{
        clasificacion = 'descartado'
    }
    return clasificacion;
}

let determinar_porcentaje_xl = (huevos_xl, huevos_totales)=>{
    let porcentaje_xl=0;

    return porcentaje_xl = (huevos_xl/huevos_totales)*100;
}
let determinar_porcentaje_l = (huevos_l, huevos_totales)=>{
    let porcentaje_l=0;

    return porcentaje_l = (huevos_l/huevos_totales)*100;
}
let determinar_porcentaje_m = (huevos_m, huevos_totales)=>{
    let porcentaje_m=0;

    return porcentaje_m = (huevos_m/huevos_totales)*100;
}

{
    let peso = 0, huevos_totales = 0;
    let clasificacion, desea='s';
    let huevos_xl =0, huevos_l=0, huevos_m=0, huevos_descartados=0;

    while(desea == 's'){
        peso = Number(prompt(`Ingrese el peso del huevo (gr) \n
            Recuerde: \n
            XL peso ≥ 73 gr \n
            L peso ≥ 63 gramos y < 73 gr \n
            M peso ≥ 53 gramos y < 63 gr \n`));
    
        huevos_totales++;
        console.log(`Huevos: ${huevos_totales}`);
        clasificacion = clasificar_huevo(peso);
        console.log(`Peso: ${peso} - Clasificación: ${clasificacion}`);

        if(clasificacion === 'XL'){
            huevos_xl++;
        }else if(clasificacion === 'L'){
            huevos_l++;
        }else if(clasificacion === 'M'){
            huevos_m++;
        }else{
            huevos_descartados++;
        }
        
        porcentaje_xl = determinar_porcentaje_xl(huevos_xl, huevos_totales);
        porcentaje_l = determinar_porcentaje_l(huevos_l, huevos_totales);
        porcentaje_m = determinar_porcentaje_m(huevos_m, huevos_totales);

        desea = prompt(`¿Desea cargar otro huevo? \n S/N`);
        desea = desea.toLowerCase();
    }

    console.log(`
        Cantidad total de huevos ingresados: ${huevos_totales} \n
        Cantidad total de huevos XL: ${huevos_xl} \n
        Cantidad total de huevos L: ${huevos_l} \n
        Cantidad total de huevos M: ${huevos_m} \n
        Cantidad total de huevos descartados: ${huevos_descartados} \n
        Porcentaje de huevos XL sobre el total(${huevos_totales}): ${porcentaje_xl.toFixed(2)}% \n
        Porcentaje de huevos L sobre el total(${huevos_totales}): ${porcentaje_l.toFixed(2)}% \n
        Porcentaje de huevos M sobre el total(${huevos_totales}): ${porcentaje_m.toFixed(2)}% \n
        `);

}
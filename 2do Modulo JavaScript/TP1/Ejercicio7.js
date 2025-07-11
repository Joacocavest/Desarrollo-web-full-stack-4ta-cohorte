{
    /*
    Ejercicio Nro. 07:
        Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
        grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
        clientes. Las marcas con las que trabaja son: 
        CODIGO: 1 - DESCRIPCION: Dogui x21kg - X UNIDAD: $38000 - CANTIDAD ENTRE 5 Y 10: $36000 - CANTIDAD>10: $34000
        
        CODIGO: 2 - DESCRIPCION: Tiernitos x21kg - X UNIDAD: $31000 - CANTIDAD ENTRE 5 Y 10: $29000 - CANTIDAD>10: $27000
        
        CODIGO: 3 - DESCRIPCION: Dopro x21kg - X UNIDAD: $46000 - CANTIDAD ENTRE 5 Y 10: $44000 - CANTIDAD>10: $42000

        Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
        comprar y que solo determine el importe total a pagar.
    */

    console.log(`Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
        grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
        clientes. Las marcas con las que trabaja son: 
        CODIGO: 1 - DESCRIPCION: Dogui x21kg - X UNIDAD: $38000 - CANTIDAD ENTRE 5 Y 10: $36000 - CANTIDAD>10: $34000
        
        CODIGO: 2 - DESCRIPCION: Tiernitos x21kg - X UNIDAD: $31000 - CANTIDAD ENTRE 5 Y 10: $29000 - CANTIDAD>10: $27000
        
        CODIGO: 3 - DESCRIPCION: Dopro x21kg - X UNIDAD: $46000 - CANTIDAD ENTRE 5 Y 10: $44000 - CANTIDAD>10: $42000

        Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
        comprar y que solo determine el importe total a pagar.`);

    let codigo = Number(prompt(`Ingrese el codigo del producto: `));
    let cantidad = Number(prompt(`Ingrese la cantidad de bolsas: `));
    let precio = 0;
    switch(codigo){
        case 1:
            if(cantidad < 5 && cantidad > 0){
                precio = 38000 * cantidad;
            }else if(cantidad >= 5 && cantidad <= 10){
                precio = 36000 * cantidad;
            }else if(cantidad > 10){
                precio = 34000 * cantidad;
            }else{
                console.log(`Ingreso una cantidad invalida.`);
            }
            break;
        case 2:
            if(cantidad < 5 && cantidad > 0){
                precio = 31000 * cantidad;
            }else if(cantidad >= 5 && cantidad <= 10){
                precio = 29000 * cantidad;
            }else if(cantidad > 10){
                precio = 27000 * cantidad;
            }else{
                console.log(`Ingreso una cantidad invalida.`);
            }
            break;
        case 3:
            if(cantidad < 5 && cantidad > 0){
                precio = 46000 * cantidad;
            }else if(cantidad >= 5 && cantidad <= 10){
                precio = 44000 * cantidad;
            }else if(cantidad > 10){
                precio = 42000 * cantidad;
            }else{
                console.log(`Ingreso una cantidad invalida.`);
            }
            break;
        default:
            console.log(`Ingreso un codigo invalido.`);
    }
    if(codigo > 0 && codigo < 2){
        console.log(`Producto: Dogui x21kg`);
        console.log(`Cantidades: ${cantidad}`);
    }else if(codigo > 1 && codigo < 3){
        console.log(`Producto: Tiernitos x21kg`);
        console.log(`Cantidades: ${cantidad}`);
    }else if(codigo == 3){
        console.log(`Producto: Dopro x21kg`);
        console.log(`Cantidades: ${cantidad}`);
    }else{
        console.log(`Ingreso un codigo invalido.`);
    }
    console.log(`El importe a pagar es: $${precio}`);
}
{
    /*
    Ejercicio Nro. 02: 
        Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
        el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
        15% como así también el importe restante final.
    */
    console.log(`Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
        el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
        15% como así también el importe restante final.`)
    let importe = Number(prompt(`Ingrese el valor total de la compra: `));
    let descuento = (importe * 15)/100;
    let importeFinal = importe - descuento;

    console.log(`Agregando descuento del 15%`);
    console.log(`Importe sin descuento: ${importe}`);
    console.log(`Descuento: ${descuento}`);
    console.log(`Importe total a pagar con descuento: ${importeFinal}`);
}
{
    /*
    Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
    denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
    teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
    pesos argentinos). 
    Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
    sabiendo que no se puede pasar el límite establecido.
    */

    console.log(`Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
    denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
    teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
    pesos argentinos). 
    Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
    sabiendo que no se puede pasar el límite establecido.`);

    let valorCompra = Number(prompt(`Ingrese el monto de la compra: `));
    let descuento = (valorCompra * 50)/100;
    console.log(`El descuento es de: $${descuento}`);

    if(descuento <= 80000){
        valorCompra = valorCompra - descuento;
    }else{
        descuento = 80000;
        valorCompra = valorCompra - descuento;
    }
    
    console.log(`El descuento final es de: $${descuento}`);
    console.log(`El precio total a pagar es: $${valorCompra}`);
}
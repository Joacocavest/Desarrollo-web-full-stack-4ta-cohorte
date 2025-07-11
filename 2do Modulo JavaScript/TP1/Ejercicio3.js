{
    /*
    Ejercicio Nro. 03:
        Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
        El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
        comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
        potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
        respectivamente. El programa debe calcular el gasto futuro a pagar.
    */
    console.log(`Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
        El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
        comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
        potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
        respectivamente. El programa debe calcular el gasto futuro a pagar.`)
    
    let valor_energia = Number(prompt(`Ingrese el monto de la energia: `));
    let valor_comunicacion = Number(prompt(`Ingrese el monto de la comunicacion: `));
    let valor_agua = Number(prompt(`Ingrese el monto del agua: `));
    let totalAPagar = valor_energia+valor_agua+valor_comunicacion;

    console.log(`El valor actual de la energia es: ${valor_energia}`);
    console.log(`El valor actual de la comunicacion es: ${valor_comunicacion}`);
    console.log(`El valor actual del agua es: ${valor_agua}`);
    console.log(`El total a pagar actualmente es de: ${totalAPagar}`);

    valor_energia = valor_energia + (valor_energia * 12.50)/100;
    valor_comunicacion = valor_comunicacion + (valor_comunicacion * 7)/100;
    valor_agua = valor_agua + (valor_agua * 3)/100;
    totalAPagar = valor_energia+valor_agua+valor_comunicacion;

    console.log(`El valor con aumento del 12,5% de la energia es: ${valor_energia}`);
    console.log(`El valor con aumento del 7% de la comunicacion es: ${valor_comunicacion}`);
    console.log(`El valor con aumento del 3% del agua es: ${valor_agua}`);
    console.log(`El total a pagar actualmente es de: ${totalAPagar}`);

}
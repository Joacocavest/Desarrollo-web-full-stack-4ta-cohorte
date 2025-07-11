{
    /*
    Ejercicio Nro. 04:
    Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
    también resuelva el mismo problema utilizando un operador ternario.
    */

    let numero = Number(prompt(`Ingrese un numero cualquiera: `));
    console.log(`El numero ingresado es: ${numero}`);

    console.log(`Usando una estructura condicional "if/else": `);
    if(numero < 0){
        console.log(`El numero ingresado es negativo`);
    }else{
        console.log(`El numero ingresado es positivo`);
    }

    console.log(`Usando un operador ternario: `);
    numero = (numero < 0) ? console.log(`El numero ingresado es negativo`): console.log(`El numero ingresado es positivo`);

}
{
    /*
    Ejercicio Nro. 05:
    Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
    */

    let numero = Number(prompt(`Ingrese un numero cualquiera: `));

    console.log(`El numero ingresado es: ${numero}`);

    let par = (numero%2 == 0) ? true: false
    if(par == true){
        console.log(`El numero ingresado es PAR`);
    }else{
        console.log(`El numero ingresado es IMPAR`);
    }

}
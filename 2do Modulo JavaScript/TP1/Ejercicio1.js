{
    /*
    Ejercicio Nro. 01: 
        Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
        siguientes operaciones:
        - Muestre la suma de ambos (A + B)
        - Muestre la resta (A – B) 
        - Muestre el Producto de ambos (A * B) 
        - Muestre el Cociente entre ambos (A / B)
    Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
    */

    console.log(`Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
        siguientes operaciones:`);
    let numeroA = Number(prompt(`Ingrese el numero A: `));
    let numeroB = Number(prompt(`Ingrese el numero B: `));
    
    let suma = numeroA + numeroB;
    let resta = numeroA - numeroB;
    let producto = numeroA * numeroB;
    let cociente = (numeroB !== 0) ? numeroA/numeroB: 0;

    console.log(`La suma de ${numeroA} + ${numeroB} = ${suma}`);
    console.log(`La resta de ${numeroA} - ${numeroB} = ${resta}`);
    console.log(`EL producto de ${numeroA} * ${numeroB} = ${producto}`);
    console.log(`El cociente de ${numeroA}/${numeroB} = ${cociente}`); //cuando el cociente es 0 se produce una indeterminación y genera infinito, entonces:


}
{
    /*
    Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), 
    adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
    */

    console.log(`Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), 
    adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).`);

    let edad = Number(prompt(`Ingrese una edad: `));
    let descripcionEdad
    if(edad > 0 && edad <= 12){
        descripcionEdad = "niño";
        console.log(`La edad que ingresó (${edad}) corresponde a la de un ${descripcionEdad}`);
    }else if(edad > 12 && edad <= 17){
        descripcionEdad = "adolescente";
        console.log(`La edad que ingresó (${edad}) corresponde a la de un ${descripcionEdad}`);
    }else if(edad > 17 && edad <= 64){
        descripcionEdad = "adulto";
        console.log(`La edad que ingresó (${edad}) corresponde a la de un ${descripcionEdad}`);
    }else if(edad > 64){
        descripcionEdad = "adulto mayor";
        console.log(`La edad que ingresó (${edad}) corresponde a la de un ${descripcionEdad}`);
    }else{
        console.log(`Ingresó una edad inválida`);
    }
}
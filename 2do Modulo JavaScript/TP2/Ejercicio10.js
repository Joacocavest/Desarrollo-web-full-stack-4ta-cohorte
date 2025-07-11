function agregarNota(){
    let alumno;
    let nota;
    let cantidadError=0;
    let desea = true
    while(desea!=false){
        do{
            alumno = prompt(`Ingrese el nombre del alumno: `);
        }while(!isNaN(alumno));
        nota = Number(prompt(`Ingrese la nota del alumno`));
        if(nota>=0 && nota<=4){
            console.log(`${alumno} obtuvo un ${nota} y está desaprobado.`);
        }else if(nota>4 && nota<=7){
            console.log(`${alumno} obtuvo un ${nota} y está aprobado.`);
        }else if(nota>7 && nota<10){
            console.log(`${alumno} obtuvo un ${nota} y está aprobado. TRABAJO MUY BUENO`);
        }else if(nota==10){
            console.log(`${alumno} obtuvo un ${nota} y está aprobado. TRABAJO EXCELENTE`);
        }else{
            console.log(`Ingresó una nota inválida`);
            cantidadError++;
        }
        console.log(`Cantidad de veces que se equivocoó el usuario: ${cantidadError}`);
        desea = prompt(`Desea agregar una nueva nota? S/N`);
        if(desea=='s'|| desea=='S'){
            desea = true;
        }else if(desea=='n'|| desea=='N'){
            desea = false;
        }else{
            console.log(`Ingresó un comando inválido`);
            desea = false;
        }
    }
}

{
    let opcion;
    let salir;
    do{
        opcion = prompt(`Desea agregar una nota de trabajo final? S/N`);
        if(opcion == 's' || opcion == 'S'){
            agregarNota();
        }else if(opcion == 'n' || opcion == 'N'){
            salir = true
        }else{
            console.log(`Ingreso un comando incorrecto.`);
        }
    }while(salir!=true);
}

/*Tarifas de vehiculos*/
let tarifaAuto = 4000;
let tarifaCamioneta = 12000;
let tarifaCamion = 22000;
let tarifaMoto = 1500;
/*Contadores*/
let contAutos = 0;
let contCamionetas = 0;
let contCamiones = 0;
let contMotos = 0;
/*Acumuladores*/
let totalAutos = 0;
let totalCamionetas = 0;
let totalCamiones = 0;
let totalMotos = 0;


function realizar_cobro(){
    let opcion;
    let salir = false;
    console.log(`SECCION DE COBRO:`)
    do{
        opcion = prompt(`A-Automovil     C-Camioneta     K-Camión     M-Moto     N-Cancelar. Ingrese una opción para realizar el cobro:`);
        if(opcion == 'A' || opcion == 'a'){
            console.log(`Eligió ${opcion} - Automovil. Cobrar: $4.000`);
            totalAutos = totalAutos + tarifaAuto;
            contAutos++;
            console.log(`Se realizó el pago. Levantando barrera...`);
        }else if(opcion == 'C' || opcion == 'c'){
            console.log(`Eligió ${opcion} - Camioneta. Cobrar: $12.000`);
            totalCamionetas = totalCamionetas + tarifaCamioneta;
            contCamionetas++;
            console.log(`Se realizó el pago. Levantando barrera...`);
        }else if(opcion == 'K' || opcion == 'k'){
            console.log(`Eligió ${opcion} - Camión. Cobrar: $22.000`);
            totalCamiones = totalCamiones + tarifaCamion;
            contCamiones++;
            console.log(`Se realizó el pago. Levantando barrera...`);
        }else if(opcion == 'M' || opcion == 'm'){
            console.log(`Eligió ${opcion} - Moto. Cobrar: $1.500`);
            totalMotos = totalMotos + tarifaMoto;
            contMotos++;
            console.log(`Se realizó el pago. Levantando barrera...`);
        }else if(opcion == 'N' || opcion == 'n'){
            console.log(`Eligió ${opcion} - Cancelar.`);
            salir = true;
        }else{
            console.log(`Ingresó un comando incorrecto`);
        }
    }while(salir != true);
}

function mostrarJornadaLaboral(){
    let totalRecaudado = 0;
    console.log(`Total de autos cobrados en la jornada: $${totalAutos}`);
    console.log(`Cantidad de autos cobrados: ${contAutos}`);

    console.log(`Total de camionetas cobradas en la jornada: $${totalCamionetas}`);
    console.log(`Cantidad de camionetas cobradas: ${contCamionetas}`);

    console.log(`Total de camiones cobrados en la jornada: $${totalCamiones}`);
    console.log(`Cantidad de camiones cobrados: ${contCamiones}`);

    console.log(`Total de motos cobradas en la jornada: $${totalMotos}`);
    console.log(`Cantidad de motos cobradas: ${contMotos}`);

    totalRecaudado = totalAutos+totalCamiones+totalCamionetas+totalMotos;
    console.log(`Total recaudado en la jornada: $${totalRecaudado}`);

    if(contAutos>contCamionetas){
        console.log(`Pasaron más autos que camionetas, autos ${contAutos} y camionetas ${contCamionetas}`);
    }else if(contCamionetas>contAutos){
        console.log(`Pasaron más camionetas que autos, camionetas ${contCamionetas} y autos ${contAutos}`);
    }else{
        console.log(`Pasaron la misma cantidad de camionetas que autos, camionetas ${contCamionetas} y autos ${contAutos}`);
    }
}

{
    let opcion;
    let salir = false
    do{
        console.log(`MENU PRINCIPAL`);

        opcion = prompt(`"C" - Realizar cobro o "F" - Finalizar jornada. Ingrese C o F para realizar una acción: `);

        if(opcion == 'C' || opcion == 'c'){
            console.log(`Eligió ${opcion} - Cobrar.`);
            realizar_cobro();
        }else if(opcion == 'F' || opcion == 'f'){
            console.log(`Eligió ${opcion} - Finalizar jornada.`);
            mostrarJornadaLaboral();
            salir = true;
        }else{
            console.log(`Ingresó un comando incorrecto`);
        }
    }while(salir != true);
}
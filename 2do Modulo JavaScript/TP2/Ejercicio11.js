let montoMinimo = (vehiculo)=>{
    let precioAmarok = 65000000;
    let precioTaos = 53000000;
    let precioPolo = 47000000;
    let minimo = 0;
    let minimoAux = 0.30;
    if(vehiculo === 'A'){
        minimo = (precioAmarok * minimoAux);
    }else if(vehiculo === 'T'){
        minimo = (precioTaos * minimoAux);
    }else{
        minimo = (precioPolo * minimoAux);
    }
    return minimo;
}

let montoMaximo = (vehiculo)=>{
    let precioAmarok = 65000000;
    let precioTaos = 53000000;
    let precioPolo = 47000000;
    if(vehiculo === 'A'){
        return precioAmarok;
    }else if(vehiculo === 'T'){
        return precioTaos
    }else{
        return precioPolo
    }
}

let ingresar_monto = (vehiculo)=>{
    let monto_ingresado;
    let opcion = false;
        if(vehiculo === 'A'){
            console.log(`Usted eligió ${vehiculo} - Amarok V6...`);
            do{
                monto_ingresado = Number(prompt(`Ingrese un monto mayor a $${montoMinimo(vehiculo)} y menor a $${montoMaximo(vehiculo)}`));

            
                if(monto_ingresado>= montoMinimo(vehiculo) && monto_ingresado < montoMaximo(vehiculo)){
                    calcular_restante_a_pagar(vehiculo, monto_ingresado);
                    break;
                }else{
                    console.log(`Ingresó un monto inválido`);
                    opcion = false;
                }
            }while(opcion == false);

        }else if(vehiculo === 'T'){
            console.log(`Usted eligió ${vehiculo} - Amarok V6...`);
            do{
                monto_ingresado = Number(prompt(`Ingrese un monto mayor a $${montoMinimo(vehiculo)} y menor a $${montoMaximo(vehiculo)}`));

            
                if(monto_ingresado>= montoMinimo(vehiculo) && monto_ingresado < montoMaximo(vehiculo)){
                    calcular_restante_a_pagar(vehiculo, monto_ingresado);
                }else{
                    console.log(`Ingresó un monto inválido`);
                    monto_ingresado = false;
                }
            }while(monto_ingresado==false);

        }else if(vehiculo === 'P'){
            console.log(`Usted eligió ${vehiculo} - Amarok V6...`);
            do{
                monto_ingresado = Number(prompt(`Ingrese un monto mayor a $${montoMinimo(vehiculo)} y menor a $${montoMaximo(vehiculo)}`));

            
                if(monto_ingresado>= montoMinimo(vehiculo) && monto_ingresado < montoMaximo(vehiculo)){
                    calcular_restante_a_pagar(vehiculo, monto_ingresado);
                }else{
                    console.log(`Ingresó un monto inválido`);
                    monto_ingresado = false;
                }
            }while(monto_ingresado==false);

        }else if(vehiculo === 'C'){
            console.log(`Saliendo del programa...`);
        }else{
            console.log(`Eligió una opción incorrecta... Elija de nuevo por favor.`);
        }
}

let calcular_restante_a_pagar = (vehiculo, monto_ingresado)=>{
    let tasa = 0, cuotas = 0;
    let monto = 0, opcion = 0;
    console.log(`Ingresó $${monto_ingresado.toLocaleString()}`)
    monto = montoMaximo(vehiculo) - monto_ingresado;
    console.log(`Le resta entregar: $${monto.toLocaleString()}`);
    do{
        opcion = Number(prompt(
            `ELija una forma de pago: \n
            1)12 cuotas (9.9% ANUAl) \n
            2)24 cuotas (22% ANUAL) \n
            3)36 cuotas (33% ANUAL)`));

        if(opcion === 1){
            console.log(`Usted eligió pagar en 12 cuotas (9.9% ANUAl)`);
            tasa = 0.099;
            cuotas = 12;
        }else if(opcion === 2){
            console.log(`Usted eligió pagar en 24 cuotas (22% ANUAl)`);
            tasa = 0.22;
            cuotas = 24;
        }else if(opcion === 3){
            console.log(`Usted eligió pagar en 36 cuotas (33% ANUAl)`);
            tasa = 0.33;
            cuotas = 36;
        }else{
            console.log(`Eligió una opción invalida`);
        }
    }while(opcion != 1 && opcion != 2 && opcion != 3);

    let interes = monto * tasa;
    let totalConInteres = monto + interes;
    let cuotaMensual = totalConInteres / cuotas;

    console.log(`
        Resumen de la operación: \n
        Precio del vehiculo: $${montoMaximo(vehiculo).toLocaleString()} \n
        Primera Entrega: $${monto_ingresado.toLocaleString()}  \n
        Restante: $${monto.toLocaleString()} \n
        Interés aplicado: (${(tasa * 100).toFixed(1)}%): $${interes.toLocaleString()} \n
        Total a pagar con interés: $${totalConInteres.toLocaleString()} \n
        Plan elegido: ${cuotas} cuotas \n
        Valor de cada cuota: $${cuotaMensual.toLocaleString()} \n
        `)
}

{
    let vehiculo;
    do{
        vehiculo = prompt(`Selecciona el vehiculo de interés:\n
            - A (AMAROK V6 (OFERTA: $65.000.000)).\n
            - T (TAOS $53.000.000).\n
            - P (Polo Nuevo $47.000.000).\n
            - C (Cancelar).`);

        vehiculo = vehiculo.toUpperCase();
        ingresar_monto(vehiculo);

    }while(vehiculo != 'C');
}
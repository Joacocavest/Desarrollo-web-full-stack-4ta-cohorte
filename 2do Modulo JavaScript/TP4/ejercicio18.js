

import {verAlumnos, unificar_cohortes, filtrar_aprobados, filtrar_desaprobados, ordenar_alumnos, buscar_alumno, contar_aprobados_a, contar_aprobados_b} from "./controlador.js";


//modifique esta funcion para que tambien muestre la nota de los alumnos para el punto 3.
const mostrar_alumnos = (cohorte)=>{
    console.clear();
    cohorte.forEach(alumno =>{
        console.log(`${alumno.apellido} - ${alumno.nombre} - ${alumno.nota_final}`);
    })
}




window.addEventListener("load", ()=>{

    const select_cohorte = document.querySelector("#cohorte");
    const btn_ver_alumnos = document.querySelector("#btn_ver_alumnos");

    const btn_unificar = document.querySelector("#btn_unificar");

    const btn_aprobados = document.querySelector("#btn_aprobados");
    const btn_desaprobados = document.querySelector("#btn_desaprobados");

    const btn_ordenar = document.querySelector("#btn_ordenar");

    const dni_alumno = document.querySelector("#dni_alumno");
    const btn_buscar_alumno = document.querySelector("#btn_buscar");

    const btn_contar_a = document.querySelector("#btn_contar_a");
    const btn_contar_b = document.querySelector("#btn_contar_b");

    btn_ver_alumnos.addEventListener("click", async ()=>{

        let cohorte = null;

        try {
            //funciona dinamicamente para todas las cohortes
            cohorte = await verAlumnos(select_cohorte.value);
            mostrar_alumnos(cohorte);
        } catch (error) {
            console.log(`Ocurrió un error: ${error}`);
        }

    })

    

    btn_unificar.addEventListener("click", ()=>{
        //unificamos los 4 objetos con el operador spread
        const todos_los_alumnos = unificar_cohortes();
        console.log(todos_los_alumnos);
    });



    btn_aprobados.addEventListener("click", ()=>{
        const todos_los_aprobados = filtrar_aprobados();
        mostrar_alumnos(todos_los_aprobados);
        console.log(todos_los_aprobados);
    });
    btn_desaprobados.addEventListener("click", ()=>{
        const todos_los_desaprobados = filtrar_desaprobados();
        mostrar_alumnos(todos_los_desaprobados);
        console.log(todos_los_desaprobados);
    });



    btn_ordenar.addEventListener("click", ()=>{
        const alumnos_ordenados = ordenar_alumnos();
        mostrar_alumnos(alumnos_ordenados);
        console.log(alumnos_ordenados);
    })



    btn_buscar_alumno.addEventListener("click", ()=>{
        const alumno_buscado = buscar_alumno(dni_alumno.value);
        console.log(alumno_buscado);
    });


    btn_contar_a.addEventListener("click", ()=>{
        console.log(`La cantidad de alumnos aprobados es: ${contar_aprobados_a()}`);
    });

    btn_contar_b.addEventListener("click", ()=>{
        console.log(`La cantidad de alumnos aprobados es: ${contar_aprobados_b()}`);
    })


})
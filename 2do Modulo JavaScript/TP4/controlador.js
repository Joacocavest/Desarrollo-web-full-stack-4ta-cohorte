
import {cohorte01, cohorte02, cohorte03, cohorte04} from "./modelo.js";

export const verAlumnos = async (cohorte)=>{

    let alumnos = null;

    try {
        switch(Number(cohorte)){
            case 1:
                alumnos = cohorte01;
                break;
            case 2:
                alumnos = cohorte02;
                break;
            case 3:
                alumnos = cohorte03;
                break;
            case 4:
                alumnos = cohorte04;
                break;
            default:
                console.log("Ingresó un comando inválido");
                break;
        }

    } catch (error) {
        console.log(`Ocurrió un error: ${error}`);
    }

    return alumnos;

}


export const unificar_cohortes = ()=>{
    const todos_los_alumnos = [
        ...cohorte01,
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];
    return todos_los_alumnos;
}


export const filtrar_aprobados = ()=>{
    let todos_los_alumnos = unificar_cohortes();
    let aprobados = todos_los_alumnos.filter(alumno => alumno.nota_final > 5);

    return aprobados;
}
export const filtrar_desaprobados = ()=>{
    let todos_los_alumnos = unificar_cohortes();
    let desaprobados = todos_los_alumnos.filter(alumno => alumno.nota_final <= 5);

    return desaprobados;
}


export const ordenar_alumnos = ()=>{
    let todos_los_alumnos = unificar_cohortes();
    const alumnos_ordenados = [...todos_los_alumnos].sort((a,b)=>a.nota_final - b.nota_final);
    return alumnos_ordenados; 
}

export const buscar_alumno = (dni)=>{
    let todos_los_alumnos = unificar_cohortes();
    const alumno_a_buscar = todos_los_alumnos.find(alumno => alumno.dni === dni);
    return alumno_a_buscar;
}



export const contar_aprobados_a = ()=>{
    let todos_los_alumnos = unificar_cohortes();
    const cantidad_aprobados_if = todos_los_alumnos.reduce((contador, alumno)=>{
        if(alumno.nota_final > 5){
            contador++;
            return contador;
        }else{
            return contador;
        }
    }, 0);
    return cantidad_aprobados_if;
}

export const contar_aprobados_b = ()=>{
    let todos_los_alumnos = unificar_cohortes();
    const cantidad_aprobados_ternario = todos_los_alumnos.reduce((contador, alumno)=> alumno.nota_final > 5? contador+1 : contador, 0);
    return cantidad_aprobados_ternario;
}
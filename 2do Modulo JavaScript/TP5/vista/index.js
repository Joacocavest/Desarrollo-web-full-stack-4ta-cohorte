
import {verPaises} from "../controlador/controlador.js"

const mostrar_paises = (paises)=>{   

    let tabla_row_paises = document.querySelector("#info_paises");
    tabla_row_paises.innerHTML = '';

    const filas_tabla = paises.map(pais =>{
        let fila = `
        <tr>
            <td>${pais.name.common}</td>
            <td>${pais.languages ? Object.values(pais.languages): 'N/A'}</td>
            <td><a href="${pais.maps.googleMaps}">${pais.maps.googleMaps}</a></td>
            <td><img src="${pais.flags.png}" alt="${pais.flags.alt}"></td>
            <td>${pais.fifa}</td>
        </tr>`

        return fila;
    })

    console.log(filas_tabla);

    filas_tabla.forEach(fila => tabla_row_paises.innerHTML = tabla_row_paises.innerHTML + fila);

}


window.addEventListener("load", ()=>{

    const select_continente = document.querySelector("#continentes");
    const btnMostrarPaises = document.querySelector("#btnMostrarPaises");

    btnMostrarPaises.addEventListener("click", async ()=>{

        let paises= null

        try {

            paises = await verPaises(select_continente.value);
            console.log(paises);         
        
        } catch (error) {
            console.log(`Ocurrió un error: ${error}`);
        }

        mostrar_paises(paises);

    });

})



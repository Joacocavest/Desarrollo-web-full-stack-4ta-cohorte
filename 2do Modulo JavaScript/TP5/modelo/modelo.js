


export const traer_paises = async(ruta)=>{

    let response = null;
    try {
        const peticion = await fetch(ruta);

        response = await peticion.json();

    } catch (error) {
        console.log(`Ocurrio un error: ${error}`);
    }

    return response;

}
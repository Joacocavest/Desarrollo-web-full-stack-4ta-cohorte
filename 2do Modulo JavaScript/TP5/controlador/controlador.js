
import { traer_paises } from "../modelo/modelo.js"


export const verPaises = async(continente_elegido)=>{

    let url_endpoint=null;
    let paises = null;

    try {
        switch(Number(continente_elegido)){
        case 1:
            //Europa
            url_endpoint = "https://restcountries.com/v3.1/region/europe";
            break;
        case 2:
            //America
            url_endpoint = "https://restcountries.com/v3.1/region/americas";
            break;
        case 3:
            //Asia
            url_endpoint = "https://restcountries.com/v3.1/region/asia";
            break;
        case 4:
            //Africa
            url_endpoint = "https://restcountries.com/v3.1/region/africa";
            break;
        case 5:
            //Oceania
            url_endpoint = "https://restcountries.com/v3.1/region/oceania";
            break;
        }

        paises = await traer_paises(url_endpoint);
        
    } catch (error) {
        console.log(`Ocurrio un error: ${error}`);
    }

    return paises
}

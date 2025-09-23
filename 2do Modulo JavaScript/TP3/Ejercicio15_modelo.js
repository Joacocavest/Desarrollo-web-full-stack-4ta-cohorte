

export const clasificar_edad=(edad)=>{

    let clasificacion='';

    if(edad >=0 && edad <=12){
        clasificacion = 'Niño/a';
    }else if(edad > 12 && edad <= 17){
        clasificacion = 'Adolescente';
    }else if(edad > 17 && edad <= 64){
        clasificacion = 'Adulto';
    }else if(edad > 64){
        clasificacion = 'Adulto mayor';
    }else{
        clasificacion = 'Edad inválida';
    }

    return clasificacion;
}
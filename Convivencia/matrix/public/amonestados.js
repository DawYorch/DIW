
var seleccion;
var arrayVaciar;

// MODO RAFA 

// function cambio(){

//     seleccion = document.getElementById("alumnos").value;
//     // console.log(seleccion);
    
//     vaciado();
//     document.getElementById(seleccion).style.order=-1;
    

// }

// function vaciado(){

//     arrayVaciar = document.getElementsByClassName("alumno");

//     for(i=0 ; i<arrayVaciar.length ; i++){

//         arrayVaciar[i].style.order=0;
//     }

// }


// MODO ADRIAN


var anterior;

function cambio(){

    if(anterior != null){

        document.getElementById(anterior).style.order=0;

    }

    seleccion = document.getElementById("alumnos").value;
    document.getElementById(seleccion).style.order=-1;

    anterior = seleccion;

}



    
// Como hemos puesto la funcion en el mismo select (onchange) no ponemos document.addEventListener("DOMContentLoaded" , cargar , false);
// y dentro de la funcion cargar pondriamos document.getElementById("alumnos")addEventListener("change" , cambio, false);

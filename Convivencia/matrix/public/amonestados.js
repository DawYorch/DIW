var eleccion;
var alumnos;


function cargar(){

document.getElementById("selecciona").addEventListener("change" , cambiar , false );

}

function cambiar(){

    eleccion=document.getElementById("selecciona").value;
   

    alumnos=document.getElementsByClassName("alumno");

    for(var i=0; i<alumnos.length ; i++){

         alumnos[i].style.order=0;

    }

    document.getElementById(eleccion).style.order=-1;



}







document.addEventListener("DOMContentLoaded", cargar, false);

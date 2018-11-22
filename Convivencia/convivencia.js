
function cargar(){
    document.getElementById("btLleu").addEventListener("click", muestraLeves , false);
    document.getElementById("btGreu").addEventListener("click", muestraGraves , false);




}

function muestraLeves(){

        document.getElementById("leves").style.display = "block";
        document.getElementById("graves").style.display = "none";
}

function muestraGraves(){

    document.getElementById("leves").style.display = "none";
    document.getElementById("graves").style.display = "block";
}








document.addEventListener("DOMContentLoaded" , cargar , false);
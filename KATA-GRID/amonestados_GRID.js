var seleccion;
var aux;

var div_seleccion;
var arrayVaciar;


function cambio(){

    seleccion = document.getElementById("alumnos").value;  

    div_seleccion = document.getElementById(seleccion);   

    aux = div_seleccion.style.gridColumn.split("/"); 
    aux = Number(aux[0].trim());

    console.log("aux vale "+aux);
    console.log("#");

    arrayVaciar = document.getElementsByClassName("alumno"); 
    
    for( var i=0 ; i < arrayVaciar.length ; i++){  

            //console.log(arrayVaciar[i]);                   
            console.log(arrayVaciar[i].style.gridColumn);  
            //console.log(aux + typeof(aux));
            var valor = arrayVaciar[i].style.gridColumn.split("/");
            var valor2 = Number(valor[0].trim());

            if ( valor2 < aux){  
                    var grid = arrayVaciar[i].style.gridColumn.split("/");
                    arrayVaciar[i].style.gridColumn = Number(grid[0].trim())+1;
                    console.log(arrayVaciar[i].style.gridColumn);
                    console.log("$");
            }
    }
    console.log("div_seleccion: " + div_seleccion.style.gridColumn);
    div_seleccion.style.gridColumn = 3;
}

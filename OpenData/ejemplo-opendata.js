
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://mapas.valencia.es/lanzadera/opendata/INNOSOCIAL/JSON ');
xhr.onload = function() {
    if (xhr.status === 200) {
        // Si todo ha ido bien
        // asignamos la respuesta a una variable
        jsonResponse = xhr.responseText;
        
        // ahora aun se trata de un texto, 
        // vamos a transformarla en objeto
        jsonObjeto = JSON.parse(jsonResponse);
        console.log(jsonObjeto);
        // Veamoslo en consola si se quiere 
        //console.log(jsonObjeto.features);

        // Recorremos hora todos elementos de obras ejecutadas
        jsonObjeto.features.forEach(element => {
            // Le hacemos un console.log
            //console.log(element);

            // Obtenemos la tabla de obras
            var tbl = document.getElementById("tablaObras");

            // Creamos un tr
            var tr = document.createElement('tr');

            // Creamos un td
            var td = document.createElement('td');

            // Creamos un txt con el contenido obtenido
            var txt = document.createTextNode(element.properties.gid);
            //console.log(element.properties.titulo);
            var tdC = document.createElement('td');
            var txtC = document.createTextNode(element.properties.nombre);
            var tdP = document.createElement('td');
            var txtP = document.createTextNode(element.properties.email);
            var tdx = document.createElement('td');
            var txtX = document.createTextNode(element.properties.loc);
            // Anyadimos en cascada los elementos
            td.appendChild(txt);
            tr.appendChild(td);
            tdC.appendChild(txtC);
            tr.appendChild(tdC);
            tdP.appendChild(txtP);
            tr.appendChild(tdP);
            tdx.appendChild(txtX);
            tr.appendChild(tdx);
            tbl.appendChild(tr);
            

        });
        
        }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();

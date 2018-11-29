$.getJSON( "incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
  console.log(key);
    // fila = document.createElement("tr");
    // columna_nombre
    // items.push(fila);
    items.push( "<li id='" + key + "' class='list-group-item'> ALUMNO: " + val.alumno + " PROFESOR : "+val.profe+
    " TIPO: "+val.gravedad+"<a href="+"http://localhost:3000/Convivencia2.html?analid="+val._id+"> Ver Incidencia </a></li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});

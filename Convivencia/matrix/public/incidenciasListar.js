$.getJSON( "incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
  console.log(key);
    // fila = document.createElement("tr");
    // columna_nombre
    // items.push(fila);
    items.push( "<li id='" + key + "' class='list-group-item'> Alumno: " + val.alumno + " Profesor : "+val.profe+" Tipo de Incidencia "+val.gravedad+"</li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});

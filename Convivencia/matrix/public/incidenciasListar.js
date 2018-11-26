$.getJSON( "incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
	console.log(key);
    items.push( "<li id='" + key + "' class='list-group-item'> Alumno: " + val.alumno + " Profesor : "+val.profe+" Tipo de Incidencia "+val.gravedad+"</li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});

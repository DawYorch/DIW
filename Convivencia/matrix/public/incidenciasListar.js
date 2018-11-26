$.getJSON( "incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
	console.log(key);
    items.push( "<li id='" + key + "' class='list-group-item'>[" + val.alumno + "] + Profesor : "+val.profe+"</li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});

$.getJSON( "incidencias", function( data ) {

  var items = [];

    $.each( data, function( key, val ) {

  console.log(key);

    items.push( "<div class='divListar' id='" + key + "'>"+
                "<div class='divAlumno'>" + val.alumno + "</div>"+
                "<div class='divProfe'> "+ val.profe + "</div>"+
                "<div class='divGravedad'> "+val.gravedad+ "</div>"+
                "<div class='divFecha'> "+ "</div>"+
                "<div class='divEnlace'><a href="+"Convivencia2.html?"+val._id+"> Ver Incidencia </a></div>"+
                "</div>" );
  });
 
  
  $( "<div/>", {

    "class": "listado",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});


// items.push( "<li id='" + key + "' class='list-group-item'> ALUMNO: " + val.alumno + " PROFESOR : "+val.profe+
// " TIPO: "+val.gravedad+"<a href="+"Convivencia2.html?analid="+val._id+"> Ver Incidencia </a></li>" );
// });

// $( "<ul/>", {

//   "class": "list-group",
//   html: items.join( "" )
// }).appendTo( "#divLista" );
// });
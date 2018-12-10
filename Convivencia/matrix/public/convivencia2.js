function rellenaDatos() {

    var incID = window.location.search.substr(1);


    /*
    function imprimecosas(datos){
        console.log(datos);
    }

    function mismovidas(data){
        $.each(data, imprimecosas(data));
    }

    $.getJSON( "incidencias/"+incID, mismovidas(data));

    */
    
    $.getJSON( "incidencias/"+incID, function( data ) {
      
          $.each( data, function( key, val ) {
              console.log(key+":"+val);
              // Busca mediante JQuery los inputs que tenga 
              // ese name 
              $( "input[name="+key+"]" ).val( val );
            }
    )});
    
}




document.addEventListener("DOMContentLoaded" , rellenaDatos , false);
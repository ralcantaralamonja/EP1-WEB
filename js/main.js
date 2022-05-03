$(function(){

    $("a[href^='https://']").attr("target","_blank"); 

    var noticiasBlanco = true;
    $("#btnBlancoNegro").click(function(){
        if(noticiasBlanco == true){
            $("#noticias").css("background-color","#000000").css("color","#CCCCCC");
            noticiasBlanco = false;
        }
        else{
            $("#noticias").css("background-color","#FFFFFF").css("color","#555555");
            noticiasBlanco = true;
        }
    })

    $("#valores .col").click(function(){
        console.log($(this).css("background-color"));
        if($(this).css("background-color")=="rgba(0, 0, 0, 0)"){ 
            $(this).css("background-color","#FFCC00");
        }
        else{
            $(this).css("background-color","transparent");
        }
        //this hace referencia al objeto que recibió el evento
    })

    $("#valores h2").click(function(){
        $("#valores .col").css("background-color","transparent");
    });

    $("section").each(function(){
        //each permite examinar uno a uno los elementos seleccionados
        //console.log("Prueba");
        var tituloSeccion = $(this).find("h2").text();
        console.log(tituloSeccion);
        //this hace referencia al objeto que se está examinando en estos momentos
        //Con find busca un objeto dentro del objeto seleccionado
        //con text() se extrae el contenido texto de un objeto  

        var idSeccion = $(this).attr("id");
        console.log("---" + idSeccion);

    $("#menu-principal")
        .append('<li class="nav-item"><a class="nav-link" href="#' + idSeccion + '">' + tituloSeccion + '</a></li>');
        //Con append se agrega contenido al final del objeto seleccionado
    })

})
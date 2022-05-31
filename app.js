$(function () {
  $('#galeria').click(function () {
    $('#figure_1').hide();
  });
  $('#galeria').click(function () {
    $('#figure_2').hide();
  });
  $('#galeria').click(function () {
    $('#figure_3').hide();
  });
  $('#galeria').click(function () {
    $('#figure_4').hide();
  });
  $('#galeria').click(function () {
    $('#figure_5').hide();
  });
  $('#galeria').click(function () {
    $('#figure_6').hide();
  });

  $("#icon").mouseenter(function () {
    $("#icon").css("background-color", "#000000").css("color", "#1E90FF");
  });
  $("#icon").mouseleave(function () {
    $("#icon").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  //home
  $("#home").mouseenter(function () {
    $("#home").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $("#home").mouseleave(function () {
    $("#home").css("background-color", "#FFFFFF").css("color", "#000000");
  });
  //about
  $("#about").mouseenter(function () {
    $("#about").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $("#about").mouseleave(function () {
    $("#about").css("background-color", "#FFFFFF").css("color", "#000000");
  });
  //services
  $("#services").mouseenter(function () {
    $("#services").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $("#services").mouseleave(function () {
    $("#services").css("background-color", "#FFFFFF").css("color", "#000000");
  });
  //team
  $("#team").mouseenter(function () {
    $("#team").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $("#team").mouseleave(function () {
    $("#team").css("background-color", "#FFFFFF").css("color", "#000000");
  });
  //videos
  $("#videos").mouseenter(function () {
    $("#videos").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $("#videos").mouseleave(function () {
    $("#videos").css("background-color", "#FFFFFF").css("color", "#000000");
  });
  //contact
  $("#contact").mouseenter(function () {
    $("#contact").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $("#contact").mouseleave(function () {
    $("#contact").css("background-color", "#FFFFFF").css("color", "#000000");
  });
  // appoinment
  $("#appoinment").mouseenter(function () {
    $("#appoinment").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $("#appoinment").mouseleave(function () {
    $("#appoinment").css("background-color", "#FFFFFF").css("color", "#000000");
  });
  //text-video
  $(".text-video").mouseenter(function () {
    $(".text-video").css("background-color", "#ff0000").css("color", "#ffffff");
  });
  $(".text-video").mouseleave(function () {
    $(".text-video").css("background-color", "#000000").css("color", "#000000");
  });
  //text-about

  $(".text-about").mouseenter(function () {
    $(".text-about").css("background-color", "#ffffff").css("color", "#1E90FF");
  });
  $(".text-about").mouseleave(function () {
    $(".text-about").css("background-color", "#ffffff").css("color", "#000000");
  });
  //text-contacts
  $(".text-contacts").mouseenter(function () {
    $(".text-contacts").css("background-color", "#FFFFFF").css("color", "#1E90FF");
  });
  $(".text-contacts").mouseleave(function () {
    $(".text-contacts").css("background-color", "#000000").css("color", "#000000");
  });
  //text-tittle-ourteam
  $(".text-tittle-ourteam").mouseenter(function () {
    $(".text-tittle-ourteam")
      .css("background-color", "#FFFFFF")
      .css("color", "#ffffff");
  });
  $(".text-tittle-ourteam").mouseleave(function () {
    $(".text-tittle-ourteam")
      .css("background-color", "#000000")
      .css("color", "#FFFFFF");
  });
  //text-tittle-review
  $(".text-tittle-review").mouseenter(function () {
    $(".text-tittle-review")
      .css("background-color", "#FFFFFF")
      .css("color", "#ffffff");
  });
  $(".text-tittle-review").mouseleave(function () {
    $(".text-tittle-review")
      .css("background-color", "#000000")
      .css("color", "#FFFFFF");
  });
  //tex-contacts
  $(".tex-contactss").mouseenter(function () {
    $(".tex-contactss")
      .css("background-color", "#FFFFFF")
      .css("color", "#ffffff");
  });
  $(".tex-contactss").mouseleave(function () {
    $(".tex-contactss")
      .css("background-color", "#000000")
      .css("color", "#FFFFFF");
  });
  //text-title-app
  $(".text-title-appo").mouseenter(function () {
    $(".text-title-appo")
      .css("background-color", "#FFFFFF")
      .css("color", "#ffffff");
  });
  $(".text-title-appo").mouseleave(function () {
    $(".text-title-appo")
      .css("background-color", "#000000")
      .css("color", "#FFFFFF");
  });
  //.btn
  $(".btn").mouseenter(function () {
    $(".btn").css("background-color", "#FFFFFF").css("color", "#ffffff");
  });
  $(".btn").mouseleave(function () {
    $(".btn").css("background-color", "#009dff").css("color", "#ffffff");
  });
  //AGREGANDO GALERIA
  $("#galeria figure").append("<figcaption>"); //agregando figcaption

  //efecto de desbanecido para la galeria
  $("#galeria figure").mouseenter(function () {
    $(this).find("figcaption").stop().fadeIn("fast");
  });

  $("#galeria figure").mouseleave(function () {
    $(this).find("figcaption").stop().fadeOut("fast");
  });

  $("#galeria figure").each(function () {
    var nombre = $(this).find("img").attr("title");

    //agregar nombre en la cortina y icono
    $(this)
      .find("figcaption")
      .html("<div><p>" + nombre + "</p></div>");
  });

  //fetcg
  $("#lista-services li").click(function () {
    var nombrearchivo = $(this).attr("archivo-services");

    $("#lista-services li").removeClass("active");
    $(this).addClass("active"); /* Añadir clase */

    fetch("services/" + nombrearchivo + ".html")
      .then(function (response) {
        return response.text(); //Indica el tipo de dato que devuelve al leer el archivo
      })
      .then(function (data) {
        //la variable data contiene los datos
        console.log(data);
        $("#visor-services").html(data);
      });
  });

  $("#menu-item-Reviews").click(function () {
    fetch("componentes/reviews.html")
      .then(function (response) {
        return response.text(); //Indica el tipo de dato que devuelve al leer el archivo
      })
      .then(function (data) {
        //la variable data contiene los datos
        console.log(data);
        $("#main-container").html(data);
      });
  });

  $("#menu-item-Services").click(function () {
    fetch("componentes/services.html")
      .then(function (response) {
        return response.text(); //Indica el tipo de dato que devuelve al leer el archivo
      })
      .then(function (data) {
        //la variable data contiene los datos
        console.log(data);
        $("#main-container").html(data);
      });
  });


  $("#menu-item-Teams").click(function () {
    fetch("componentes/teams.html")
      .then(function (response) {
        return response.text(); //Indica el tipo de dato que devuelve al leer el archivo
      })
      .then(function (data) {
        //la variable data contiene los datos
        console.log(data);
        $("#main-container").html(data);
      });
  });

  $("#menu-item-home").click(function () {
    fetch("index.html")
      .then(function (response) {
        return response.text(); //Indica el tipo de dato que devuelve al leer el archivo
      })
      .then(function (data) {
        //la variable data contiene los datos
        console.log(data);
        $("#HOME").html(data);
      });
  });
});

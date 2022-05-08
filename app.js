$(function(){
    /*declarando variable y declarando función principal en nav */
    var home = true;
    var about = true;
    var services = true;
    var team = true;
    var reviews = true;
    var videos = true;
    var contact = true;
    var appoinment = true;


    $("#home").click(function(){
        if(home == true){
            $("#home").css("background-color","#fbc204").css("color","#FFFFFF");
            home = false;
        }else{
            $("#home").css("background-color","#080c0c").css("color","#FFFFFF)");
            home = true;
        }
    })
    $("#about").click(function(){
            if(about == true){
                $("#about").css("background-color","#fbc204").css("color","#FFFFFF");
                about = false;
            }else{
                $("#about").css("background-color","#080c0c").css("color","#FFFFFF");
                about = true;
            }
        })

    $("#services").click(function(){
            if(services == true){
                $("#services").css("background-color","#fbc204").css("color","#FFFFFF");
                services = false;
            }else{
                $("#services").css("background-color","#080c0c").css("color","#FFFFFF");
                services = true;
            }
        })

    $("#team").click(function(){
            if(team == true){
                $("#team").css("background-color","#fbc204").css("color","#FFFFFF");
                team = false;
            }else{
                $("#team").css("background-color","#080c0c").css("color","#FFFFFF");
                team = true;
            }
        })
    
    $("#reviews").click(function(){
            if(reviews == true){
                $("#reviews").css("background-color","#fbc204").css("color","#FFFFFF");
                reviews = false;
            }else{
                $("#reviews").css("background-color","#080c0c").css("color","#FFFFFF");
                reviews = true;
            }
        })
    
    $("#videos").click(function(){
            if(videos == true){
                $("#videos").css("background-color","#fbc204").css("color","#FFFFFF");
                videos = false;
            }else{
                $("#videos").css("background-color","#080c0c").css("color","#FFFFFF");
                videos = true;
            }
        })
    
        $("#contact").click(function(){
            if(contact == true){
                $("#contact").css("background-color","#fbc204").css("color","#FFFFFF");
                contact = false;
            }else{
                $("#contact").css("background-color","#080c0c").css("color","#FFFFFF");
                contact = true;
            }
        })

        $("#appoinment").click(function(){
            if(appoinment == true){
                $("#appoinment").css("background-color","#fbc204").css("color","#FFFFFF");
                appoinment = false;
            }else{
                $("#appoinment").css("background-color","#080c0c").css("color","#FFFFFF");
                appoinment = true;
            }
        })
})
            
            
        
        
        

            
        

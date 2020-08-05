$(document).ready(function(){
    $("#appetizer").hide()
    $("#maincourse").hide()
    $("#brn").hide()
    $("#ds").hide()
    $("#assamese").hide()
    $("#back").hide()
    
    $(".appetizers").click(function(){
        $("#menuoptions").fadeOut()
        $("#appetizer").fadeToggle()
        $("#back").fadeToggle()
    });
    $(".maincourse").click(function(){
        $("#menuoptions").fadeOut()
        $("#maincourse").fadeToggle()
        $("#back").fadeToggle()
    });
    $(".brn").click(function(){
        $("#menuoptions").fadeOut()
        $("#brn").fadeToggle()
        $("#back").fadeToggle()
    });
    $(".ds").click(function(){
        $("#menuoptions").fadeOut()
        $("#ds").fadeToggle()
        $("#back").fadeToggle()
    });
    $(".cakes").click(function(){
        $("#menuoptions").fadeOut()
        $("#cakes").fadeToggle()
        $("#back").fadeToggle()
    });
    $(".assamese").click(function(){
        $("#menuoptions").fadeOut()
        $("#assamese").fadeToggle()
        $("#back").fadeToggle()
    });
    $("#back").click(function(){ 
        $("#appetizer").hide()
        $("#maincourse").hide()
        $("#brn").hide()
        $("#ds").hide()
        $("#assamese").hide()
        $("#back").hide()
        $("#menuoptions").fadeIn()


    });

    




});






    

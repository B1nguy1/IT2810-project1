//Changing background-color for canvas
$("#myCanvas").hover(function(){
    $("#myCanvas").css("background","#ffb90f");
},
function(){
    $("#myCanvas").css("background","#f0f0f0")
});

$("#cloud").click(function(){
    $("#circle1").toggleClass("removeCircles");
    $("#circle2").toggleClass("removeCircles");
    $("#circle3").toggleClass("removeCircles");
    $("#circle4").toggleClass("removeCircles"); 
    $("#circle5").toggleClass("removeCircles");
});

$("#bird").click(function(){
    $("#bird-p").fadeOut(2000);
});

$('#doc-button').click(() => {
    $("#doc").toggle(() => {
        $('#doc-button').text(function(i, text){
            return text === "Skjul" ? "Se dokumentasjon" : "Skjul";
        });
    }); 
});
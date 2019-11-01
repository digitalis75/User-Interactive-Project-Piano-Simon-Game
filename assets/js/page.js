// header side panel
function openNav() {
    document.getElementById("mySidepanel").style.width = "150px";
    }

function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}

//how to play buttons
$(document).ready(function(){   
    $('.how_piano').click(function(){
        $(this).toggleClass('how-active');
    });

    $('.how_game').click(function(){
        $(this).toggleClass('how-active');
    });
});

// canvas
var canvas = document.getElementById("demoCanvas");  
if (canvas.getContext)   
{  
var ctx = canvas.getContext("2d");         
var gradient = ctx.createLinearGradient(10, 0, 300, 0);
gradient.addColorStop(1 / 2, 'white');
 gradient.addColorStop(1, 'aquamarine');
ctx.fillStyle = gradient;  
ctx.font = "44px Roboto";
ctx.strokeStyle = "white"; 
 ctx.textAlign = "center";
ctx.fillText("Piano Game", canvas.width/2, canvas.height/3*2);
}
var id;
var color;

var keyId = ["c", "c-sharp", "d", "d-sharp", "e", "f", "f-sharp", "g", "g-sharp", "a", "a-sharp", "h", "c1", "c1-sharp", "d1", "d1-sharp"];
var keySound =["audio/C.wav", "audio/C_s.wav", "audio/D.wav", "audio/D_s.wav", "audio/E.wav", "audio/F.wav", "audio/F_s.wav", "audio/G.wav", "audio/G_s.wav", "audio/A.wav", "audio/Bb.wav", "audio/B.wav", "audio/C1.wav", "audio/C_s1.wav", "audio/D1.wav"];

//PLAYS KEYBOARD
$(document).ready(function(){
    $(".keyWhite, .keyBlack").click(function(){ 
        var key = $(this).attr("id");
        id = keyId.indexOf(key);
        color = $(this).attr("class").split(" ")[1];
        
        addColorSound(id, color);
    }); 
});

//add color and sound
function addColorSound(id, color) {
    $("#"+ keyId[id]).addClass(color + "-active");
    playSound(id);
    setTimeout(function(){
        $("#" + keyId[id]).removeClass(color + "-active");
    }, 500);
}

//plays sound
function playSound(id){
    var sound = new Audio(keySound[id]);
    sound.play();
}
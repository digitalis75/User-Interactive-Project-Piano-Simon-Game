var id;
var color;

keyId = ["c", "c-sharp", "d", "d-sharp", "e", "f", "f-sharp", "g", "g-sharp", "a", "a-sharp", "h", "c1", "c1-sharp", "d1", "d1-sharp"];
keySound =["assets/audio/C.wav", "assets/audio/C_s.wav", "assets/audio/D.wav", "assets/audio/D_s.wav", "assets/audio/E.wav", "assets/audio/F.wav", "assets/audio/F_s.wav", "assets/audio/G.wav", "assets/audio/G_s.wav", "assets/audio/A.wav", "assets/audio/Bb.wav", "assets/audio/B.wav", "assets/audio/C1.wav", "assets/audio/C_s1.wav", "assets/audio/D1.wav"];


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
    keyId[id].currentTime = 0;
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
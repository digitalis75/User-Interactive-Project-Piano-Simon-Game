var random = [];
var gameSeq = [];
var userSeq = [];
var j = 0;
var count = 1;
var i;
var on;
var off;
var gameInterval;
const num_of_levels = 5;

var keyId = ["c", "c-sharp", "d", "d-sharp", "e", "f", "f-sharp", "g", "g-sharp", "a", "a-sharp", "h", "c1", "c1-sharp", "d1", "d1-sharp"];
var keySound = ["assets/audio/C.wav", "assets/audio/C_s.wav", "assets/audio/D.wav", "assets/audio/D_s.wav", "assets/audio/E.wav", "assets/audio/F.wav", "assets/audio/F_s.wav", "assets/audio/G.wav", "assets/audio/G_s.wav", "assets/audio/A.wav", "assets/audio/Bb.wav", "assets/audio/B.wav", "assets/audio/C1.wav", "assets/audio/C_s1.wav", "assets/audio/D1.wav"];

var play_c = new Audio(keySound[0]);
var play_c_sharp = new Audio(keySound[1]);
var play_d = new Audio(keySound[2]);
var play_d_sharp = new Audio(keySound[3]);
var play_e = new Audio(keySound[4]);
var play_f = new Audio(keySound[5]);
var play_f_sharp = new Audio(keySound[6]);
var play_g = new Audio(keySound[7]);
var play_g_sharp = new Audio(keySound[8]);
var play_a = new Audio(keySound[9]);
var play_a_sharp = new Audio(keySound[10]);
var play_h = new Audio(keySound[11]);
var play_c1 = new Audio(keySound[12]);
var play_c1_sharp = new Audio(keySound[13]);
var play_d1 = new Audio(keySound[14]);

var error = new Audio("assets/audio/beep-03.mp3");
var winner = new Audio("assets/audio/happykids.mp3");

//game's function
function game() {
    if (count <=10) {
        off = 400;
        on = 600;
    }else {
        off = 250;
        on = 500;
    }

    gameInterval = setInterval(function(){
        if (random[j] === 1) {
            $("#c").addClass("key-c-active");
            play_c.currentTime = 0;
            play_c.play();
            gameSeq.push(1);
            setTimeout(function() {
                $("#c").removeClass("key-c-active");
            },off);
        }
        else if (random[j] === 2) {
            $("#c-sharp").addClass("key-black-active");
            play_c_sharp.currentTime = 0;
            play_c_sharp.play();
            gameSeq.push(2);
            setTimeout(function() {
                $("#c-sharp").removeClass("key-black-active");
            },off);
        }
        else if (random[j] === 3) {
            $("#d").addClass("key-d-active");
            play_d.currentTime = 0;
            play_d.play();
            gameSeq.push(3);
            setTimeout(function() {
                $("#d").removeClass("key-d-active");
            },off);
        }
        else if (random[j] === 4) {
            $("#d-sharp").addClass("key-black-active");
            play_d_sharp.currentTime = 0;
            play_d_sharp.play();
            gameSeq.push(4);
            setTimeout(function() {
                $("#d-sharp").removeClass("key-black-active");
            },off);
        }
        else if (random[j] === 5) {
            $("#e").addClass("key-e-active");
            play_e.currentTime = 0;
            play_e.play();
            gameSeq.push(5);
            setTimeout(function() {
                $("#e").removeClass("key-e-active");
            },off);
        }
        else if (random[j] === 6) {
            $("#f").addClass("key-f-active");
            play_f.currentTime = 0;
            play_f.play();
            gameSeq.push(6);
            setTimeout(function() {
                $("#f").removeClass("key-f-active");
            },off);
        }
        else if (random[j] === 7) {
            $("#f-sharp").addClass("key-black-active");
            play_f_sharp.currentTime = 0;
            play_f_sharp.play();
            gameSeq.push(7);
            setTimeout(function() {
                $("#f-sharp").removeClass("key-black-active");
            },off);
        }
        else if (random[j] === 8) {
            $("#g").addClass("key-g-active");
            play_g.currentTime = 0;
            play_g.play();
            gameSeq.push(8);
            setTimeout(function() {
                $("#g").removeClass("key-g-active");
            },off);
        }
        else if (random[j] === 9) {
            $("#g-sharp").addClass("key-black-active");
            play_g_sharp.currentTime = 0;
            play_g_sharp.play();
            gameSeq.push(9);
            setTimeout(function() {
                $("#g-sharp").removeClass("key-black-active");
            },off);
        }
        else if (random[j] === 10) {
            $("#a").addClass("key-a-active");
            play_a.currentTime = 0;
            play_a.play();
            gameSeq.push(10);
            setTimeout(function() {
                $("#a").removeClass("key-a-active");
            },off);
        }
        else if (random[j] === 11) {
            $("#a-sharp").addClass("key-black-active");
            play_a_sharp.currentTime = 0;
            play_a_sharp.play();
            gameSeq.push(11);
            setTimeout(function() {
                $("#a-sharp").removeClass("key-black-active");
            },off);
        }
        else if (random[j] === 12) {
            $("#h").addClass("key-h-active");
            play_h.currentTime = 0;
            play_h.play();
            gameSeq.push(12);
            setTimeout(function() {
                $("#h").removeClass("key-h-active");
            },off);
        }
        else if (random[j] === 13) {
            $("#c1").addClass("key-c1-active");
            play_c.currentTime = 0;
            play_c1.play();
            gameSeq.push(13);
            setTimeout(function() {
                $("#c1").removeClass("key-c1-active");
            },off);
        }
        else if (random[j] === 14) {
            $("#c1-sharp").addClass("key-black-active");
            play_c1_sharp.currentTime = 0;
            play_c1_sharp.play();
            gameSeq.push(14);
            setTimeout(function() {
                $("#c1-sharp").removeClass("key-black-active");
            },off);
        }
        else{
            $("#d1").addClass("key-d1-active");
            play_d1.currentTime = 0;
            play_d1.play();
            gameSeq.push(15);
            setTimeout(function() {
                $("#d1").removeClass("key-d1-active");
            },off);
        }
        j++;
        if (j>=count) {
         clearInterval(gameInterval);
        }
    }, on);
}

function checking() {
    if (gameSeq.length === userSeq.length) {
        if (gameSeq.join() === userSeq.join()){
            if(count === num_of_levels) {
                setTimeout (function () {
                    $(".label").text("YOU WON");
                    $("#count").text("!!!");
                    winner.play();
                }, 1000);
                setTimeout (function () {
                    location.reload();
               }, 5000);
            }else {
                setTimeout (function () {
                    $("#count").text (count + 1);
                    $(".label").text("Level");
                    count++;
                    gameSeq = [];
                    userSeq = [];
                    j = 0;
                    game();
                }, 500);
            }
        }else {
            setTimeout (function () {
                $(".label").text("");
                $("#count").text("!!!");
                error.play();
                gameSeq = [];
                userSeq = [];
                j = 0;
                game();
            }, 1000);
        }
    }
}

$(document).ready(function(){
    $(".restart-btn").hide();
    $(".level").hide();
});

$(document).ready(function(){
    $(".restart-btn").click(function(){
        location.reload();
    });
});

//start botton
$(document).ready(function(){
    $(".start-btn").click(function(){
        $(".start-btn").hide();
        $(".restart-btn").show();
        $(".level").show();
        $("#count").text(count);
        for (i=0; i<20; i++) {
            random[i] = Math.ceil(Math.random()*15);
        }
        game();
//user sequence
        $(".keyWhite, .keyBlack").click(function(){
            var key = $(this).attr("id");
            var id = keyId.indexOf(key);
            var color = $(this).attr("class").split(" ")[1];
            userSeq.push(id +1);
            addColorSound(id, color);
            checking();
        });
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
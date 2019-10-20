

function playKeyboard(){
        playAudio1();
        playAudio2();
        playAudio3();
        playAudio4();
        playAudio5();
        playAudio6();
        playAudio7();
        playAudio8();
        playAudio9();
        playAudio10();
        playAudio11();
        playAudio12();
        playAudio13();
        playAudio14();
        playAudio15();  
}

//play notes functions  
function playAudio1(){ 
    var play_c = document.getElementById('audio_1');      
    $('#c').click(function(){
        $('#c').addClass('lit1');
        setTimeout (function(){
            (play_c).play();
            $('#c').removeClass('lit1');           
        },100);
    });       
}

function playAudio2(){
    var play_c_sharp = document.getElementById('audio_2');
    $('#c-sharp').click(function(){
        $('#c-sharp').addClass('lit');
        setTimeout (function(){
            (play_c_sharp).play();
            $('#c-sharp').removeClass('lit');           
        },100);
    });          
}

function playAudio3(){
    var play_d = document.getElementById('audio_3');
    $('#d').click(function(){
        $('#d').addClass('lit2');
        setTimeout (function(){
            (play_d).play();
            $('#d').removeClass('lit2');           
        },100);
    });
}

function playAudio4(){
    var play_d_sharp = document.getElementById('audio_4');
    $('#d-sharp').click(function(){
        $('#d-sharp').addClass('lit');
        setTimeout (function(){
            (play_d_sharp).play();
            $('#d-sharp').removeClass('lit');           
        },100);
    });
}

function playAudio5(){ 
    var play_e = document.getElementById('audio_5');   
    $('#e').click(function(){
        $('#e').addClass('lit3');
        setTimeout (function(){
            (play_e).play();
            $('#e').removeClass('lit3');           
        },100);
    });
}

function playAudio6(){
    var play_f = document.getElementById('audio_6');
    $('#f').click(function(){
        $('#f').addClass('lit4');
        setTimeout (function(){
            (play_f).play();
            $('#f').removeClass('lit4');           
        },100);
    });
}

function playAudio7(){
    var play_f_sharp = document.getElementById('audio_7');
    $('#f-sharp').click(function(){
        $('#f-sharp').addClass('lit');
        setTimeout (function(){
            (play_f_sharp).play();
            $('#f-sharp').removeClass('lit');           
        },100);
    }); 
}

function playAudio8(){
    var play_g = document.getElementById('audio_8');
    $('#g').click(function(){
        $('#g').addClass('lit5');
        setTimeout (function(){
            (play_g).play();
            $('#g').removeClass('lit5');           
        },100);
    });
}

function playAudio9(){
    var play_g_sharp = document.getElementById('audio_9');
    $('#g-sharp').click(function(){
        $('#g-sharp').addClass('lit');
        setTimeout (function(){
            (play_g_sharp).play();
            $('#g-sharp').removeClass('lit');           
        },100);
    });
}

function playAudio10(){
    var play_a = document.getElementById('audio_10');
    $('#a').click(function(){
        $('#a').addClass('lit6');
        setTimeout (function(){
            (play_a).play();
            $('#a').removeClass('lit6');           
        },100);
    });  
}

function playAudio11(){
    var play_a_sharp = document.getElementById('audio_11');
    $('#a-sharp').click(function(){
        $('#a-sharp').addClass('lit');
        setTimeout (function(){
            (play_a_sharp).play();
            $('#a-sharp').removeClass('lit');           
        },100);
    });     
}

function playAudio12(){
    var play_h = document.getElementById('audio_12');
    $('#h').click(function(){
        $('#h').addClass('lit7');
        setTimeout (function(){
            (play_h).play();
            $('#h').removeClass('lit7');           
        },100);
    });      
}

function playAudio13(){
    var play_c1 = document.getElementById('audio_13');
    $('#c1').click(function(){
        $('#c1').addClass('lit8');
        setTimeout (function(){
            (play_c1).play();
            $('#c1').removeClass('lit8');           
        },100);
    });          
}

function playAudio14(){
    var play_c1_sharp = document.getElementById('audio_14');
    $('#c1-sharp').click(function(){
        $('#c1-sharp').addClass('lit');
        setTimeout (function(){
            (play_c1_sharp).play();
            $('#c1-sharp').removeClass('lit');           
        },100);
    });          
}

function playAudio15(){
    var play_d1 = document.getElementById('audio_15');
    $('#d1').click(function(){
        $('#d1').addClass('lit9');
        setTimeout (function(){
            (play_d1).play();
            $('#d1').removeClass('lit9');           
        },100);
    });          
}

//how to play buttons
$(document).ready(function(){   
    $('.how_piano').click(function(){
        $(this).toggleClass('how-active');
    });

    $('.how_game').click(function(){
        $(this).toggleClass('how-active');
    });
})
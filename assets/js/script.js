function playKeyboard(){
    // if(powerOn==true){
    //     return;
    // }
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
    // }else{
    //     pauseAudio1();
    //     pauseAudio2();
    //     pauseAudio3();
    //     pauseAudio4();
    //     pauseAudio5();
    //     pauseAudio6();
    // }     
};

var play_c = document.getElementById('audio_1');
var play_c_sharp = document.getElementById('audio_2');
var play_d = document.getElementById('audio_3');
var play_d_sharp = document.getElementById('audio_4');
var play_e = document.getElementById('audio_5');   
var play_f = document.getElementById('audio_6');

//play notes functions  
function playAudio1(){       
    $('#c').click(function(){
        (play_c).play();        
    });       
}

function playAudio2(){
    $('#c-sharp').click(function(){
        (play_c_sharp).play();
    });           
}

function playAudio3(){
    $('#d').click(function(){
        (play_d).play();
    });
}

function playAudio4(){
    $('#d-sharp').click(function(){
        (play_d_sharp).play();
    });
}

function playAudio5(){    
    $('#e').click(function(){
        (play_e).play();
    });
}

function playAudio6(){
    $('#f').click(function(){
        (play_f).play();
    });
}

function playAudio7(){
    var play_f_sharp = document.getElementById('audio_7');
    $('#f-sharp').click(function(){
        (play_f_sharp).play();
    }); 
}

function playAudio8(){
    var play_g = document.getElementById('audio_8');
    $('#g').click(function(){
        (play_g).play();
    });
}

function playAudio9(){
    var play_g_sharp = document.getElementById('audio_9');
    $('#g-sharp').click(function(){
        (play_g_sharp).play();
    });
}

function playAudio10(){
    var play_a = document.getElementById('audio_10');
    $('#a').click(function(){
        (play_a).play();
    });  
}

function playAudio11(){
    var play_a_sharp = document.getElementById('audio_11');
    $('#a-sharp').click(function(){
        (play_a_sharp).play();
    });     
}

function playAudio12(){
    var play_h = document.getElementById('audio_12');
    $('#h').click(function(){
        (play_h).play();
    });      
}

function playAudio13(){
    var play_c1 = document.getElementById('audio_13');
    $('#c1').click(function(){
        (play_c1).play();
    });          
}

function playAudio14(){
    var play_c1_sharp = document.getElementById('audio_14');
    $('#c1-sharp').click(function(){
        (play_c1_sharp).play();
    });          
}

function playAudio15(){
    var play_d1 = document.getElementById('audio_15');
    $('#d1').click(function(){
        (play_d1).play();
    });          
}

//pause notes functions
function pauseAudio1(){       
    $('#c').click(function(){
        (play_c).pause();
    });       
}

function pauseAudio2(){       
    $('#c-sharp').click(function(){
        (play_c_sharp).pause();
    });       
}

function pauseAudio3(){       
    $('#d').click(function(){
        (play_d).pause();
    });       
}

function pauseAudio4(){       
    $('#d-sharp').click(function(){
        (play_d_sharp).pause();
    });       
}

function pauseAudio5(){       
    $('#e').click(function(){
        (play_e).pause();
    });       
}

function pauseAudio6(){       
    $('#f').click(function(){
        (play_f).pause();
    });       
}
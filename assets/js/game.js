var random = [];
var litID = []; 
var clicked = [];
var j = 0;
var count = 1;
var i, on, off, strict, x;

function change1() {
    if (count <=10) {
        off = 400;
        on = 600;
    }else {
        off = 250;
        on = 500;
    }


//game's random pattern
    x = setInterval(function(){
        if (random[j] == 1) {
            $('#c').addClass('lit1');
            $('#audio_1')[0].play();
            litID.push(1);
    
            setTimeout(function() {
                $('#c').removeClass('lit1');
            },off);
        }
        else if (random[j] == 2) {
            // lit = 'key-black:active'
            $('#c-sharp').addClass('lit');
            $('#audio_2')[0].play();
            litID.push(2);
    
            setTimeout(function() {
                $('#c-sharp').removeClass('lit');
            },off);
        }

        else if (random[j] == 3) {
            // lit = 'key-white1:active'
            $('#d').addClass('lit2');
            $('#audio_3')[0].play();
            litID.push(3);
    
            setTimeout(function() {
                $('#d').removeClass('lit2');
            },off);
        }

        else if (random[j] == 4) {
            lit = 'key-black1:active'
            $('#d-sharp').addClass('lit');
            $('#audio_4')[0].play();
            litID.push(4);
    
            setTimeout(function() {
                $('#d-sharp').removeClass('lit');
            },off);
        }

        else if (random[j] == 5) {
            // lit = 'key-white2:active'
            $('#e').addClass('lit3');
            $('#audio_5')[0].play();
            litID.push(5);
    
            setTimeout(function() {
                $('#e').removeClass('lit3');
            },off);
        }

        else if (random[j] == 6) {
            // lit = 'key-white3:active'
            $('#f').addClass('lit4');
            $('#audio_6')[0].play();
            litID.push(6);
    
            setTimeout(function() {
                $('#f').removeClass('lit4');
            },off);
        }

        else if (random[j] == 7) {
            // lit = 'key-black2:active'
            $('#f-sharp').addClass('lit');
            $('#audio_7')[0].play();
            litID.push(7);
    
            setTimeout(function() {
                $('#f-sharp').removeClass('lit');
            },off);
        }

        else if (random[j] == 8) {
            // lit = 'key-white4:active'
            $('#g').addClass('lit5');
            $('#audio_8')[0].play();
            litID.push(8);
    
            setTimeout(function() {
                $('#g').removeClass('lit5');
            },off);
        }

        else if (random[j] == 9) {
            // lit = 'key-black3:active'
            $('#g-sharp').addClass('lit');
            $('#audio_9')[0].play();
            litID.push(9);
    
            setTimeout(function() {
                $('#g-sharp').removeClass('lit');
            },off);
        }

        else if (random[j] == 10) {
            // lit = 'key-white5:active'
            $('#a').addClass('lit6');
            $('#audio_10')[0].play();
            litID.push(10);
    
            setTimeout(function() {
                $('#a').removeClass('lit6');
            },off);
        }

        else if (random[j] == 11) {
            // lit = 'key-black4:active'
            $('#a-sharp').addClass('lit');
            $('#audio_11')[0].play();
            litID.push(11);
    
            setTimeout(function() {
                $('#a-sharp').removeClass('lit');
            },off);
        }

        else if (random[j] == 12) {
            // lit = 'key-white6:active'
            $('#h').addClass('lit7');
            $('#audio_12')[0].play();
            litID.push(12);
    
            setTimeout(function() {
                $('#h').removeClass('lit7');
            },off);
        }

        else if (random[j] == 13) {
            // lit = 'key-white7:active'
            $('#c1').addClass('lit8');
            $('#audio_13')[0].play();
            litID.push(13);
    
            setTimeout(function() {
                $('#c1').removeClass('lit8');
            },off);
        }

        else if (random[j] == 14) {
            // lit = 'key-black5:active'
            $('#c1-sharp').addClass('lit');
            $('#audio_14')[0].play();
            litID.push(14);
    
            setTimeout(function() {
                $('#c1-sharp').removeClass('lit');
            },off);       
        }

        else{
            // lit = 'key-white8:active'
            $('#d1').addClass('lit9');
            $('#audio_15')[0].play();
            litID.push(15);
    
            setTimeout(function() {
                $('#d1').removeClass('lit9');
            },off);
        }
    
        j++;     
        if (j>=count) {
            clearInterval(x);  
        }
    }, on);
}

function checking() {
    if (litID.length == clicked.length) {
        if (litID.join() == clicked.join()){
            if(count == 20) {
                setTimeout (function () {
                    alert ('You won!');
                    location.reload();
                }, 1000);
            }else {
                setTimeout (function () {
                    $('#count').text (count + 1);
                    count++;
                    litID = [];
                    clicked = [];
                    j = 0;
                    change1();
                }, 1000);
            }
        }else {
            if (strict == 1) {
                location.reload();
            } else {
                setTimeout (function () {
                    $('#count').text('!!!');
                    $('#audio_16')[0].play();

                    litID = [];
                    clicked = [];
                    j = 0;
                    change1();
                }, 1000);
            }
        }  
    }
}

//switch On/Off
$(document).ready(function(){  
    $('.switch-wrapper1').click(function() {
        
        if($('.switch1').css('left') == '-5px'){
            $('.switch1').animate({
                left: '30px'
            }, 500);
            $('.switch-wrapper1').addClass('green');
           
           // play keyboard
            playKeyboard();
            
        }else{
            // $('.switch1').animate({
            //  left: '-5px'
            // }, 500);           
            // $('.switch-wrapper1').removeClass('green');

        //     $('.switch2').animate({
        //         left: '-5px',
        //     }, 500);

        //     $('.switch-wrapper2').removeClass('blue');
        //     $('.start-btn').removeClass('faded-green green');
        //    // $('.start-btn').removeClass('green');
        //     $('.level').removeClass('gold');
        //     $('#count').text(' '); 
            location.reload();
        }   
    });
}); 

//switch piano/game mode
$(document).ready(function(){
    $('.switch-wrapper2').click(function() {
        if($('.switch1').css('left') == '30px' && $('.switch2').css('left') == '-5px'){
            $('.switch2').animate({
            left: '30px',
            }, 500);
            $('.switch-wrapper2').addClass('blue');
            
            $('.start-btn').addClass('faded-green');
            $('.level').addClass('gold');
            $('#count').text('--');
            
        }else{
            // $('.switch2').animate({
            // left: '-5px',
            // }, 500);
            // $('.switch-wrapper2').removeClass('blue');

        //     //disactivate start and level buttons
        //     $('.start-btn').removeClass('faded-green green');
        //     $('.level').removeClass('gold');

        //    //disactivate strict switch     
        //     $('.switch3').animate({
        //         left: '-5px',
        //     }, 500);
        //     $('.switch-wrapper3').removeClass('red');

        //     $('.switch3').css('left') == '-5px';          
        //     $('#count').text(' '); 

            location.reload();
    
        }
    });
});


  
//start botton
$(document).ready(function(){   
    $('.start-btn').click(function(){
        if($('.switch1').css('left') == '30px' && $('.switch2').css('left') == '30px'){
            $('.start-btn').removeClass('faded-green').addClass('green');      
            
            for (i=0; i<20; i++) {
                random[i] = Math.ceil(Math.random()*15);
            }

            $('#count').text(count);

            change1();
              
            //user plays
            $('#c').click(function(){
                $('#c').addClass('lit1');
                $('#audio_1')[0].play();

                clicked.push(1);

                setTimeout(function(){
                    $('#c').removeClass('lit1');
                }, 250);
                checking();
            });

            $('#c-sharp').click(function(){
                $('#c-sharp').addClass('lit');
                $('#audio_2')[0].play();

                clicked.push(2);

                setTimeout(function(){
                    $('#c-sharp').removeClass('lit');
                }, 250);
                checking();          
            });

            $('#d').click(function(){
                $('#d').addClass('lit2');
                $('#audio_3')[0].play();

                clicked.push(3);

                setTimeout(function(){
                    $('#d').removeClass('lit2');
                }, 250);
                checking();
            });

            $('#d-sharp').click(function(){
                $('#d-sharp').addClass('lit');
                $('#audio_4')[0].play();

                clicked.push(4);

                setTimeout(function(){
                    $('#d-sharp').removeClass('lit');
                }, 250);
                checking();          
            });
            
            $('#e').click(function(){
                $('#e').addClass('lit3');
                $('#audio_5')[0].play();

                clicked.push(5);

                setTimeout(function(){
                    $('#e').removeClass('lit3');
                }, 250);
                checking();
            });

            $('#f').click(function(){
                $('#f').addClass('lit4');
                $('#audio_6')[0].play();

                clicked.push(6);

                setTimeout(function(){
                    $('#f').removeClass('lit4');
                }, 250);
                checking();
            });

            $('#f-sharp').click(function(){
                $('#f-sharp').addClass('lit');
                $('#audio_7')[0].play();

                clicked.push(7);

                setTimeout(function(){
                    $('#f-sharp').removeClass('lit');
                }, 250);
                checking();          
            });

            $('#g').click(function(){
                $('#g').addClass('lit5');
                $('#audio_8')[0].play();

                clicked.push(8);

                setTimeout(function(){
                    $('#g').removeClass('lit5');
                }, 250);
                checking();
            });

            $('#g-sharp').click(function(){
                $('#g-sharp').addClass('lit');
                $('#audio_9')[0].play();

                clicked.push(9);

                setTimeout(function(){
                    $('#g-sharp').removeClass('lit');
                }, 250);
                checking();          
            });

            $('#a').click(function(){
                $('#a').addClass('lit6');
                $('#audio_10')[0].play();

                clicked.push(10);

                setTimeout(function(){
                    $('#a').removeClass('lit6');
                }, 250);
                checking();
            });

            $('#a-sharp').click(function(){
                $('#a-sharp').addClass('lit');
                $('#audio_11')[0].play();

                clicked.push(11);

                setTimeout(function(){
                    $('#a-sharp').removeClass('lit');
                }, 250);
                checking();          
            });

            $('#h').click(function(){
                $('#h').addClass('lit7');
                $('#audio_12')[0].play();

                clicked.push(12);

                setTimeout(function(){
                    $('#h').removeClass('lit7');
                }, 250);
                checking();
            });

            $('#c1').click(function(){
                $('#c1').addClass('lit8');
                $('#audio_13')[0].play();

                clicked.push(13);

                setTimeout(function(){
                    $('#c1').removeClass('lit8');
                }, 250);
                checking();
            });

            $('#c1-sharp').click(function(){
                $('#c1-sharp').addClass('lit');
                $('#audio_14')[0].play();

                clicked.push(14);

                setTimeout(function(){
                    $('#c1-sharp').removeClass('lit');
                }, 250);
                checking();          
            });

            $('#d1').click(function(){
                $('#d1').addClass('lit9');
                $('#audio_15')[0].play();

                clicked.push(15);

                setTimeout(function(){
                    $('#d1').removeClass('lit9');
                }, 250);
                checking();
            });
            


           //activate strict switch     
            $('.switch-wrapper3').click(function() {
                if($('.switch3').css('left') == '-5px'){
                    $('.switch3').animate({
                    left: '30px',
                    }, 500);
                    $('.switch-wrapper3').addClass('red');
                    strict = 1;
                    $('#count').text(count);
                    change1(); 
                    

                }else{         
                    $('.switch3').animate({
                        left: '-5px',
                    }, 500);
                    $('.switch-wrapper3').removeClass('red');   
                }                 
            });                          
        }else{
           
        } 
    });      
});





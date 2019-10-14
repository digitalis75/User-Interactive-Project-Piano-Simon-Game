// var powerOn=false;


//switch On/Off
$(document).ready(function(){  
    $('.switch-wrapper1').click(function() {
        // powerOn =true;
        
        if($('.switch1').css('left') == '-5px'){
            $('.switch1').animate({
                left: '30px'
            }, 500);
            $('.switch-wrapper1').addClass('green');        
        }else{
            $('.switch1').animate({
             left: '-5px'
            }, 500);           
            $('.switch-wrapper1').removeClass('green');

            $('.switch2').animate({
                left: '-5px',
            }, 500);

            $('.switch-wrapper2').removeClass('blue');
            $('.start-btn').removeClass('faded-green');
            $('.level').removeClass('gold');           
        }   
    });
}); 

//play keyboard
playKeyboard();// !!!!!

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
            
        }else{
            $('.switch2').animate({
            left: '-5px',
            }, 500);
            $('.switch-wrapper2').removeClass('blue');
            //disactivate start level buttons
            $('.start-btn').removeClass('faded-green');
            $('.level').removeClass('gold');

            $('.start-btn').removeClass('green');   
            $('#count').text(''); 
       //disactivate strict switch     
            $('.switch3').animate({
                left: '-5px',
            }, 500);
            $('.switch-wrapper3').removeClass('red');

            $('.switch3').css('left') == '-5px';       // !!!! 
        }
    });
});

//main game function
$(document).ready(function(){   
    $('.start-btn').click(function(){
        if($('.switch1').css('left') == '30px' && $('.switch2').css('left') == '30px'){
            $('.start-btn').removeClass('faded-green');
            $('.start-btn').addClass('green');    
            $('#count').text('01');  // start count
            $('.switch3').css('left') == '-5px';
        
            //activate strict switch     
            $('.switch-wrapper3').click(function() {
                if($('.switch3').css('left') == '-5px'){
                    $('.switch3').animate({
                    left: '30px',
                    }, 500);
                    $('.switch-wrapper3').addClass('red'); 
                }else{         
                    $('.switch3').animate({
                        left: '-5px',
                    }, 500);
                    $('.switch-wrapper3').removeClass('red');   
                }                 
            });                          
        } 
    });      
});




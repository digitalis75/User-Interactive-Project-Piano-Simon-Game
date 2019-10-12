//switch On/Off
$(document).ready(function(){
    $('.switch-wrapper1').click(function() {
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
        $('.switch3').css('left') == '-5px';   
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
        }else{
            $('.switch2').animate({
            left: '-5px',
            }, 500);
            $('.switch-wrapper2').removeClass('blue');

            $('.start-btn').removeClass('faded-green');
            $('.level').removeClass('gold');                 
        }
    });
});


//strict switch
 $(document).ready(function(){
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
 });


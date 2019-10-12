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
      }   
   });
});

$(document).ready(function(){
   $('.switch-wrapper2').click(function() {
       if($('.switch2').css('left') == '-5px'){
            $('.switch2').animate({
            left: '30px',
            }, 500);
            $('.switch-wrapper2').addClass('blue');
       }else{
             $('.switch2').animate({
            left: '-5px',
            }, 500);
            $('.switch-wrapper2').removeClass('blue');             
       }   
    });
});

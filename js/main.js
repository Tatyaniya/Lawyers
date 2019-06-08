$(function () {
    
    // menu

   /*$('.menu__link--common').mousemove(function(){
        $( ".menu__link--common:after" ).animate({
            display: "inline-block",
            opacity: 1
          }, 500, function() {
          });
    });*/
    
    // modal company

    $('#add-company').click(function(){
        $( ".company-modal" ).css('display', 'block');
    });

    $('.company-modal__save').click(function(){
        $( ".company-modal" ).css('display', 'none');
    });

    // modal doing

    $('#add-doing').click(function(){
        $( ".doing-modal" ).css('display', 'block');
    });

    $('.doing-modal__save').click(function(){
        $( ".doing-modal" ).css('display', 'none');
    });

    // choice

    $('.choice').click(function(){
        console.log('.choice');
        $('.choice__toogle').toggleClass('choice__toogle--name');
    });


    
  

});
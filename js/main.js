$(function () {
    
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
        $('.choice__toogle').toggleClass('choice__toogle--name');
    });

    $('#hum-company').click(function(){
        $('#aside-company').toggleClass('d-flex');
    });

    $('.humburger-all').click(function(){
        $('.aside').toggleClass('d-flex');
    });
    
});
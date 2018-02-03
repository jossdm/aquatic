$(document).ready(function(){
    var altura=$('nav').offset().top;
    $(window).on('scroll',function(){
        
        if ($(window).scrollTop()>50){
        $('nav').addClass('shrink');
    }else{
        $('nav').removeClass('shrink');
        $('nav').addClass('top');
    }
  });
    
    /*menuuu--------*/
    $('#hombe').on('click', function(){
        var position= 0;
        $('body', html).animate({
            scrollTop: position + 'px'
        }, 2000);
        
        
        $('#home').addClass('bottom');
        $('#sistem').addClass('bottom');
        $('#about').addClass('bottom');
        $('#contac').addClass('bottom');
    })
    
     $('#sistem').on('click', function(){
        var position= 450;
        $('body', html).animate({
            scrollTop: position + 'px'
        }, 2000);
        
        $('#sistem').addClass('bottom');
         
          $('#home').addClass('bottom');
        $('#about').addClass('bottom');
        $('#contac').addClass('bottom');
    })
    
    
     $('#about').on('click', function(){
        var position= 750;
        $('body', html).animate({
            scrollTop: position + 'px'
        }, 2000);
        
        $('#about').addClass('bottom');
          $('#sistem').addClass('bottom');
        $('#home').addClass('bottom');
        $('#contac').addClass('bottom');
    })
    
     $('#contac').on('click', function(){
        var position= $('#form').offset().top;
        $('body', html).animate({
            scrollTop: position + 'px'
        }, 2000);
        
        $('#contac').addClass('bottom');
          $('#sistem').addClass('bottom');
        $('#about').addClass('bottom');
        $('#home').addClass('bottom');
    })
    
    
    
    
});
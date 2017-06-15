    $(document).ready(function(){
       
        $('.menu_trigger').click(function(){
            $('nav ul').slideToggle(500); 
        });
        
        $('.menu_trigger_katalog').click(function(){
            $('.leftMenu').slideToggle(500); 
        });
       
        $(window).resize(function(){
            if ($(window).width()>800){
                $('nav ul').removeAttr('style') ;          
                $('.leftMenu').removeAttr('style') ; 
            }
        })
    });
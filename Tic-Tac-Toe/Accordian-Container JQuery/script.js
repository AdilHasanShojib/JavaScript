$(document).ready(function(){

    $('.heading').click(function(){

        if($(this).hasClass('active')){
            return;
        }


        //Close WIndow Block

        let activehead=$('.active').attr('heading');
        $('.active').removeClass('active')
        $('[para="'+activehead+'"]').slideUp(); 

        // Open new Window Block
        let headingAttr= $(this).attr('heading');
        $(this).addClass('active');
        $('[para="'+headingAttr+'"]').slideDown(); 



    });



});
$(function () {
    $('#mytab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
})



// animation
$(document).ready(() => {
    $(window).scroll(() => {
        let furniture = $(document).scrollTop();
      
        if ((furniture > 0) && (furniture < 20)) {
            $('#conatact-anim').addClass('animate__animated animate__zoomIn');
        }
        //banner 
        else if ((furniture > 0) && (furniture < 150)) {
            $('#pro-animate4').addClass('animate__animated animate__fadeIn');
        }
        // form
        else if ((furniture > 300) && (furniture < 350)) {
            $('#name-anim').addClass('animate__animated animate__fadeIn')
            $('#name-anim1').addClass('animate__animated animate__fadeIn')
            $('#name-anim2').addClass('animate__animated animate__fadeIn')
            $('#name-anim3').addClass('animate__animated animate__fadeIn')
            $('#name-anim4').addClass('animate__animated animate__fadeIn')
        }
        //discover
        else if ((furniture > 940) && (furniture < 1200)) {
            $('#disco').addClass('animate__animated animate__zoomIn');
            $('#disco1').addClass('animate__animated animate__fadeInLeft');
            $('#disco2').addClass('animate__animated animate__zoomIn');
            $('#disco3').addClass('animate__animated animate__zoomIn');
            $('#disco4').addClass('animate__animated animate__zoomIn');
            $('#disco5').addClass('animate__animated animate__fadeInRight');
        }
        //footer animation
        else if ((furniture > 1200) && (furniture < 1500)) {
            $('#footer-anim1').addClass('animate__animated animate__fadeIn')
            $('#footer-anim2').addClass('animate__animated animate__fadeIn')
            $('#footer-anim3').addClass('animate__animated animate__fadeIn')
            $('#footer-anim4').addClass('animate__animated animate__fadeIn')
        }


    })
})

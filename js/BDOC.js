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


        // our services animation
        if ((furniture > 420) && (furniture < 600)) {
            //left
            $('#name-anim').addClass('animate__animated animate__fadeIn')
            $('#name-anim1').addClass('animate__animated animate__fadeIn')
            $('#name-anim2').addClass('animate__animated animate__fadeIn')
            $('#name-anim3').addClass('animate__animated animate__fadeIn')
            $('#name-anim4').addClass('animate__animated animate__fadeIn')
            $('#name-anim5').addClass('animate__animated animate__fadeIn')
            $('#name-anim6').addClass('animate__animated animate__fadeIn')
            $('#name-anim7').addClass('animate__animated animate__fadeIn')
            $('#name-anim8').addClass('animate__animated animate__fadeIn')
            $('#name-anim9').addClass('animate__animated animate__fadeIn')
            //right
            $('#pro-animate').addClass('animate__animated animate__zoomIn');
            $('#pro-animate1').addClass('animate__animated animate__zoomIn');
            $('#pro-animate2').addClass('animate__animated animate__zoomIn');
            $('#pro-animate3').addClass('animate__animated animate__fadeInRight');
        }
        //second row
        else if ((furniture > 800) && (furniture < 900)) {
            //left
            $('#name-anim01').addClass('animate__animated animate__fadeIn')
            $('#name-anim02').addClass('animate__animated animate__fadeIn')
            $('#name-anim03').addClass('animate__animated animate__fadeIn')
            $('#name-anim04').addClass('animate__animated animate__fadeIn')
           
            // right
            $('#pro-animate4').addClass('animate__animated animate__zoomIn');
            $('#pro-animate5').addClass('animate__animated animate__zoomIn');
            $('#pro-animate6').addClass('animate__animated animate__zoomIn');
            $('#pro-animate7').addClass('animate__animated animate__fadeInRight');

        }
        // theard row
        else if ((furniture > 1200) && (furniture < 1350)) {
            $('#pro-animate8').addClass('animate__animated animate__zoomIn');
            $('#pro-animate9').addClass('animate__animated animate__zoomIn');
            $('#pro-animate01').addClass('animate__animated animate__zoomIn');
            $('#pro-animate02').addClass('animate__animated animate__fadeInRight');
        }
        //fourth animation 
        else if ((furniture > 1500) && (furniture < 1600)) {
            $('#pro-animate03').addClass('animate__animated animate__zoomIn');
            $('#pro-animate04').addClass('animate__animated animate__zoomIn');
            $('#pro-animate05').addClass('animate__animated animate__zoomIn');
            $('#pro-animate06').addClass('animate__animated animate__fadeInRight');
        }
     
        // five row
        else if ((furniture > 1920) && (furniture < 2000)) {
            $('#pro-animate07').addClass('animate__animated animate__zoomIn');
            $('#pro-animate08').addClass('animate__animated animate__zoomIn');
            $('#pro-animate09').addClass('animate__animated animate__zoomIn');
            $('#pro-animate001').addClass('animate__animated animate__fadeInRight');
        }
        else if ((furniture > 2420) && (furniture < 2600)) {
            $('#disco').addClass('animate__animated animate__zoomIn');
            $('#disco1').addClass('animate__animated animate__fadeInLeft');
            $('#disco2').addClass('animate__animated animate__zoomIn');
            $('#disco3').addClass('animate__animated animate__zoomIn');
            $('#disco4').addClass('animate__animated animate__zoomIn');
            $('#disco5').addClass('animate__animated animate__fadeInRight');
        }
        else if ((furniture > 2700) && (furniture < 2900)) {
            $('#footer-anim1').addClass('animate__animated animate__fadeIn')
            $('#footer-anim2').addClass('animate__animated animate__fadeIn')
            $('#footer-anim3').addClass('animate__animated animate__fadeIn')
            $('#footer-anim4').addClass('animate__animated animate__fadeIn')
        }


    })
})

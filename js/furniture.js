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


        if ((furniture > 450) && (furniture < 700)) {
            $('#pro-animate').addClass('animate__animated animate__zoomIn')
            $('#pro-animate1').addClass('animate__animated animate__fadeInLeft');
            $('#pro-animate2').addClass('animate__animated animate__zoomIn')
            $('#pro-animate3').addClass('animate__animated animate__zoomIn')
            $('#pro-animate4').addClass('animate__animated animate__fadeInRight');

        }
        // our services animation
        else  if ((furniture > 940) && (furniture < 1000)) {
            //left
            $('#name-anim').addClass('animate__animated animate__fadeIn')
            $('#name-anim1').addClass('animate__animated animate__fadeIn')
            $('#name-anim2').addClass('animate__animated animate__fadeIn')
            $('#name-anim3').addClass('animate__animated animate__fadeIn')
            //right
            $('#pro-animate5').addClass('animate__animated animate__zoomIn');
            $('#pro-animate6').addClass('animate__animated animate__zoomIn');
            $('#pro-animate7').addClass('animate__animated animate__zoomIn');
            $('#pro-animate8').addClass('animate__animated animate__zoomIn');
            $('#pro-animate9').addClass('animate__animated animate__fadeInRight');
        }
        //second row
        else if( (furniture > 1350) && (furniture < 1400)) {
            $('#pro-animate01').addClass('animate__animated animate__zoomIn');
            $('#pro-animate02').addClass('animate__animated animate__zoomIn');
            $('#pro-animate03').addClass('animate__animated animate__zoomIn');
            $('#pro-animate04').addClass('animate__animated animate__fadeInRight');
   
        } 
        // theard row
        else if((furniture > 1710) && (furniture < 1800)) {
            $('#pro-animate05').addClass('animate__animated animate__zoomIn');
            $('#pro-animate06').addClass('animate__animated animate__zoomIn');
            $('#pro-animate07').addClass('animate__animated animate__zoomIn');
            $('#pro-animate08').addClass('animate__animated animate__fadeInRight');
        }
        //fourth animation 
        else if( (furniture > 2150) && (furniture < 2300)) {
            $('#pro-animate09').addClass('animate__animated animate__zoomIn');
            $('#pro-animate001').addClass('animate__animated animate__zoomIn');
            $('#pro-animate002').addClass('animate__animated animate__zoomIn');
            $('#pro-animate003').addClass('animate__animated animate__fadeInRight');
        }
        //video 
        else if( (furniture > 2560) && (furniture < 2700)) {
            $('#video-animate').addClass('animate__animated animate__zoomIn');
        }
        //popular
        else if( (furniture > 3120) && (furniture < 3300)) {
            $('#cate-animate').addClass('animate__animated animate__zoomIn');
            $('#cate-animate1').addClass('animate__animated animate__fadeInLeft');
            $('#cate-animate2').addClass('animate__animated animate__fadeInRight');
        }
        else if( (furniture > 3450) && (furniture < 3500)) {
            $('#cate-animate3').addClass('animate__animated animate__fadeInLeft');
            $('#cate-animate4').addClass('animate__animated animate__fadeInRight');
        }
        //subscribe
        else if( (furniture > 3660) && (furniture < 3700)) {
            $('#subs-anim').addClass('animate__animated animate__zoomIn');
        }
        else  if ((furniture > 3800) && (furniture < 3900)) {
            $('#footer-anim1').addClass('animate__animated animate__fadeIn')
            $('#footer-anim2').addClass('animate__animated animate__fadeIn')
            $('#footer-anim3').addClass('animate__animated animate__fadeIn')
            $('#footer-anim4').addClass('animate__animated animate__fadeIn')
        }    


    })
})

$(document).ready(function () {
    // Nav Sticky Js
    $('.nav-area').sticky({
        topSpacing: 0,
        zIndex: 10
    });
    // Video Parallaxie
    $('.video-area').parallaxie({
        speed: .5
    });
    // Clients Parallaxie
    $('.counter-area').parallaxie({
        speed: .5
    });
    // Magnific
    $('.vdo-btn').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',

            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });
    // Mixitup
    var mixer = mixitup('.all-portfolio');
    // Owl Carousel
    $('.full-testimonial').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    margin:30,
    mouseDrag:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
})
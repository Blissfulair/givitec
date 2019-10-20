// var owl = $('#reccomended');
// owl.owlCarousel({
//     center: true,
//     items: 3,
//     loop: true,
//     autoplay:true,
//     autoPlaySpeed:5000,
//     autoPlayTimeout:5000,
//     autoplayHoverPause:true,
//     margin: 0,
//     responsive: {
//         0: {
//             items: 1
//         },
//         767: {
//             items: 2
//         },
//         1000: {
//             items: 3
//         },
//         1400: {
//             items: 4
//         }
//     }
// });
// var block = false;
// owl.mouseenter(function(){
//     if(!block){
//         block = true;
//         owl.trigger('stop.owl.autoplay');
//         block = false;
//     }
// });
// owl.mouseleave(function(){
//     if(!block){
//         block = true;
//         owl.trigger('play.owl.autoplay');
//         block = false;
//     }
// });

// var owl = $('#recomended');
// owl.owlCarousel({
//     center: true,
//     items: 5,
//     loop: true,
//     autoplay:true,
//     autoPlaySpeed:5000,
//     autoPlayTimeout:5000,
//     autoplayHoverPause:true,
//     margin: 0,
//     responsive: {
//         0: {
//             items: 1
//         },
//         767: {
//             items: 2
//         },
//         1000: {
//             items: 4
//         },
//         1400: {
//             items: 5
//         }
//     }
// });
// var block = false;
// owl.mouseenter(function(){
//     if(!block){
//         block = true;
//         owl.trigger('stop.owl.autoplay');
//         block = false;
//     }
// });
// owl.mouseleave(function(){
//     if(!block){
//         block = true;
//         owl.trigger('play.owl.autoplay');
//         block = false;
//     }
// });
// $( function() {
//     $( "#tabs" ).tabs();
//   } );
$(document).ready(function(){
    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    function elementInViewPort(el){
        var rect = el.getBoundingClientRect();
        var ch = window.innerHeight >=  Math.ceil(rect.bottom*50/100) && rect.top <= 2 
	    return ch 
    }
    function navColor(){
        var elements = document.getElementsByClassName('nav-link');
        for(var i = 0; i < elements.length; i++){
            var nav = elements[i].dataset['href'].split('#')[1];
            var element = document.getElementById(nav);
            if(element != null && elementInViewPort(element)){
                $('.nav-link').removeClass('active')
                $('[data-href="#'+nav+'"]').addClass('active')
            }
            
        }
    }
    $('.nav-link').on('click', function(e){
        $('.nav-link').removeClass('active');
        e.preventDefault()
        navColor()
    })
    window.onscroll = function(ev){

        navColor();
    }
    window.onload = function(ev){
        navColor();
    }


    // $(window).on('scroll', function(){
    //     $('.fixed-top').css('position', 'fixed')
    // })
    $('.open').on('click', function(){
        $('.mobile-menu').css('transform', 'translateY(0)');
    })
    $('.close').on('click', function(){
        $('.mobile-menu').css('transform', 'translateY(-100%)');
    })
    $('.mobile-link').on('click', function(){
        $('.mobile-menu').css('transform', 'translateY(-100%)');
    })
    $('.play').on('click', function(){
       var video = $('video');
       if(video.paused){
           video.play();
       }
       
    })
    //client timer 
    var view = false;
    function clientTimer(start, end, id){
        var element = document.getElementById('clients');
        if(element != null){
            if(isInViewport(element) && view == false){
                setInterval(function(){
                    if(start < end){
                        start++;
                        if(start >= 100)
                        document.getElementById(id).innerHTML = start+"+";
                        else
                        document.getElementById(id).innerHTML = start
                    }
                },30)
            }
        }
    }
// window.onscroll = function(){
//     if(!view){
//         clientTimer(0,100,id='happy')
//         clientTimer(0,60, 'complete')
//         clientTimer(0,100, 'running')
//     }
// }
    
})
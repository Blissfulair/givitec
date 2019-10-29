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
//moving hand
    //client timer 
    var viewing = false;
    var check = 0;
    function clientTimer(start, end, id){
        var element = document.getElementById('clients');
        if(element != null){
            if(isInViewport(element)){
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
    // requestAnimationFrame
const raf = 
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ) {
            window.setTimeout( callback, 1000 / 60 )
        }
window.onscroll = function(ev){
    navColor();
    var element = document.getElementById('clients');
    var top = document.getElementById('client');
    if(element !=null){
        const handler = () => raf( () => {
            if(isInViewport(top)){
                if(check == 0 && viewing == false){
                    if(isInViewport(element)){
                        viewing = true;
                        check = 1;
                    }
                }else{
                    check = 0;
                }
            }
        })
            handler()
        
        
            //activate the happy clients
            if(viewing == true && check == 1){
                clientTimer(0,100,id='happy')
                clientTimer(0,60, 'complete')
                clientTimer(0,100, 'running');
            }
    }
}
    function slider(imgs,name){
        var dom = document.getElementsByClassName(name);
        var i = 0;
        setInterval(function(){
            if(i >= imgs.length)
                i = 0;
                if(dom.length >0){
                    dom[0].style.backgroundImage="url('assets/"+imgs[i]+"')";
                    if(i == 0){
                        dom[0].style.backgroundPosition="center";
                    }else{
                        dom[0].style.backgroundPosition="left";
                    }
                }
                i++;
        }, 5000)
    }
    window.onload = function(ev){
        navColor();
        clientTimer(0,100,id='happy')
        clientTimer(0,60, 'complete')
        clientTimer(0,100, 'running');
        slider(['backgrp1.jpg','backgrp2.jpg'], 'jamb');
        slider(['backgrp2.jpg', 'home.png'], 'requests');




    document.getElementsByClassName('open')[0].addEventListener('click', function(){
        document.getElementsByClassName('mobile-menu')[0].style.transform ='translateY(0)';
    })
    document.getElementsByClassName('close')[0].addEventListener('click', function(){
        document.getElementsByClassName('mobile-menu')[0].style.transform ='translateY(-100%)';
    })
    document.addEventListener('click', function(e){
        if(e.target.className.split(' ')[0] == 'mobile-link'){
            document.getElementsByClassName('mobile-menu')[0].style.transform ='translateY(-100%)';
        }
    })
    }


    //About the carousel

})


// locomotive code

function locoscroll(){

    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});







// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locoscroll()


// cursor of page1 code 

var crsr = document.querySelector("#cursor")
var page1 = document.querySelector("#page1")
var nav = document.querySelector("#navbar")


// normal code 


// page1.addEventListener("mousemove", function(dets){
//     crsr.style.top = dets.y + "px"
//     crsr.style.left = dets.x + "px"

// })

// with the help of gsap
// gsap.to("#cursor", {
//     x:500,
//     y: 500
// })


// for page1
page1.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        x : dets.x,
        y: dets.y
    })
})

// entry and exit 

page1.addEventListener("mouseenter", function(){
    gsap.to("#cursor", {
        scale : 1,
        opacity : 1
    })
})


page1.addEventListener("mouseleave", function(){
    gsap.to("#cursor", {
        scale : 0,
        opacity : 0
    })
})




// page2

gsap.from(".heading h2", {
    y : 100,
    duration : 0.3,
    opacity : 0,
    scrollTrigger : {
        trigger : ".heading h2",
        scroller : "#main",
        // markers : true, 
        start : "top 90%",
        end : "top 87%",
        scrub : 2,

    }
})



gsap.from(".content h1 ", {
    y : 100,
    duration : 1.5,
    opacity : 0,
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#page2",
        scroller : "#main",
        // markers : true, 
        start : "top 50%",
        end : "top 30%",
        scrub : 2,

    }
})


// page3


gsap.from("#page3 h6 ", {
    y : 100,
    duration : 0.8,
    opacity : 0,
    // stagger : 0.4,
    scrollTrigger : {
        trigger : "#page3",
        scroller : "#main",
        // markers : true, 
        start : "top 60%",
        end : "top 50%",
        scrub : 2,

    }
})


gsap.from("#page3 h1 ", {
    y : 100,
    duration : 0.7,
    opacity : 0,
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#page3",
        scroller : "#main",
        // markers : true, 
        start : "top 60%",
        end : "top 40%",
        scrub : 2,

    }
})


// page5

gsap.from("#five-top h3", {
    y : 100,
    duration : 0.3,
    opacity : 0,
    scrollTrigger : {
        trigger : "#page5",
        scroller : "#main",
        // markers : true, 
        start : "top 90%",
        end : "top 87%",
        scrub : 2,

    }
})



gsap.from("#five-lower h1 ", {
    y : 100,
    duration : 1.5,
    opacity : 0,
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#five-lower h1",
        scroller : "#main",
        // markers : true, 
        start : "top 80%",
        end : "top 60%",
        scrub : 2,

    }
})


// cursor of page6

var corecrsr = document.querySelector("#core-cursor")
var page6 = document.querySelector("#page6")
var page6vdo = document.querySelector("#page6 video")

page6.addEventListener("mousemove", function(dets){
    corecrsr.style.top = dets.y + "px"
    corecrsr.style.left = dets.x + "px"
})


page6.addEventListener("mouseenter", function(){
    gsap.to("#core-cursor", {
        scale : 1,
        opacity : 1,
    })
})

page6.addEventListener("mouseleave", function(){
    gsap.to("#core-cursor", {
        scale : 0,
        opacity : 0,
    })
})



// page8


// swipper js code

function slider(){

    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
}
slider()



// page9

gsap.from("#page9 h2", {
    y : 100,
    duration : 1, 
    opacity : 0,
    scrollTrigger : {
        trigger : "#page9", 
        scroller : "#main",
        // markers : true, 
        start : "top 60%",
        end : "top 50%",
        scrub : 2,
    }
})



// loader 

var tl = gsap.timeline()

tl.from("#loader h2", {
    x : 70,
    opacity : 0,
    duration : 1,
    stagger : 0.3,

})

tl.to("#loader",{
    opacity : 0, 
    display : "none",
})

tl.from("#page1 h1",{
    y : 100,
    opacity : 0,
    stagger : 0.2,
})




// last page animation


function lastrejouice(){

    gsap.from("#bottom-lower h1 span", {
        y : -150,
    durtion : 2,
    opacity : 0,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#bottom",
        scroller : "#main",
        // markers : true,
        start : "top 60%",
        end : "top 40%",
        scrub : 2,
        
    }
})
}

lastrejouice()
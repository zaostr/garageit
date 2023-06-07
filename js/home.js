gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

SmoothScroll({
    animationTime : 600,
    stepSize      : 100, 
});
/*ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
});*/

const lottie = document.getElementById('lot');

function nativeOffset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const items = document.querySelector('.items');
const sw = document.querySelector('.sw');
const itemsArray = gsap.utils.toArray('.item');
const swiperArray = gsap.utils.toArray('.swiper-wrapper > div');


/*let tl = gsap.timeline({
        scrollTrigger: {
        trigger: ".item",
        start: "center 50%",
        end: "bottom top",
        markers: "true",
        scrub: 1,
        snap: 0.33,
    }
    
  });*/

itemsArray.forEach((element, index) => {
    const itemTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: 'top 80px',
            //end: 'bottom top',
            end: () => {
                if ( typeof itemsArray[index + 1] !== 'undefined' ) {
                    return (gsap.utils.toArray('.item')[index].offsetHeight - 80) +` top`
                }
            },
            //toggleActions: "play reverse play reverse",
            //toggleActions: "play none reverse none",
            //invalidateOnRefresh: true,
            //markers: true,
            scrub: false,
            snap: {
                snapTo: 1,
                delay: .1,
                duration: {min: .2, max: .4},
                ease: "power1.inOut"
            },
            invalidateOnRefresh: true,
            directional: false
        }
    });

    /*itemTimeline.to(swiperArray[index], {
        xPercent: -100 * (swiperArray.length - 1),
        ease: "sine.out",
        scrollTrigger: {
            trigger: document.querySelector('.row'),
            start: 'top 80px',
            end: () => `${document.querySelector('.row').offsetHeight - gsap.utils.toArray('.item')[gsap.utils.toArray('.item').length - 1].offsetHeight}`,
            scrub: 3,
            snap: 1 / (swiperArray.length - 1),
            markers: true,
        }
    });*/

    //console.log( nativeOffset(items).top, element.offsetHeight );
    /*
    let qots = gsap.utils.toArray('.quote-wrapper > div');
    qots.forEach((element, i) => {
        if (i == (index+1)) {
            itemTimeline.to(element, {
                opacity: 1,
                delay: .3,
                duration: .3,
            });
        } else {
            itemTimeline.to(element, {
                opacity: 0,
                duration: 0,
            });                        
        }
    });*/
    const itemTimelineQ = gsap.timeline({});
    
    ScrollTrigger.create({
        trigger: document.querySelector('.quote-'+index),
        start: 'top 80px',
        end: () => {
            if ( typeof itemsArray[index + 1] !== 'undefined' ) {
                return (gsap.utils.toArray('.item')[index].offsetHeight - 80) +` top`
            }
        },
        invalidateOnRefresh: true,
        directional: false,
        animation: itemTimelineQ
    });

    itemTimelineQ.fromTo(document.querySelector('.quote-'+index), {
        opacity: 0,
    }, {
        opacity: 1,
        duration: .3
    })

    ScrollTrigger.create({
        trigger: element,
        start: 'top 81px',
        end: 'bottom 81px',
        animation: itemTimeline,
        invalidateOnRefresh: true,
        onEnter: () => {
            itemTimeline.to(document.querySelector('.swiper-wrapper'), {
                duration: .5,
                ease: "sine.out",
                xPercent: -100 * index,
            });
            lottie.play();
            lottie.addEventListener("complete", () => {
                lottie.stop();
            });
        },
        onEnterBack: () => {
            itemTimeline.to(document.querySelector('.swiper-wrapper'), {
                duration: .5,
                ease: "sine.out",
                xPercent: -100 * index,
            });
            lottie.play();
            lottie.addEventListener("complete", () => {
                lottie.stop();
            });
        },
    });

    /*ScrollTrigger.create({
        trigger: element,
        start: '80px 80px',
        end: 'bottom 100px',
        animation: itemTimeline,
        markers: true,
        //toggleActions: "play reverse play reverse",
        onEnter: () => {
            sw.innerHTML = index;
            if ( typeof itemsArray[index + 1] !== 'undefined' ) {
                gsap.to(window, {duration: .5, scrollTo: nativeOffset(itemsArray[index + 1]).top + 80 })
            }
        },
        onEnterBack: () => {
            sw.innerHTML = index;
            if ( typeof itemsArray[index - 1] !== 'undefined' ) {
                gsap.to(window, {duration: .5, scrollTo: nativeOffset(itemsArray[index - 1]).top + 80 })
            }
        },
    });*/
});

/*
const timeline = gsap.timeline({
    ease: "expo.inOut",
    scrollTrigger: {
        trigger: '.item.first',
        start: 'top 80px',
        end: 'bottom bottom',
        //end: () => `${document.querySelector('.items').offsetHeight - gsap.utils.toArray('.item')[gsap.utils.toArray('.item').length - 1].offsetHeight - 80}`,
        markers: true,
        scrub: 1,
    },
});*/

/*
gsap.to('.sw', {
    scrollTrigger: {
        trigger: '.items',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '20px',
        }
    }
});
*/


const timeline1 = gsap.timeline({
    paused: true,
    scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: '.row',
        start: 'top 80px',
        end: () => `${document.querySelector('.row').offsetHeight - gsap.utils.toArray('.item')[gsap.utils.toArray('.item').length - 1].offsetHeight}`,
        pin: '.sw',
    },
    //scrub: true,
});




















/*Office track*/
const scrubValue = 0.5;
let container = document.querySelector('.office__track');
let officeItems = gsap.utils.toArray(".office__item");



const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: '.office__section',
        start: 'top top',
        end: () => `${container.scrollWidth} bottom`,
        pin: '.office',
        markers: true,
        invalidateOnRefresh: true,
    },
    //scrub: true,
});





officeItems.forEach((officeItem, index) => {
 
    if ( officeItem.classList.contains('fakePin') ) {
                  
      function prevAll(element) {
        var result = [];
  
        while (element = element.previousElementSibling)
            result.push(element);
        return result;
      }    
      if (index == 2) {
        console.log(prevAll(officeItem));
      }
      
      
      var totalWidthToMove;
      
      function getTotalWidthToMove() {
          
        totalWidthToMove = 0;
        
        prevAll(officeItem).forEach((officeItemBefore, i) => {
            let style = officeItemBefore.currentStyle || window.getComputedStyle(officeItemBefore);      
            let marginRight = parseInt(style.marginRight);
            if (index == 2) {
              console.log(totalWidthToMove, i);
            }
            //console.log(i, officeItemBefore.offsetWidth);

            //totalWidthToMove += officeItemBefore.offsetWidth;
            /*if (officeItemBefore.classList.contains('full')) {
                totalWidthToMove += officeItem.offsetWidth;
            } else {
                if (officeItem.classList.contains('full')) {
                    totalWidthToMove += officeItem.offsetWidth;
                } else {
                    totalWidthToMove += officeItemBefore.offsetWidth;
                }
            }*/
            if (!officeItemBefore.classList.contains('full')) {
                if (index == 2) {
                    console.log( officeItemBefore.offsetWidth );
                }
            }
            totalWidthToMove += officeItemBefore.offsetWidth;
        });
        if (officeItem.classList.contains('full')) {
            console
            totalWidthToMove += -(container.offsetWidth) + officeItem.offsetWidth;
        } 
        
        return totalWidthToMove;
      }

      /*getTotalWidthToMove();
      if (index == 2) {
        console.log(totalWidthToMove);
      }*/
      
      gsap.to(officeItem, {
        x: () => { return - getTotalWidthToMove() },
        ease: "none",
        scrollTrigger: {
          trigger: ".office__track",
          start: 'top top',
          scrub: scrubValue,
          invalidateOnRefresh: true,
          end: () => "+=" + (getTotalWidthToMove()),
          //markers: true,
        }
      });
      
    }
    else {
        gsap.to(officeItem, {
            x: () => { return - (container.scrollWidth) },
            ease: "none",
            scrollTrigger: {
            trigger: ".office__track",
            start: 'top top',
            scrub: scrubValue,
            invalidateOnRefresh: true,
            end: () => "+=" + (container.scrollWidth),
            }
        });
    }
});
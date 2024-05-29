
document.querySelectorAll('.text').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.container').classList.add('slide-out');
        setTimeout(function() {
            window.location.href = item.getAttribute('data-url');
        }, 1000); 
    });
});


TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const controller = new ScrollMagic.Controller();

const t1 = new TimelineMax();

t1.to("#js-slideContainer", 0.5, { xPercent: -20 });
t1.from(content[1], 0.5, { opacity: 0 });


new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%",
})
  .setPin("#js-wrapper")
  .setTween(t1)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller);


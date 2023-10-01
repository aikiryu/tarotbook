gsap.registerPlugin(ScrollTrigger);

let items = gsap.utils.toArray(".items");
let txtBox = document.querySelector('.pic-container');


// pin box-c when it reaches the center of the viewport, for 300px


let largeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".items.item1",
    pin: ".s2 .txtBox",
    scrub: 0.5,
    start: "top 100",
    //end: '+=550%',
    end: "+=1600"
  }

})


items.forEach(function (elem, i) {
  gsap.set(".s2 .items", { zIndex: (i, target, targets) => targets.length - i });

  // select the relevant elements
  //var lines = elem.querySelectorAll(".lines");

  const tlDelay = i;

  var smallTL = gsap.timeline();

  smallTL
    .to(elem, { 
      autoAlpha: 1,
      duration: 1, }, tlDelay)
    // .from(lines, {
    //   xPercent: -100,
    //   duration: 1,
    //   ease: "power2.out",
    //   stagger: 0.6
    // })
    .to(elem, { 
      autoAlpha: 0,})
    .to({}, {duration:1,autoAlpha: 1,}) // a little pause at the end
  largeTL.add(smallTL, tlDelay);

  
});



  $(window).resize(function(){
    
  let windowHeight = window.innerHeight;
  $('.banner').height(windowHeight);
  });

  let windowHeight = window.innerHeight;
  $('.banner').height(windowHeight);
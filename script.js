const scrollAnimation = ()=>{
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
}
scrollAnimation()

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#mainIceCream",
    scroller:"body",
    markers:false,
    start:"20% 10%",
    end:"90% 10%",
    scrub:2,
  }
})

tl.to("#mainIceCream",{
  y:940,
  rotate:0,
  duration:2,
  height:"70vh"
})

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:false,
    start:"20% 10%",
    end:"90% 10%",
    scrub:2,
  }
})

tl2.to("#mainIceCream",{
  y:1710,
  x:-410,
  height:"50vh"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    markers:false,
    start:"20% 10%",
    end:"90% 10%",
    scrub:2,
  }
})

tl3.to("#mainIceCream",{
  y:2210,
  rotate:"-50deg",
  height:"65vh"
})
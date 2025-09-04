import gsap from "gsap";

gsap.to(".green", {
  rotation: 360,
  duration: 1,
  ease: "none",
  opacity: 1
})

gsap.to(".purple", {
  rotation: 360,
  duration: 1,
  ease: "bounce.inOut",
  opacity: 1
})
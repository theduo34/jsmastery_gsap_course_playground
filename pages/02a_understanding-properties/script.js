import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  duration: 1,
  //borderRadius: "50%",
  //background: "rgba(0, 200, 255, 0.8)",
  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
  scale: 1.05,
  repeat: 2,
  repeatDelay: 0.1,
  //delay: 0.5,
  ease: "power1.inOut",
  onComplete: () => {
    gsap.to(".box", {
      scale: 1.08,
      background: "rgba(0, 200, 255, 0.8)",
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      duration: 1
    })
  }
})
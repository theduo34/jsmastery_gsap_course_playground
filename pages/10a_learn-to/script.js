import gsap from "gsap";

const showToastLogo = () => {
  gsap.to('.toast', {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 2,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        opacity: 0,
        y: 0,
        scale: 0.95,
        duration: 2,
        ease: "power.in",
        onComplete: () => {
          setTimeout(showToastLogo, 2500);
        }
      })
    }
  })
}

showToastLogo();
import gsap from "gsap";

// const linear = document.querySelector(".linear");
// const bounce = document.querySelector(".bounce");
// const sine = document.querySelector(".sine");
// const rough = document.querySelector(".rough");
// const step = document.querySelector(".step");
// const power = document.querySelector(".power");
// const slow = document.querySelector(".slow");
// const elastic = document.querySelector(".elastic");

const power1 = document.querySelector(".power1");
const power2 = document.querySelector(".power2");
const power3 = document.querySelector(".power3");
const power4 = document.querySelector(".power4");


const animatePower1 = gsap.to(".power1", {
  rotation: 360,
  duration: 5,
  ease: "power1.inOut",
})

const animatePower2 = gsap.to(".power2", {
  rotation: 360,
  duration: 5,
  ease: "power2.inOut",
});

const animatePower3 = gsap.to(".power3", {
  rotation: 360,
  duration: 5,
  ease: "power3.inOut",
});

const animatePower4 = gsap.to(".power4", {
  rotation: 360,
  duration: 5,
  ease: "power4.inOut",
});

power1.addEventListener("click", () => {
  animatePower1.restart();
});

power2.addEventListener("click", () => {
  animatePower2.restart();
});

power3.addEventListener("click", () => {
  animatePower3.restart();
});

power4.addEventListener("click", () => {
  animatePower4.restart();
})

// const animateLinear = gsap.to(".linear", {
//   rotation: 360,
//   duration: 5,
//   ease: "none",
// });
//
// const animateBounce = gsap.to(".bounce", {
//   rotation: 360,
//   opacity: 1,
//   duration: 5,
//   ease: "bounce.inOut",
// })
//
// const animateElastic = gsap.to(".elastic", {
//   rotation: 360,
//   duration: 5,
//   ease: "elastic.inOut",
// })
//
// const animateSine = gsap.to(".sine", {
//   rotation: 360,
//   duration: 5,
//   ease: "sine.inOut",
// });
//
// const animatePower = gsap.to(".power", {
//   rotation: 360,
//   duration: 5,
//   ease: "power1.inOut",
// })
//
// const animateStep = gsap.to(".step", {
//   rotation: 360,
//   duration: 5,
//   ease: "step(5)",
// })
//
// const animateSlow = gsap.to(".slow", {
//   rotation: 360,
//   duration: 5,
//   ease: "slow(0.7, 0.7, false)",
// })
//
// const animateRough = gsap.to(".rough", {
//   rotation: 360,
//   duration: 5,
//   ease: "rough({ template: power0.easeNone, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })",
// })

// linear.addEventListener("click", () => {
//   animateLinear.restart()
// });
//
// bounce.addEventListener("click", () => {
//   animateBounce.restart()
// });
//
// elastic.addEventListener("click", () => {
//   animateElastic.restart()
// });
//
// sine.addEventListener("click", () => {
//   animateSine.restart()
// });
//
// power.addEventListener("click", () => {
//   animatePower.restart()
// });
//
// step.addEventListener("click", () => {
//   animateStep.restart()
// });
//
// slow.addEventListener("click", () => {
//   animateSlow.restart()
// });
//
// rough.addEventListener("click", () => {
//   animateRough.restart()
// });
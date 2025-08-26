import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reverse = document.querySelector(".reverse");
const restart = document.querySelector(".restart");
const resume = document.querySelector(".resume");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const repeat = document.querySelector(".repeat");
const delay = document.querySelector(".delay");


const animation = gsap.to(".box", {
  opacity: 1,
  scale: 1.05,
  rotation: 360,
  duration: 5,
  borderRadius: "50%"
})

play.addEventListener("click", () => {
  animation.play()
});

pause.addEventListener("click", () => {
  animation.pause()
});

resume.addEventListener("click", () => {
  animation.resume()
});

restart.addEventListener("click", () => {
  animation.restart()
});

reverse.addEventListener("click", () => {
  animation.reverse()
})

kill.addEventListener("click", () => {
  animation.kill()
});

yoyo.addEventListener("click", () => {
  animation.yoyo(true)
});

repeat.addEventListener("click", () => {
  animation.repeat(5)
});

delay.addEventListener("click", () => {
  animation.delay(20)
})
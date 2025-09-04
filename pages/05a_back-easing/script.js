import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

function updateIndicator(target) {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 1,
    ease: "back.inOut(2)"
  })
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((t) => {
      t.classList.remove("active");
      tab.classList.add("active");
      updateIndicator(tab);
    })
  })
})

updateIndicator(document.querySelector(".tab.active"));
gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      boxShadow: "0 0 40px 10px rgba(0, 200, 255, 0.8)",
      y: 0,
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut"
    });
  }
});

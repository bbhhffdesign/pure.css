const mindmapTexts = [
  document.getElementById("mindmap-text-1"),
  document.getElementById("mindmap-text-2"),
  document.getElementById("mindmap-text-3"),
  document.getElementById("mindmap-text-4"),
  document.getElementById("mindmap-cta"),
  document.getElementById("services-text-1"),
  document.getElementById("services-text-2"),
];

const servicesBoxes = [
  document.getElementById("services-box-1"),
  document.getElementById("services-box-2"),
  document.getElementById("services-box-3"),
];
const servicesBoxContent = [
  document.getElementById("services-box-1-content"),
  document.getElementById("services-box-2-content"),
  document.getElementById("services-box-3-content"),
];
const servicesBoxLogos = [
  document.getElementById("oferta-logo"),
  document.getElementById("comunicacion-logo"),
  document.getElementById("marca-logo"),
];
const gemstoneTexts = [
  document.getElementById("gemstone-text-2"),
  document.getElementById("gemstone-text-3"),
  document.getElementById("gemstone-text-4"),
  document.getElementById("gemstone-text-5"),
  document.getElementById("gemstone-text-6"),
  document.getElementById("gemstone-text-7"),
  document.getElementById("gemstone-text-8"),
];
const pasos = [
  document.getElementById("paso-text-1"),
  document.getElementById("paso-text-2"),
  document.getElementById("paso-text-3"),
];
const pasos_number = [
  document.getElementById("paso-number-1"),
  document.getElementById("paso-number-2"),
  document.getElementById("paso-number-3"),
];

for (let i = 0; i < mindmapTexts.length; i++) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mindmapTexts[i],
      start: "-30% 100%",
      end: "300% 100%",
      // markers: true
      scrub: 1,
    },
  });
  tl.from(mindmapTexts[i], {
    scale: 0.9,
    opacity: 0,
    y: 150,
    ease: "power4.out",
    duration: 1,
    transformOrigin: "50% 50%",
  });
}

const tl_servicesText_3 = gsap.timeline({
  scrollTrigger: {
    trigger: servicesText3,
    //   markers: true,
    start: "center 90%",
    end: "center 90%",
  },
});
tl_servicesText_3.from(servicesText3, {
  scale: 0.9,
  opacity: 0,
  y: 150,
  ease: "power4.out",
  duration: 1,
  transformOrigin: "50% 50%",
});

for (let i = 0; i < servicesBoxes.length; i++) {
  const tl = gsap.timeline({
    scrollTrigger: {
        //   markers: true,
      trigger: servicesBoxes[i],
      start: "top 90%",
      end: "500% 90%",
      scrub: 1,
    },
  });
  tl.from(servicesBoxContent[i], {
    opacity: 0,
    y: 150,
    ease: "power4.out",
    duration: 1,
  })
    .from(servicesBoxLogos[i], {
      duration: 3,
      fill: "#c6c6c6",
      ease: "power4.out",
    })
    .to(servicesBoxLogos[i], {
      duration: 1,
      fill: "var(--colorBg)",
      ease: "power4.out",
    });
}

const tl_gemstoneText_1 = gsap.timeline({
  scrollTrigger: {
    trigger: gemstoneText1Container,
    // markers: true,
    pin: true,
    start: "center center",
    end: "200% center",
    scrub: 1,
  },
});
tl_gemstoneText_1
  .from(gemstoneText1, { opacity: 0, ease: "power4.out", duration: 3 })
  .to(bgParticles, { opacity: 0 }, "<")
  .to(gemstoneSection, { background: "var(--colorBg)" })
  .call(() => {
    const particles = tsParticles.domItem(0);
    particles.pause();
  })
  .call(() => {
    const particles = tsParticles.domItem(0);
    particles.play();
  });

for (let i = 0; i < gemstoneTexts.length; i++) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneTexts[i],
    //   markers: true,
      start: "-20% 90%",
      end: "500% 90%",
      scrub: 1,
    },
  });
  tl.from(gemstoneTexts[i], {
    opacity: 0,
    scale: 0.9,
    y: 150,
    duration: 0.5,
    transformOrigin: "50% 50%",
  });
}

for (let i = 0; i < pasos.length; i++) {
  const tl = gsap.timeline({
    scrollTrigger: {
        // markers: true,
      trigger: pasos[i],
      start: "-50% 90%",
      end: "bottom 90%",
      scrub: 1,
    },
  });
  tl.from(pasos[i], {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    y: 150,
  })
  .from(pasos_number[i], {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    y: 150,
  }, "<");
}

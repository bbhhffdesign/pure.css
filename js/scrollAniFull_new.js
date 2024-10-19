const bgParticles = document.getElementById("tsparticles");
const navBar =
  document.getElementById("navbar");
const heroText =
  document.getElementById("hero-text");
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
const gemBg = [
  document.getElementById("borde-ext"),
  document.getElementById("borde-int"),
  document.getElementById("gemstone-sup"),
  document.getElementById("gemstone-inf"),
];
const gemstoneSection = document.getElementById("gemstone-section");
const gemstoneText1Container = document.getElementById("gemstone-text-1-container");
const gemstoneText1 = document.getElementById("gemstone-text-1");
const gemstoneTexts = [
  document.getElementById("gemstone-text-2"),
  document.getElementById("gemstone-text-3"),
  document.getElementById("gemstone-text-4"),
  document.getElementById("gemstone-text-5"),
  document.getElementById("gemstone-text-6"),
  document.getElementById("gemstone-text-7"),
  document.getElementById("gemstone-text-8"),
];
const ctaGemstone = document.getElementById("cta-gemstone");
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
const cta_email =
  document.getElementById("cta-email-container");
const orbita_texts = [
    document.getElementById("orbita-text1"),
    document.getElementById("orbita-text2"),
    document.getElementById("orbita-text3"),
    document.getElementById("orbita-text4"),
    document.getElementById("orbita-text5"),
    document.getElementById("orbita-text6")
]
//
// scale,duration
const paramAnim =[0.9, 1, "90%"];

const tl_navbar = gsap.timeline({
  scrollTrigger: {
    trigger: heroText,
    // markers: true,
    start: "70% 10%",
    end: "110% 10%",
    scrub: true,
  },
});
tl_navbar
  .to(navBar, { y: "-100%" })
  .from(themeSwitch2, { opacity: 0, zIndex: "auto" }, "<");

gsap.timeline({
  scrollTrigger:{
    trigger: ".mindmap-title-container",
    start: "top 70%",
    end: "top 70%",
    markers: true,
    // scrub: true
  }
})
.from(".mindmaptxt", {
  opacity: 0,
  y: 150,
  stagger: 0.6, // Añadir un pequeño retardo entre animaciones
  ease: "power4.out",
  duration: paramAnim[1],
});

gsap.timeline({
  scrollTrigger:{
    trigger: ".gemstone-text",
    start: "bottom 90%",
    end: "bottom 90%",
    // markers: true,
  }
})
.from(".gemstone-text-content", {
  opacity: 0,
  y: 150,
  stagger: 0.1, // Añadir un pequeño retardo entre animaciones
  ease: "power4.out",
  duration: paramAnim[1],
})
.from(".gemstone-text", {opacity: 0}, "<");;

gsap.timeline({
  scrollTrigger: {
    trigger: ".pasos-container",
    start: "80% 90%",
    end: "80% 90%",
    // markers: true,
  }
})
.from(".paso-number", {
  // scale: paramAnim[0],
  // transformOrigin: "50% 50%",
  opacity: 0,
  y: 150,
  stagger: .6, // Añadir un pequeño retardo entre animaciones
  ease: "power4.out",
  duration: paramAnim[1],
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".orbita-text",
    start: "80% 90%",
    end: "80% 90%",
    // markers: true,
  }
})
.from(".orbita__text", {
  // scale: paramAnim[0],
  // transformOrigin: "50% 50%",
  opacity: 0,
  y: 150,
  stagger: 0.1, // Añadir un pequeño retardo entre animaciones
  ease: "power4.out",
  duration: paramAnim[1],
});

// for (let i = 0; i < mindmapTexts.length; i++) {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: mindmapTexts[i],
//       start: `-30% ${paramAnim[2]}`,
//       end: "300% 100%",
//       // markers: true
//       // scrub: 1,
//     },
//   });
//   tl.from(mindmapTexts[i], {
//     scale: paramAnim[0],
//     transformOrigin: "50% 50%",
//     opacity: 0,
//     y: 150,
//     ease: "power4.out",
//     duration: paramAnim[1],
//   });
// }

// for (let i = 0; i < servicesBoxes.length; i++) {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       //   markers: true,
//       trigger: servicesBoxes[i],
//       start: `top ${paramAnim[2]}`,
//       end: "500% 90%",
//       // scrub: 1,
//     },
//   });
//   tl.from(servicesBoxContent[i], {
//     scale: paramAnim[0],
//     transformOrigin: "50% 50%",
//     opacity: 0,
//     y: 150,
//     ease: "power4.out",
//     duration: paramAnim[1],
//   })
//     // .from(servicesBoxLogos[i], {
//     //   duration: 3,
//     //   fill: "#c6c6c6",
//     //   ease: "power4.out",
//     // })
//     // .to(servicesBoxLogos[i], {
//     //   duration: 1,
//     //   fill: "var(--colorBg)",
//     //   ease: "power4.out",
//     // });
// }

const tl_gemstoneText_1 = gsap.timeline({
  scrollTrigger: {
    trigger: gemstoneText1Container,
    // markers: true,
    pin: true,
    start: "center center",
    end: "bottom center",
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

const gemBg_anim = [];
const gemBg_anim_tl = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: gemstoneText1Container,
    // markers: true,
    start: "60% center",
    end: "200% center",
    onEnter: () => {
      gemBg_anim_tl.play();
    },

    onEnterBack: () => {
      gemBg_anim_tl.timeScale(3);
      gemBg_anim_tl.reverse();
    },
    onLeaveBack: () => {
      gemBg_anim_tl.timeScale(5);
      gemBg_anim_tl.reverse();
    },
  },
});

for (let i = 0; i < gemBg.length; i++) {
  let length = gemBg[i].getTotalLength();
  gemBg[i].style.strokeDashoffset = length;
  gemBg[i].style.strokeDasharray = length;

  gemBg_anim_tl.to(gemBg[i], { strokeDashoffset: 0, duration: 5 }, "<");
}

// for (let i = 0; i < gemstoneTexts.length; i++) {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: gemstoneTexts[i],
//       //   markers: true,
//       start: `-20% ${paramAnim[2]}`,
//       end: "500% 90%",
//       // scrub: true,
//     },
//   });
//   tl.from(gemstoneTexts[i], {
//     opacity: 0,
//     scale: paramAnim[0],
//     transformOrigin: "50% 50%",
//     y: 150,
//     duration: paramAnim[1],
//   });
// }

// for (let i = 0; i < pasos.length; i++) {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       // markers: true,
//       trigger: pasos[i],
//       start: `-50% ${paramAnim[2]}`,
//       end: "bottom 90%",
//       // scrub: true,
//     },
//   });
//   tl.from(pasos[i], {
//     opacity: 0,
//     scale: paramAnim[0],
//     transformOrigin: "50% 50%",
//     duration: paramAnim[1],
//     y: 150,
//   })
//     .from(pasos_number[i], {
//       opacity: 0,
//       scale: paramAnim[0],
//       transformOrigin: "50% 50%",
//       duration: paramAnim[1],
//       y: 150,
//     }, "<");
// }
// const tl_ctaGemstone = gsap.timeline({
//   scrollTrigger: {
//     trigger: ctaGemstone,
//     // markers:true,
//     start: `top ${paramAnim[2]}`,
//     end: "bottom 90%",
//   },
// });
// tl_ctaGemstone.from(ctaGemstone, { 
//   duration: paramAnim[1],
//   scale: paramAnim[0],
//   transformOrigin: "50% 50%",
//   opacity: 0,
//   y: 100 });


// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: cta_email,
//     // markers: true,
//     start: `top ${paramAnim[2]}`,
//     end: "200% 95%",
//     // scrub: true
//   }
// });
// tl
//   .from(cta_email, {
//     scale: paramAnim[0],
//     transformOrigin: "50% 50%",
//     duration: paramAnim[1],
//     opacity: 0,
//     y: 150,
//   })

//   for (let i = 0; i < orbita_texts.length; i++){
//     const tl = gsap.timeline({
//       scrollTrigger:{
//         trigger: orbita_texts[i],
//         start: `top ${paramAnim[2]}`,
//         end: "bottom 90%",
//         // markers: true
//       }
//     });
//     tl
//       .from(orbita_texts[i], {
//         scale: paramAnim[0],
//         transformOrigin: "50% 50%",
//         duration: paramAnim[1],
//         opacity: 0,
//         y: 150,
//       })
//   }

const heroContainer = document.getElementById("hero");
const mindMapContainer = document.getElementById("mindMapContainer");
const mindMap = document.getElementById("mindMap");
const scrollDownIcon = document.getElementById("scrollDownIcon");
const scrollDownIconDesktop = document.getElementById("scrollDownIconDesktop")

//texto
const dueño = document.getElementById("owner");
const agenda = document.getElementById("agenda");
const posicionarMarca = document.getElementById("posicionarMarca");
const branding = document.getElementById("branding");
const excelente = document.getElementById("excelente");
const aumentarVentas = document.getElementById("aumentarVentas");
const agendaBig = document.getElementById("agendaBig");
const agendaBigBg = document.getElementById("agendaBigBg");
const estrategia = document.getElementById("estrategia");
const camino = document.getElementById("camino");

//si/no
const si1 = document.getElementById("si1");
const si2 = document.getElementById("si2");
const si3 = document.getElementById("si3");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const no3 = document.getElementById("no3");

// flechas recorrido principal
//loopeo entre los elementos con id flechaX y les cambio la propiedad del trazo
for (let i = 1; i <= 8; i++) {
  const flecha = document.getElementById(`flecha${i}`);
  const flechaLength = flecha.getTotalLength();

  flecha.style.strokeDasharray = flechaLength;
  flecha.style.strokeDashoffset = flechaLength;

  window[`flecha${i}`] = flecha;
}

// //tween de flecha que me quedo al reves

// flechaFinal
for (let i = 1; i <= 6; i++) {
  const flechaF = document.getElementById(`flechaF${i}`);
  const flechaFLength = flechaF.getTotalLength();
  flechaF.style.strokeDasharray = flechaFLength;
  flechaF.style.strokeDashoffset = flechaFLength;
  window[`flechaF${i}`] = flechaF;
}

//like & tick
const iconoLike = document.getElementById("iconoLike");
const iconoTick = document.getElementById("iconoTick");

//logos+array
const logoYamatec = document.getElementById("logoYamatec");
const logoUdana = document.getElementById("logoUdana");
const logoSound = document.getElementById("logoSound");
const logoX = document.getElementById("logoX");
const logoBelen = document.getElementById("logoBelen");
const logoGallmarquez = document.getElementById("logoGallmarquez");
const arrayLogo = [
  logoYamatec,
  logoUdana,
  logoSound,
  logoX,
  logoBelen,
  logoGallmarquez,
];

let mmMobile = gsap.matchMedia();
let mmTabletSmall = gsap.matchMedia();
let mmDesktopSmall = gsap.matchMedia();
let mmDesktopMed = gsap.matchMedia();
let mmDesktopLarge = gsap.matchMedia();
let mmDesktopXLarge = gsap.matchMedia();

let funcTimelines = function (timelines) {
  timelines
    .from(dueño, { opacity: 0 },"<")
    .to(flecha1, { strokeDashoffset: 0 })
    .from(no1, { opacity: 0 }, "<50%")
    .from(agenda, { opacity: 0 })
    .to(flecha2, { strokeDashoffset: 0 })
    .from(si1, { opacity: 0 }, "<50%")
    .from(posicionarMarca, { opacity: 0 })
    .to(flecha3, { strokeDashoffset: 0 })
    .from(si2, { opacity: 0 }, "<50%")
    .from(branding, { opacity: 0 })
    .to(flecha4, { strokeDashoffset: 0 })
    .from(no2, { opacity: 0 }, "<50%")
    .from(excelente, { opacity: 0 })
    .from(
      iconoLike,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .from(aumentarVentas, { opacity: 0 })
    .to(flecha5, { strokeDashoffset: 0 })
    .from(si3, { opacity: 0 }, "<50%")
    .from(estrategia, { opacity: 0 })
    .to(flecha6, { strokeDashoffset: 0 })
    .to(flecha7, { strokeDashoffset: 0 }, "<")
    .from(agendaBig, { opacity: 0 })
    .from(agendaBigBg, { opacity: 0 }, "<")
    .to(flecha8, { strokeDashoffset: 0 })
    .from(no3, { opacity: 0 }, "<10%")
    .from(camino, { opacity: 0 })
    .from(
      iconoTick,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )

    .to(flechaF1, { strokeDashoffset: 0 }, "<")
    .from(logoGallmarquez, { opacity: 0 },"< +50%")
    .to(flechaF2, { strokeDashoffset: 0 }, "<")
    .from(logoUdana, { opacity: 0 },"< +50%")
    .to(flechaF3, { strokeDashoffset: 0 }, "<")
    .from(logoX, { opacity: 0 }, "< +50%")
    .to(flechaF4, { strokeDashoffset: 0 }, "<")
    .from(logoBelen, { opacity: 0 }, "< +50%")
    .to(flechaF5, { strokeDashoffset: 0 }, "<")
    .from(logoSound, { opacity: 0 }, "< +50%")
    .to(flechaF6, { strokeDashoffset: 0 }, "<")
    .from(logoYamatec, { opacity: 0 }, "< +60%");
};

let funcTimelinesDesktopSmall = function (timelines) {
  timelines

   
    .from(dueño, { opacity: 0 })
    .to(flecha1, { strokeDashoffset: 0 })
    .from(no1, { opacity: 0 }, "<50%")
    .from(agenda, { opacity: 0 })
    .to(flecha2, { strokeDashoffset: 0 })
    .from(si1, { opacity: 0 }, "<50%")
    .from(posicionarMarca, { opacity: 0 })
    .to(flecha3, { strokeDashoffset: 0 })
    .from(si2, { opacity: 0 }, "<50%")
    .from(branding, { opacity: 0 })
    .to(flecha4, { strokeDashoffset: 0 })
    .from(no2, { opacity: 0 }, "<50%")
    .from(excelente, { opacity: 0 })
    .from(
      iconoLike,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .from(aumentarVentas, { opacity: 0 })
    .to(flecha5, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(si3, { opacity: 0 }, "<50%")
    .from(estrategia, { opacity: 0 })
    .to(flecha6, { strokeDashoffset: 0 })
    .to(flecha7, { strokeDashoffset: 0 }, "<")
    .from(agendaBig, { opacity: 0 })
    .from(agendaBigBg, { opacity: 0 }, "<")
    .to(flecha8, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(no3, { opacity: 0 }, "<10%")
    .to(mindMap,{y:"-10%"},"<")
    .from(camino, { opacity: 0 })
    .from(
      iconoTick,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .to(mindMap,{y:"-40%"})
    .to(flechaF1,{strokeDashoffset: 0},"<+4%")
    .to(flechaF2,{strokeDashoffset: 0},"<+8%")
    .to(flechaF3,{strokeDashoffset: 0},"<+12%")
    .to(flechaF4,{strokeDashoffset: 0},"<+16%")
    .to(flechaF5,{strokeDashoffset: 0},"<+20%")
    .to(flechaF6,{strokeDashoffset: 0},"<+24%")
    .from(logoGallmarquez, { opacity: 0 }, "<")
    .from(logoUdana, { opacity: 0 }, "<+4%")
    .from(logoX, { opacity: 0 }, "<+8%")
    .from(logoBelen, { opacity: 0 }, "<+12%")
    .from(logoSound, { opacity: 0 }, "<+16%")
    .from(logoYamatec, { opacity: 0 }, "<+20%")

};
let funcTimelinesDesktopMed = function (timelines) {
  timelines
    .from(dueño, { opacity: 0 })
    .to(flecha1, { strokeDashoffset: 0 })
    .from(no1, { opacity: 0 }, "<50%")
    .from(agenda, { opacity: 0 })
    .to(flecha2, { strokeDashoffset: 0 })
    .from(si1, { opacity: 0 }, "<50%")
    .from(posicionarMarca, { opacity: 0 })
    .to(flecha3, { strokeDashoffset: 0 })
    .from(si2, { opacity: 0 }, "<50%")
    .from(branding, { opacity: 0 })
    .to(flecha4, { strokeDashoffset: 0 })
    .from(no2, { opacity: 0 }, "<50%")
    .from(excelente, { opacity: 0 })
    .from(
      iconoLike,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .from(aumentarVentas, { opacity: 0 })
    .to(flecha5, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(si3, { opacity: 0 }, "<50%")
    .from(estrategia, { opacity: 0 })
    .to(flecha6, { strokeDashoffset: 0 })
    .to(flecha7, { strokeDashoffset: 0 }, "<")
    .from(agendaBig, { opacity: 0 })
    .from(agendaBigBg, { opacity: 0 }, "<")
    .to(flecha8, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(no3, { opacity: 0 }, "<10%")
    .to(mindMap,{y:"-10%"},"<")
    .from(camino, { opacity: 0 })
    .from(
      iconoTick,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .to(mindMap,{y:"-50%"})
    .to(flechaF1,{strokeDashoffset: 0},"<+4%")
    .to(flechaF2,{strokeDashoffset: 0},"<+8%")
    .to(flechaF3,{strokeDashoffset: 0},"<+12%")
    .to(flechaF4,{strokeDashoffset: 0},"<+16%")
    .to(flechaF5,{strokeDashoffset: 0},"<+20%")
    .to(flechaF6,{strokeDashoffset: 0},"<+24%")
    .from(logoGallmarquez, { opacity: 0 }, "<")
    .from(logoUdana, { opacity: 0 }, "<+4%")
    .from(logoX, { opacity: 0 }, "<+8%")
    .from(logoBelen, { opacity: 0 }, "<+12%")
    .from(logoSound, { opacity: 0 }, "<+16%")
    .from(logoYamatec, { opacity: 0 }, "<+20%")

};
let funcTimelinesDesktopLarge = function (timelines) {
  timelines
    .from(dueño, { opacity: 0 })
    .to(flecha1, { strokeDashoffset: 0 })
    .from(no1, { opacity: 0 }, "<50%")
    .from(agenda, { opacity: 0 })
    .to(flecha2, { strokeDashoffset: 0 })
    .from(si1, { opacity: 0 }, "<50%")
    .from(posicionarMarca, { opacity: 0 })
    .to(flecha3, { strokeDashoffset: 0 })
    .from(si2, { opacity: 0 }, "<50%")
    .from(branding, { opacity: 0 })
    .to(flecha4, { strokeDashoffset: 0 })
    .from(no2, { opacity: 0 }, "<50%")
    .from(excelente, { opacity: 0 })
    .from(
      iconoLike,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .from(aumentarVentas, { opacity: 0 })
    .to(flecha5, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(si3, { opacity: 0 }, "<50%")
    .from(estrategia, { opacity: 0 })
    .to(flecha6, { strokeDashoffset: 0 })
    .to(flecha7, { strokeDashoffset: 0 }, "<")
    .from(agendaBig, { opacity: 0 })
    .from(agendaBigBg, { opacity: 0 }, "<")
    .to(flecha8, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(no3, { opacity: 0 }, "<10%")
    .to(mindMap,{y:"-10%"},"<")
    .from(camino, { opacity: 0 })
    .from(
      iconoTick,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .to(mindMap,{y:"-37%"})
    .to(flechaF1,{strokeDashoffset: 0},"<+4%")
    .to(flechaF2,{strokeDashoffset: 0},"<+8%")
    .to(flechaF3,{strokeDashoffset: 0},"<+12%")
    .to(flechaF4,{strokeDashoffset: 0},"<+16%")
    .to(flechaF5,{strokeDashoffset: 0},"<+20%")
    .to(flechaF6,{strokeDashoffset: 0},"<+24%")
    .from(logoGallmarquez, { opacity: 0 }, "<")
    .from(logoUdana, { opacity: 0 }, "<+4%")
    .from(logoX, { opacity: 0 }, "<+8%")
    .from(logoBelen, { opacity: 0 }, "<+12%")
    .from(logoSound, { opacity: 0 }, "<+16%")
    .from(logoYamatec, { opacity: 0 }, "<+20%")

};
let funcTimelinesDesktopXLarge = function (timelines) {
  timelines
    .from(dueño, { opacity: 0 })
    .to(flecha1, { strokeDashoffset: 0 })
    .from(no1, { opacity: 0 }, "<50%")
    .from(agenda, { opacity: 0 })
    .to(flecha2, { strokeDashoffset: 0 })
    .from(si1, { opacity: 0 }, "<50%")
    .from(posicionarMarca, { opacity: 0 })
    .to(flecha3, { strokeDashoffset: 0 })
    .from(si2, { opacity: 0 }, "<50%")
    .from(branding, { opacity: 0 })
    .to(flecha4, { strokeDashoffset: 0 })
    .from(no2, { opacity: 0 }, "<50%")
    .from(excelente, { opacity: 0 })
    .from(
      iconoLike,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .from(aumentarVentas, { opacity: 0 })
    .to(flecha5, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(si3, { opacity: 0 }, "<50%")
    .from(estrategia, { opacity: 0 })
    .to(flecha6, { strokeDashoffset: 0 })
    .to(flecha7, { strokeDashoffset: 0 }, "<")
    .from(agendaBig, { opacity: 0 })
    .from(agendaBigBg, { opacity: 0 }, "<")
    .to(flecha8, { strokeDashoffset: 0 })
    .to(mindMap,{y:"-10%"},"<") 
    .from(no3, { opacity: 0 }, "<10%")
    .to(mindMap,{y:"-10%"},"<")
    .from(camino, { opacity: 0 })
    .from(
      iconoTick,
      {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "50% 50%",
        ease: "bounce.out",
        duration: 0.8,
      },
      "<"
    )
    .to(mindMap,{y:"-42%"})
    .to(flechaF1,{strokeDashoffset: 0},"<+4%")
    .to(flechaF2,{strokeDashoffset: 0},"<+8%")
    .to(flechaF3,{strokeDashoffset: 0},"<+12%")
    .to(flechaF4,{strokeDashoffset: 0},"<+16%")
    .to(flechaF5,{strokeDashoffset: 0},"<+20%")
    .to(flechaF6,{strokeDashoffset: 0},"<+24%")
    .from(logoGallmarquez, { opacity: 0 }, "<")
    .from(logoUdana, { opacity: 0 }, "<+4%")
    .from(logoX, { opacity: 0 }, "<+8%")
    .from(logoBelen, { opacity: 0 }, "<+12%")
    .from(logoSound, { opacity: 0 }, "<+16%")
    .from(logoYamatec, { opacity: 0 }, "<+20%")

};

mmMobile.add("(max-width: 599px)", () => {
  let tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger:heroContainer,
      scrub: 1,
      // markers: true,
      pin: true,
      // pinspacing: true,
      start: "55% 20%",
      end: "500% bottom",
    },
    
  });
  funcTimelines(tlMobile)
});

mmTabletSmall.add("(min-width:600px) and (max-width: 768px)", () => {
  let tlMindmapTabletSmall = gsap.timeline({
    scrollTrigger: {
      trigger: heroContainer,
      scrub: 1,
      // markers: true,
      pin: true,
      start: "58% 20%",
      end: "500% bottom",
    },
  });
  funcTimelines(tlMindmapTabletSmall)
});

mmDesktopSmall.add("(min-width:769px) and (max-width: 1279px)", () => {
  let tlMindmapDesktopSmall = gsap.timeline({
    scrollTrigger: {
      trigger: heroContainer,
      scrub: 1,
      markers: true,
      pin: true,
      start: "8% 8%",
      end: "600% bottom",
    },
  });
  funcTimelinesDesktopSmall(tlMindmapDesktopSmall)
});

mmDesktopMed.add("(min-width: 1280px) and (max-width: 1439px)", () => {
  let tlMindmapDesktopMed = gsap.timeline({
    scrollTrigger: {
      trigger: heroContainer,
      scrub: 1,
      markers: true,
      pin: true,
      start: "10% 10%",
      end: "1000% bottom",
    },
  });
  funcTimelinesDesktopMed(tlMindmapDesktopMed)
});
mmDesktopLarge.add("(min-width: 1440px) and (max-width: 1919px)", () => {
  let tlMindmapDesktopLarge = gsap.timeline({
    scrollTrigger: {
      trigger: heroContainer,
      scrub: 1,
      // markers: true,
      pin: true,
      start: "10% 10%",
      end: "600% bottom",
    },
  });
  funcTimelinesDesktopXLarge(tlMindmapDesktopLarge)
});
mmDesktopXLarge.add("(min-width: 1920px)", () => {
  let tlMindmapDesktopXLarge = gsap.timeline({
    scrollTrigger: {
      trigger: heroContainer,
      scrub: 1,
      markers: true,
      pin: true,
      start: "10% 10%",
      end: "600% bottom",
    },
  });
  funcTimelinesDesktopXLarge(tlMindmapDesktopXLarge)
});
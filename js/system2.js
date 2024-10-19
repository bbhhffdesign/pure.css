
const orbitas = [
  document.getElementById("orbita-1"),
  document.getElementById("orbita-2"),
  document.getElementById("orbita-3"),
  document.getElementById("orbita-4"),
  document.getElementById("orbita-5"),
];

const iconos = [
  document.getElementById("icono-1"),
  document.getElementById("icono-2"),
  document.getElementById("icono-3"),
  document.getElementById("icono-4"),
];

const cajas = [
  document.getElementById("caja_icono1"),
  document.getElementById("caja_icono2"),
  document.getElementById("caja_icono3"),
  document.getElementById("caja_icono4"),
];

const duraciones = [5, 7, 10, 15];
const delays = [0, 1, 1.5, 2];

gsap.config({
  autoSleep: 1,
});

ScrollTrigger.create({
  markers: true,
  trigger: ".orbitas__svg__container",
    start: "-50% 50%",
    end: "150% 50%",
  // start: "top 50%",
  // end: "bottom 50%",
  onEnter: () => {
    iconos.forEach((el) => {
      el.style.willChange = "transform";
    });
    cajas.forEach((el) => {
      el.style.willChange = "transform";
    });
    animaciones.forEach((el) => {
      el.play()
    });
    cajas.forEach((el) => {
      el.style.display = "none"
    })
  },
  onEnterBack: () => {
    iconos.forEach((el) => {
      el.style.willChange = "transform";
    });
    cajas.forEach((el) => {
      el.style.willChange = "transform";
    });
    animaciones.forEach((el) => {
      el.play()
    });
    cajas.forEach((el) => {
      el.style.display = "none"
    })
  },
  onLeave: () => {
    iconos.forEach((el) => {
      el.style.willChange = "auto";
    });
    cajas.forEach((el) => {
      el.style.willChange = "auto";
    });
    animaciones.forEach((el) => {
      el.pause()
    })
  },
  onLeaveBack: () => {
    iconos.forEach((el) => {
      el.style.willChange = "auto";
    });
    cajas.forEach((el) => {
      el.style.willChange = "auto";
    });
    animaciones.forEach((el) => {
      el.pause()
    })
  },
})

const animaciones = []

for (let i = 0; i < iconos.length; i++) {
  gsap.set([iconos[i]], { xPercent: -50, yPercent: -50 });
  gsap.set([cajas[i]], { xPercent: 20, yPercent: -200 });

  const animacion = gsap.to(iconos[i], {
    paused: true,
    repeat: -1,
    ease: "none",
    duration: duraciones[i],
    delay: delays[i],
    motionPath: {
      path: orbitas[i],
      align: orbitas[i],
      start: 0.72,
      end: 1.6,
    },
  });

  const animacionCaja = gsap.to(cajas[i], {
    paused: true,
    repeat: -1,
    ease: "none",
    duration: duraciones[i],
    delay: delays[i],
    motionPath: {
      path: orbitas[i],
      align: orbitas[i],
      start: 0.72,
      end: 1.6,
    },
  });

  animaciones.push(animacion, animacionCaja)

  // const posicionCaja = iconos[i].getBoundingClientRect();
  // const posicionX = posicionCaja.left;
  // const anchoPantalla = window.innerWidth / 2;

  iconos[i].addEventListener("click", () => {
    // Alternar la pausa de las animaciones
    animacion.paused(!animacion.paused());
    animacionCaja.paused(!animacionCaja.paused());

    let display_caja = window.getComputedStyle(cajas[i]).display;

    if (animacion.paused()) {
      if (display_caja === "none") {
        cajas[i].style.display = "block";

        // Obtener la posición del ícono
        const posicionIcono = iconos[i].getBoundingClientRect();
        const anchoPantalla = window.innerWidth / 2;


        if (posicionIcono.left > anchoPantalla) {
          cajas[i].style.left = "-150px"
        } else {
          cajas[i].style.left = "0px"
        }
      }
    } else {
      cajas[i].style.display = "none";
      gsap.set(cajas[i], { x: 0 });  
    }
  });
}

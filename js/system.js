document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  const svgContainer = document.getElementById("orbitas-svg-container");

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

  const duraciones = [10, 20, 30, 40];
  const delays = [0, 6, 8, 0];

  function animarOrbita(icono, caja, orbita, duracion, delay) {
    gsap.set([icono, caja], { xPercent: -50, yPercent: -50 });
    // console.log("ahre")

    const animacion = gsap.to([icono, caja], {
      delay: delay,
      duration: duracion,
      repeat: -1,
      ease: "none",
      motionPath: {
        path: orbita,
        align: orbita,
        start: 0.72,
        end: 1.6,
      },
      paused: true, // Inicia la animación en pausa
    });

    let isPaused = false;
    caja.style.display = "none";

    // Configurar ScrollTrigger
    
    ScrollTrigger.create({
      // markers: true,
      trigger: svgContainer,
      start: "-80% 50%",
      end: "180% 50%",
      onEnter: () => animacion.restart(),
      onLeave: () => animacion.restart() + animacion.pause(),
      onEnterBack: () => animacion.play(),
      onLeaveBack: () => animacion.restart()+ animacion.seek(3) + animacion.pause(),

    });

    function posicionCaja() {
      const rect = icono.getBoundingClientRect();
      const posicionX = rect.left;
      const anchoPantalla = window.innerWidth / 2;


      if (posicionX < anchoPantalla) {
        caja.style.left = "100px";
      } else {
        caja.style.left = "-100px";
      }
    }

    icono.addEventListener("click", () => {
      if (isPaused) {
        animacion.play();
        caja.style.display = "none";
        gsap.to(icono, { scale: 1 }); 
      } else {
        animacion.pause();
        posicionCaja();
        caja.style.display = "block";
        gsap.to(icono, {
          scale: 1.1,
          transformOrigin: "50% 50%"
        }); 
      }
      isPaused = !isPaused;
    });
  }

  const mm = gsap.matchMedia();

  mm.add("(max-width: 767px)", () => {

    for (let i = 0; i < iconos.length; i++) {
      animarOrbita(iconos[i], cajas[i], orbitas[i], duraciones[i], delays[i]);
    }
  });


function cerrarCajas(){
  for (let i = 0; i < iconos.length; i++){
    const posicionX = iconos[i].getBoundingClientRect().x;
    if (posicionX < 0){
      cajas[i].style.display = "none";      
    }
  }
}

setInterval(cerrarCajas, 1000);
// repeticion();


  mm.add("(min-width: 768px)", () => {
    for (let i = 0; i < iconos.length; i++) {
      gsap.killTweensOf([iconos[i], cajas[i]]);
      cajas[i].style.display = "none";
    }
  });
});


        // document.querySelectorAll(".iconosvg").forEach((el) => {
        //   el.style.willChange = "transform";
        //   console.log("icono apli")
        // });
        // document.querySelectorAll(".caja_icono").forEach((el) => {
        //   el.style.willChange = "transform";
        //   console.log("caja apli")
        // });
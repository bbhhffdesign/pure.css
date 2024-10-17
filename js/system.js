document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin);
  
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
  
    const duraciones = [10, 20, 30, 40];
    const delays = [0, 6, 8, 0];
  
    // Array para almacenar las animaciones
    const animaciones = [];
  
    function animarOrbita(icono, orbita, duracion, delay) {
      gsap.set(icono, { xPercent: -50, yPercent: -50 });
  
      // Almacena la animación en una variable y la guarda en el array animaciones
      const animacion = gsap.to(icono, {
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
      });
  
      animaciones.push(animacion);
  
      // Variable para controlar el estado de la animación
      let isPaused = false;
  
      // Agrega el evento de clic para pausar/reanudar la animación de este icono
      icono.addEventListener("click", () => {
        if (isPaused) {
          animacion.play(); // Reanuda la animación
        } else {
          animacion.pause(); // Pausa la animación
        }
        isPaused = !isPaused; // Alterna el estado
      });
    }
  
    // Llama a la función para cada icono y órbita
    for (let i = 0; i < iconos.length; i++) {
      animarOrbita(iconos[i], orbitas[i], duraciones[i], delays[i]);
    }
  });

  //tengo que agregar 
(async () => {
    await loadFull(tsParticles);
  
    await tsParticles.load({
      id: "tsparticles",
      options: {
        particles: {
          number: {
            value: 0, // No partículas iniciales
          },
          color: {
            value: "#0B4599",
          },
          links: {
            color: "#003399",
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce", // Las partículas rebotarán en los bordes
            },
          },
          size: {
            value: { min: 150, max: 200 },
          },
          opacity: {
            value: 1,
          },
        },
        emitters: {
          direction: "none", // Emisión en todas direcciones
          position: {
            x: 50, // Coordenadas en porcentaje para centrar
            y: 50,
          },
          rate: {
            quantity: 3, // Emite una partícula por vez
            delay: 1, // Un pequeño retraso para emitir cada partícula
          },
          autoPlay: true, // Empieza a emitir automáticamente
          life: {
            duration: 1, // Duración del emitter, 1 segundo
            count: 1, // Emitir solo una vez
          },
          particles: {
            move: {
              speed: 1.5,
              outModes: {
                default: "out", // Rebote dentro de los límites de la pantalla
              },
            },
            size: {
              value: { min: 150, max: 200 },
            },
            opacity: {
              value: 1,
            },
          },
        },
      },
    });
  })();

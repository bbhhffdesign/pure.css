
// (async () => {
//     await loadFull(tsParticles);
  
//     await tsParticles.load({
//       id: "tsparticles",
//       options: {
//         particles:{
//             number:{
//                 value:2
//             },
//             color: "#003399",
//             links:{
//                 // enable: true,
//                 size:{
//                     value: 10
//                 },
//                 distance: 100,
//                 color: "#003399",
//             },
//             move:{
//                 enable: true,
//                 speed: 2
//             },
//             size:{
//                 value:{min:150, max:200}
//                 // value:{min:100, max:200}
//                 // value:200
//                         },
//             opacity: {
//                 value: 1
//             }
         
//         }
//       },
//     });
// })
// ();

// (async () => {
//     await loadFull(tsParticles);
  
//     await tsParticles.load({
//       id: "tsparticles",
//       options: {
//         particles: {
//           number: {
//             value: 0, // Desactivar partículas iniciales si solo deseas usar el emitter
//           },
//           color: {
//             value: "#003399",
//           },
//           links: {
//             // distance: 100,
//             color: "#003399",
//           },
//           move: {
//             enable: true,
//             speed: 1,
//           },
//           size: {
//             value: { min: 150, max: 200 },
//           },
//           opacity: {
//             value: 1,
//           },
//         },
//         emitters: {
//           direction: "none", // Emite en todas las direcciones
//           position: {
//             x: 50, // Coordenadas relativas a la pantalla (50% es el centro horizontal)
//             y: 50, // 50% es el centro vertical
//           },
//           rate: {
//             quantity: 1, // Cantidad de partículas emitidas por ciclo
//             delay: 5, // Tiempo entre cada emisión en segundos
//           },
//           size: {
//             width: 0, // Emisión desde un punto específico (ancho y alto 0)
//             height: 0,
//           },
//           particles: {
//             move: {
//               speed: 1, // Velocidad de movimiento de las partículas emitidas
//               direction: "none", // Emite en todas direcciones
//               outModes: {
//                 default: "out", // Las partículas salen de los límites de la pantalla
//               },
//             },
//             size: {
//                 value: { min: 150, max: 200 }
//             },
//             opacity: {
//               value: 1, // Opacidad de las partículas emitidas
//             },
//           },
//         },
//       },
//     });
//   })();

// (async () => {
//     await loadFull(tsParticles);
  
//     await tsParticles.load({
//       id: "tsparticles",
//       options: {
//         particles: {
//           number: {
//             value: 0, // Desactivar partículas iniciales
//           },
//           color: {
//             value: "#003399",
//           },
//           links: {
//             // distance: 100,
//             color: "#003399",
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             random: false,
//             outModes: {
//               default: "bounce", // Hacer que las partículas reboten en los bordes
//             },
//           },
//           size: {
//             value: { min: 150, max: 200 },
//           },
//           opacity: {
//             value: 1,
//           },
//         },
//         emitters: {
//           direction: "none", // Emite en todas las direcciones
//           position: {
//             x: 50, // Coordenadas relativas a la pantalla (50% es el centro horizontal)
//             y: 50, // 50% es el centro vertical
//           },
//           rate: {
//             quantity: 2, // Emitir solo 2 partículas
//             delay: 0, // Emitirlas inmediatamente
//           },
//           autoPlay: true, // Empieza a emitir al cargar
//           life: {
//             duration: 0.1, // Duración muy corta para que se emita solo una vez
//             count: 1, // Emitir una vez y no más
//           },
//           size: {
//             width: 0, // Emisión desde un punto específico (ancho y alto 0)
//             height: 0,
//           },
//           particles: {
//             move: {
//               speed: 1, // Velocidad de movimiento de las partículas emitidas
//               direction: "none", // Movimiento en todas direcciones
//               random: true, // Movimiento predecible
//               outModes: {
//                 default: "bounce", // Las partículas rebotan en los límites
//               },
//             },
//             size: {
//               value: { min: 150, max: 200 },
//             },
//             opacity: {
//               value: 1, // Opacidad de las partículas emitidas
//             },
//           },
//         },
//       },
//     });
//   })();

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
            value: "#003399",
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


// let mm = gsap.matchMedia()
// mm.add("(max-width: 768px)",()=>{

//     const tl = gsap.timeline({
//         scrollTrigger:{
//             trigger: "#hero",
//             markers: true,
//             start: "center center",
//             end: "bottom center",
//             scrub: true
//         }
//     });
    
//     tl
//         .to("#tsparticles", {opacity:0})
//         .to("#tsparticles", {opacity:1})
// })
    
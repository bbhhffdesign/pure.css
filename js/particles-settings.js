// (async () => {
//     await loadFull(tsParticles);
  
//     await tsParticles.load({
//       id: "tsparticles",
//       options: {
//         particles: {
//           number: {
//             value: 0, 
//           },
//           color: {
//             value: "#0B4599",
//           },
//           links: {
//             color: "#003399",
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             outModes: {
//               default: "bounce", // Las partículas rebotarán en los bordes
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
//           direction: "none",
//           position: {
//             x: 50, 
//             y: 50,
//           },
//           rate: {
//             quantity: 3, 
//             delay: 1, 
//           },
//           autoPlay: true, 
//           life: {
//             duration: 1, 
//             count: 1, 
//           },
//           particles: {
//             move: {
//               speed: 1.5,
//               outModes: {
//                 default: "out",
//               },
//             },
//             size: {
//               value: { min: 150, max: 200 },
//             },
//             opacity: {
//               value: 1,
//             },
//           },
//         },
//       },
//     });
//   })();


(async () => {
  await loadFull(tsParticles);

  const numParticles = window.innerWidth >= 1280 ? 5 : 3; // 5 partículas si el ancho es >= 1280px, de lo contrario 3

  await tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        number: {
          value: 0,
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
            default: "bounce",
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
        direction: "none",
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          quantity: numParticles,
          delay: 1,
        },
        autoPlay: true,
        life: {
          duration: 1,
          count: 1,
        },
        particles: {
          move: {
            speed: 1.5,
            outModes: {
              default: "out",
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
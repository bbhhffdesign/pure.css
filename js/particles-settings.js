(async () => {
    await loadFull(tsParticles);
  
    await tsParticles.load({
      id: "tsparticles",
      options: {
        particles:{
            number:{
                value:4
            },
            color: "#003399",
            links:{
                enable: true,
                size:{
                    value: 10
                },
                distance: 100,
                color: "#003399",
            },
            move:{
                enable: true,
                speed: 3
            },
            size:{
                // value:{min:1, max:2}
                value:100
                        },
            opacity: {
                value: 1
            }
         
        }
      },
    });
  })();

// const options = {
//     particles:{
//         number:{
//             value:10
//         },
//         color: "#003399",
//         links:{
//             enable: false,
//             distance: 30,
//             color: "#003399",
//         },
//         move:{
//             enable: true
//         },
//         size:{
//             value:{min:1, max:20}
//         },
//         opacity: {
//             value: 0.8
//         }
     
//     }
// }

// tsParticles.load("bgHero", options)
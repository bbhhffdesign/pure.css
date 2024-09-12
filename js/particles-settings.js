
(async () => {
    await loadFull(tsParticles);
  
    await tsParticles.load({
      id: "tsparticles",
      options: {
        particles:{
            number:{
                value:3
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
                speed: 2
            },
            size:{
                value:{min:50, max:100}
                // value:100
                        },
            opacity: {
                value: 1
            }
         
        }
      },
    });
})
();

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#hero",
        markers: true,
        start: "30% top",
        end: "110% top",
        scrub: true
    }
});

tl
    .to("#tsparticles", {opacity:0})
    .to("#tsparticles", {opacity:1})
    
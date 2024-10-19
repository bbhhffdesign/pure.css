
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

ScrollTrigger.create({
          markers: true,
          trigger: ".orbitas__svg__container",
        //   start: "-80% 50%",
        //   end: "180% 50%",
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () =>{
            iconos.forEach((el) => {
                el.style.willChange = "transform";
              });
            cajas.forEach((el) => {
                el.style.willChange = "transform";
              });
            tl.play()
          },
          onEnterBack: () =>{
            iconos.forEach((el) => {
                el.style.willChange = "transform";
              });
            cajas.forEach((el) => {
                el.style.willChange = "transform";
              });
            tl.play()
          },
          onLeave: () =>{
            iconos.forEach((el) => {
                el.style.willChange = "auto";
              });
            cajas.forEach((el) => {
                el.style.willChange = "auto";
              });
            tl.pause()
          },
          onLeaveBack: () =>{
            iconos.forEach((el) => {
                el.style.willChange = "auto";
              });
            cajas.forEach((el) => {
                el.style.willChange = "auto";
              });
            tl.pause()
          },
})

for ( let i = 0; i < iconos.length; i++){
    gsap.set([iconos[i], cajas[i]], { xPercent: -50, yPercent: -50 });
}


const tl = gsap.timeline({
    paused: true,
})
tl.to(iconos[0],{
    repeat: -1,
    ease: "none",
    duration: 10,
    motionPath: {
      path: orbitas[0],
      align: orbitas[0],
      start: 0.72,
      end: 1.6,
    },
})
.to(iconos[1],{
    repeat: -1,
    ease: "none",
    duration: 10,
    motionPath: {
      path: orbitas[1],
      align: orbitas[1],
      start: 0.72,
      end: 1.6,
    },
}, "<")
.to(iconos[2],{
    repeat: -1,
    ease: "none",
    duration: 10,
    motionPath: {
      path: orbitas[2],
      align: orbitas[2],
      start: 0.72,
      end: 1.6,
    },
}, "<")
.to(iconos[3],{
    repeat: -1,
    ease: "none",
    duration: 10,
    motionPath: {
      path: orbitas[3],
      align: orbitas[3],
      start: 0.72,
      end: 1.6,
    },
}, "<")
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin)
  
    gsap.set("#div",{xPercent: -50, yPercent: -50})
  
  
  
  
    gsap.to("#icono-1",{
      duration: 10,
      delay:0,
      repeat:-1,
      ease: "none",
      motionPath: {
        path: "#orbita-1",
        start: 0.5,
        end: 1.5,
      }})
      
    gsap.to("#icono-2",{
      duration: 15,
      delay:4,
      repeat:-1,
      ease: "none",
      motionPath: {
        path: "#orbita-2",
        start: 0.5,
        end: 1.5,
      }})
      
    gsap.to("#icono-3",{
      duration: 20,
      delay:2,
      repeat:-1,
      ease: "none",
      motionPath: {
        path: "#orbita-3",
        start: 0.5,
        end: 1.5,
      }})
      
    gsap.to("#icono-4",{
      duration: 25,
      delay:2,
      repeat:-1,
      ease: "none",
      motionPath: {
        path: "#orbita-4",
        start: 0.5,
        end: 1.5,
      }})
      
  
  
   });
  
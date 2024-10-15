document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin)

    const icono_1 = document.getElementById("icono-1")
    const icono_2 = document.getElementById("icono-2")
    const icono_3 = document.getElementById("icono-3")
    const icono_4 = document.getElementById("icono-4")

    const caja_icono_1 = document.getElementById("caja_icono")

    let matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 1280px", () =>{
      gsap.set(icono_1,{scale:.5, xPercent: 25, yPercent: 25})
      gsap.set(icono_2,{scale:.5, xPercent: 25, yPercent: 25})
      gsap.set(icono_3,{scale:.5, xPercent: 25, yPercent: 25})
      gsap.set(icono_4,{scale:.5, xPercent: 25, yPercent: 25})

    });
  
  
  
  const tl_algo = gsap.timeline();

  let objeto = gsap.to(caja_icono_1,{
    duration: 10,
    delay:0,
    repeat:-1,
    ease: "none",
    motionPath: {
      path: "#orbita-1",
      start: 0.7,
      end: 1.25,
      align: "#orbita-1",
      offsetX: 100,
      offsetY: -20,
    }});

  
  
    let orbita1 = gsap.to(icono_1,{
      duration: 10,
      delay:0,
      repeat:-1,
      ease: "none",
      motionPath: {
        path: "#orbita-1",
        start: 0.7,
        end: 1.25,
      }});
      
    let orbita2 = gsap.to(icono_2,{
      duration: 15,
      delay:4,
      repeat:-1,
      ease: "none",
      motionPath: {
        path: "#orbita-2",
        start: 0.7,
        end: 1.25,
      }});
      
      let orbita3 = gsap.to(icono_3,{
        duration: 20,
        delay:2,
        repeat:-1,
        ease: "none",
        motionPath: {
          path: "#orbita-3",
        start: 0.7,
        end: 1.25,
      }});

      let orbita4 = gsap.to("#icono-4",{
        duration: 25,
        delay:2,
        repeat:-1,
        ease: "none",
        motionPath: {
          path: "#orbita-4",
          start: 0.7,
          end: 1.25,
        }});
        

        icono_1.addEventListener("mouseenter", function(){
          orbita1.pause();
          objeto.pause();
          caja_icono_1.style.display = "block"

        })
        icono_1.addEventListener("mouseleave", function(){
          orbita1.resume()
           objeto.resume();
          caja_icono_1.style.display = "none"
        })


      icono_3.addEventListener("mouseenter", function(){
        orbita3.pause()
      })
      icono_3.addEventListener("mouseleave", function(){
        orbita3.resume()
      })
      
      
      icono_2.addEventListener("mouseenter", function(){
        orbita2.pause()
      })
      icono_2.addEventListener("mouseleave", function(){
        orbita2.resume()
      })
      icono_4.addEventListener("mouseenter", function(){
        orbita4.pause()
      })
      icono_4.addEventListener("mouseleave", function(){
        orbita4.resume()
      })
      

  
  
   });
  
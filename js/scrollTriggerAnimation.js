const matchMedia = gsap.matchMedia();

//services text
const servicesContainer = document.getElementById("services-container") 
const servicesText = document.getElementById("services-text") 
const servicesText1 = document.getElementById("services-text-1") 
const servicesText2 = document.getElementById("services-text-2") 
const servicesText3 = document.getElementById("services-text-3") 

//servicesBoxes
const servicesBox1 = document.getElementById("services-box-1");
const servicesBox1Content = document.getElementById("services-box-1-content");
const servicesBox2 = document.getElementById("services-box-2");
const servicesBox2Content = document.getElementById("services-box-2-content");
const servicesBox3 = document.getElementById("services-box-3");
const servicesBox3Content = document.getElementById("services-box-3-content");

//gemstoneText
const gemstoneText = document.getElementById("gemstone-text");
const gemstoneText1 = document.getElementById("gemstone-text-1");
const gemstoneText2 = document.getElementById("gemstone-text-2");
const gemstoneText3 = document.getElementById("gemstone-text-3");

//gemstoneSvg
const gemstoneSvg = document.getElementById("gemstoneSvg");
// const gemstoneSvgLenght = gemstoneSvg.getTotalLenght();

// gemstoneSvg.style.strokeDasharray = gemstoneSvgLenght;
// gemstoneSvg.style.strokeDashoffset = gemstoneSvgLenght;

// gsap.to(gemstoneSvg, {duration: 3 ,ease: "power1.inOut", strokeDashoffset:0})


// gsap.set(gemstoneSvg,{
//     strokeDasharray: gemstoneSvgLenght,
//     strokeDashoffset: gemstoneSvgLenght,
// })

// gsap.to(gemstoneSvg,{duration:3, strokeDashoffset:0,ease: "power1.inOut" })

//gemstonePaso
const gemstonePaso1 = document.getElementById("gemstone-paso-1");
const gemstonePaso2 = document.getElementById("gemstone-paso-2");
const gemstonePaso3 = document.getElementById("gemstone-paso-3");

//faqText
const faqText = document.getElementById("faq-text")
const faqText1 = document.getElementById("faq-text-1")
const faqText2 = document.getElementById("faq-text-2")

//faqQuestions
const faqQuestion1 = document.getElementById("faq-question-1");
const faqQuestion2 = document.getElementById("faq-question-2");
const faqQuestion3 = document.getElementById("faq-question-3");
const faqQuestion4 = document.getElementById("faq-question-4");
const faqQuestion5 = document.getElementById("faq-question-5");

//timeLineServices
let tl_servicesText = gsap.timeline({
    scrollTrigger:{
        trigger:servicesContainer,
        // markers: true,
        pin: true,
        scrub: 1,
        start: "top 35%",
        end: "30% 40%"
    }
});
let tl_servicesBoxes = gsap.timeline({
    scrollTrigger:{
        trigger: servicesBox1,
        markers: true,
        // pin: true,
        scrub: 1,
        start: "top bottom",
        end: "300% bottom"
    }
});
// let tl_gemstone = gsap.timeline({
//     scrollTrigger:{
//         trigger:gemstoneText,
//         // markers: true,
//         scrub: 1,
//         start: "-100% center",
//         end: "bottom center"
//     }
// });

//para escritorio las cajas deben quedar escalonadas !!!
tl_servicesText
            .from(servicesText1,{opacity:0})
            .from(servicesText2,{opacity:0})
            .from(servicesText3,{opacity:0})
            .from(servicesBox1Content,{y:100})

tl_servicesBoxes
.from(servicesBox1,{y:200})
.from(servicesBox1Content,{opacity:0})
.from(servicesBox2,{y:200})
.from(servicesBox2Content,{opacity:0})
.from(servicesBox3,{y:200})
.from(servicesBox3Content,{opacity:0})

tl_gemstone
            .from(gemstoneText1,{opacity:0})
            .from(gemstoneText2,{opacity:0})
            .from(gemstoneText3,{opacity:0})
            .from(gemstonePaso1,{opacity:0})
            .from(gemstonePaso2,{opacity:0})
            .from(gemstonePaso3,{opacity:0})

// let gemstoneAnimation = gsap.to(gemstoneSvg, {
//     strokeDashoffset: 0,
//     duration: 20, // Duración fija que desees
//     paused: true // Para controlar manualmente la animación
// });

// ScrollTrigger.create({
//     trigger: gemstoneText,
//     start: "center center",
//     end: "400% center",
//     onEnter: () => gemstoneAnimation.timeScale(1).play(),  // Reproduce la animación cuando se cruza el start hacia abajo
//     onLeaveBack: () => gemstoneAnimation.timeScale(10).reverse(), // Reviértela cuando se cruza el start hacia arriba
//     // markers: true
// });            



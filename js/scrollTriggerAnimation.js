
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
const gemstoneText1_2 = document.getElementById("gemstone-text-1-2");
const gemstoneText1 = document.getElementById("gemstone-text-1");
const gemstoneText1Cursor = document.getElementById("gemstone-text-1-cursor");
const gemstoneText2 = document.getElementById("gemstone-text-2");
const gemstoneText2Cursor = document.getElementById("gemstone-text-2-cursor");
const gemstoneText3 = document.getElementById("gemstone-text-3");
const gemstoneText3Cursor = document.getElementById("gemstone-text-3-cursor");

tl_gemstoneTextMobile = gsap.timeline({
    scrollTrigger:{
        trigger: gemstoneText,
        // markers: true,
        start: "-50% center",
        end: "bottom center"
    }
})

tl_gemstoneTextMobile
.from(gemstoneText1Cursor, {opacity:0})
.to(gemstoneText1, {
    duration: 2,
    text: "Creamos el metodo ",
    ease: "power1.inOut"})
.to(gemstoneText1_2, {
    duration: 1,
    text: "Gemstone: ",
    ease: "power1.inOut"})
.to(gemstoneText1Cursor, {duration:0, display: "none"})
.from(gemstoneText2Cursor, {opacity:0})
.to(gemstoneText2, {
    duration: 5,
    text: "Nuestro objetivo es esculpir &nbsp; tu negocio  encontrado la gema que diferencia tu marca.",
    ease: "linear"})
.to(gemstoneText2Cursor, {duration:0, display: "none"})
.from(gemstoneText3Cursor, {opacity:0})
.to(gemstoneText3,{
    duration: 2,
    text: "¿Como funciona? ",
    ease: "power1.inOut"
})
.to(gemstoneText3Cursor, {duration:0, display: "none"})

//gemstoneSvgs
const gemstoneSvg = document.getElementById("gemstoneSvg");


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


//matchMedias

const matchMediaMobile = gsap.matchMedia();

matchMediaMobile.add("(max-width: 768px)", () =>{
    const tl_servicesTextMobile = gsap.timeline({
        scrollTrigger:{
            trigger: servicesText,
            // markers: true,
            start : "top center",
            end: "bottom center" ,
            onLeave: ()=> tl_servicesTextMobile.stop(),
            // onLeaveBack: ()=> tl_servicesTextMobile.reverse()
        }

    })
    tl_servicesTextMobile
                .from(servicesText1,{y:500, ease: "circ.out"}, "<")
                .from(servicesText2,{y:500, ease: "circ.out", delay: .5}, "<")
                .from(servicesText3,{y:500, ease: "circ.out", delay: .6}, "<")


    const tl_servicesBox1Mobile = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox1,
            // markers: true,
            start: "top center",
            end: "top center",
            onEnter: () => tl_servicesBox1Mobile.play(),
            onEnterBack: () => tl_servicesBox1Mobile.play(),
            // onLeaveBack: () => tl_servicesBox1Mobile.reverse()
        }
    })

    tl_servicesBox1Mobile
                // .from(servicesBox1,{y:"120%", duration:.5, ease: "power2.out"})
                .from(servicesBox1Content,{opacity:0})


    const tl_servicesBox2Mobile = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox2,
            // markers: true,
            start: "top center",
            end: "center center",
            onEnter: () => tl_servicesBox2Mobile.play(),
            onEnterBack: () => tl_servicesBox2Mobile.play(),
            // onLeaveBack: () => tl_servicesBox2Mobile.reverse()
        }
    })

    tl_servicesBox2Mobile
                // .from(servicesBox2,{y:"120%", duration:.5, ease: "power2.out"})
                .from(servicesBox2Content,{y:500})
    
    const tl_servicesBox3Mobile = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox3,
            // markers: true,
            start: "top center",
            end: "center center",
            onEnter: () => tl_servicesBox3Mobile.play(),
            onEnterBack: () => tl_servicesBox3Mobile.play(),
            // onLeaveBack: () => tl_servicesBox3Mobile.reverse()
        }
    })  
    tl_servicesBox3Mobile
                // .from(servicesBox3,{y:"120%", duration:.5, ease: "power2.out"})
                .from(servicesBox3Content,{opacity:0})
});



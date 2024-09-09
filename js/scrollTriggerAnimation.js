const matchMedia = gsap.matchMedia();

//services text
const servicesText = document.getElementById("services-text") 
const servicesText1 = document.getElementById("services-text-1") 
const servicesText2 = document.getElementById("services-text-2") 
const servicesText3 = document.getElementById("services-text-3") 

//servicesBoxes
const servicesBox1 = document.getElementById("services-box-1");
const servicesBox2 = document.getElementById("services-box-2");
const servicesBox3 = document.getElementById("services-box-3");

//gemstoneText
const gemstoneText = document.getElementById("gemstone-text");
const gemstoneText1 = document.getElementById("gemstone-text-1");
const gemstoneText2 = document.getElementById("gemstone-text-2");
const gemstoneText3 = document.getElementById("gemstone-text-3");

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
let tl_services = gsap.timeline({
    scrollTrigger:{
        trigger:servicesText,
        // markers: true,
        scrub: 1,
        start: "-100% center",
        end: "300% center"
    }
});
let tl_gemstone = gsap.timeline({
    scrollTrigger:{
        trigger:gemstoneText,
        markers: true,
        scrub: 1,
        start: "-100% center",
        end: "350% center"
    }
});

//para escritorio las cajas deben quedar escalonadas !!!
tl_services
            .from(servicesText1,{opacity:0})
            .from(servicesText2,{opacity:0})
            .from(servicesText3,{opacity:0})
            .from(servicesBox1,{opacity:0, y:500, scaleX:.8})
            .from(servicesBox2,{opacity:0, y:500, scaleX:.8})
            .from(servicesBox3,{opacity:0, y:500, scaleX:.8});

tl_gemstone
            .from(gemstoneText1,{opacity:0})
            .from(gemstoneText2,{opacity:0})
            .from(gemstoneText3,{opacity:0})
            .from(gemstonePaso1,{opacity:0,x:-500})
            .from(gemstonePaso2,{opacity:0,x:500})
            .from(gemstonePaso3,{opacity:0,x:-500})


           



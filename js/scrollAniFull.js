// const  = document.getElementById()

//mindmap titles 
const mindmapTitles = document.getElementById("mindmap-title-container")
const mindmapTitle = document.getElementById("mindmap-title")
const mindmapSubtitle = document.getElementById("mindmap-subtitle")

//mindmap gem
const mindmapGem = document.getElementById('mindmap-gem');

//services text
const servicesContainer = document.getElementById("services-container") 
const servicesText = document.getElementById("services-text") 
const servicesText1 = document.getElementById("services-text-1") 
const servicesText2 = document.getElementById("services-text-2") 
const servicesText3 = document.getElementById("services-text-3") 
const servicesLogoTitle1 = document.getElementById("services-logo-title-1") 
const servicesLogoTitle2 = document.getElementById("services-logo-title-2") 
const servicesLogoTitle3 = document.getElementById("services-logo-title-3") 

//servicesBoxes
const servicesBox1 = document.getElementById("services-box-1");
const servicesBox1Content = document.getElementById("services-box-1-content");
const servicesBox2 = document.getElementById("services-box-2");
const servicesBox2Content = document.getElementById("services-box-2-content");
const servicesBox3 = document.getElementById("services-box-3");
const servicesBox3Content = document.getElementById("services-box-3-content");

//gemstoneText
const gemstoneTextContainer = document.getElementById("gemstone-text");
const gemstoneText1 = document.getElementById("gemstone-text-1");
const gemstoneText2 = document.getElementById("gemstone-text-2");
const gemstoneText3 = document.getElementById("gemstone-text-3");

//gemstoneSvgs
const gemstoneSvg = document.getElementById("gemstoneSvg");


//gemstonePaso
const paso1title = document.getElementById("paso-1-title");
const paso1 = document.getElementById("gemstone-paso-1");
const paso1Content = document.getElementById("paso-1-content");
const paso2title = document.getElementById("paso-2-title");
const paso2 = document.getElementById("gemstone-paso-2");
const paso2Content = document.getElementById("paso-2-content");
const paso3title = document.getElementById("paso-3-title");
const paso3 = document.getElementById("gemstone-paso-3");
const paso3Content = document.getElementById("paso-3-content");

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

const mm_mobile = gsap.matchMedia();

mm_mobile.add("(max-width: 768px)", () => {

    const tl_mindmapTitles = gsap.timeline({
        scrollTrigger:{
            trigger: mindmapTitles,
            // markers: true,
            start:"top 80%",
            end: "40% 80%",
        }
    })

    tl_mindmapTitles
        .from(mindmapTitle, {y:150, ease: "power4.out", duration: 1})
        .from(mindmapSubtitle, {y:150, ease: "power4.out", duration: 1, delay: .5},"<")

    //aca va la del mindmapGem

    const tl_servicesText = gsap.timeline({
        scrollTrigger:{
            trigger: servicesText,
            // markers: true,
            start:"top 80%",
            end: "bottom 80%"
        }
    }
    )
    
    tl_servicesText
        .from(servicesText1,{opacity: .5, y:150, ease: "power4.out", duration: 1})
        .from(servicesText2,{opacity: .5, y:150, ease: "power4.out", duration: 1, delay:.5}, "<")
        .from(servicesText3,{opacity: 0, ease: "power4.out", duration: 1})

    const tl_servicesBox_1 = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox1,
            // markers: true,
            start:"top 90%",
            end: "top 90%"
        }
    })
    tl_servicesBox_1
        .from(servicesBox1Content,{opacity: .5, y:150, ease: "power4.out", duration: 1})
    
    const tl_servicesBox_2 = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox2,
            // markers: true,
            start:"top 90%",
            end: "top 90%"
        }
    })
    tl_servicesBox_2
        .from(servicesBox2Content,{opacity: .5, y:150, ease: "power4.out", duration: 1})
    
    const tl_servicesBox_3 = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox3,
            // markers: true,
            start:"top 90%",
            end: "top 90%"
        }
    })
    tl_servicesBox_3
        .from(servicesBox3Content,{opacity: .5, y:150, ease: "power4.out", duration: 1})

    const tl_gemstoneText_1 = gsap.timeline({
        scrollTrigger:{
            trigger: gemstoneText1,
            // markers: true,
            start:"-20% 90%",
            end: "bottom 90%"
        }
    })
    tl_gemstoneText_1
        .from(gemstoneText1,{opacity:0, y:80, duration:.5})

    const tl_gemstoneText_2 = gsap.timeline({
        scrollTrigger:{
            trigger: gemstoneText2,
            // markers: true,
            start:"-20% 90%",
            end: "bottom 90%"
        }
    })
    tl_gemstoneText_2
        .from(gemstoneText2,{opacity:0, y:80, duration:.5})

    const tl_gemstoneText_3 = gsap.timeline({
        scrollTrigger:{
            trigger: gemstoneText3,
            // markers: true,
            start:"-20% 90%",
            end: "bottom 90%"
        }
    })
    tl_gemstoneText_3
        .from(gemstoneText3,{opacity:0, y:80, duration:.5})

        //aca va la animacion del gemstone gem xd

    const tl_paso_1 = gsap.timeline({
        scrollTrigger:{
            trigger: paso1,
            markers: true,
            start:"-10% 90%",
            end: "bottom 90%"
        }        
    })
    tl_paso_1
        .from(paso1title, {opacity:0, x:50, ease: "power4.out", duration: 1})
        .from(paso1Content,{opacity:0, ease: "power4.out", duration:3},"<")

    const tl_paso_2 = gsap.timeline({
        scrollTrigger:{
            trigger: paso2,
            markers: true,
            start:"10% 90%",
            end: "bottom 90%"
        }        
    })
    tl_paso_2
        .from(paso2title, {opacity:0, x:-50, ease: "power4.out", duration: 1})
        .from(paso2Content,{opacity:0, ease: "power4.out", duration:3},"<")

    const tl_paso_3 = gsap.timeline({
        scrollTrigger:{
            trigger: paso3,
            markers: true,
            start:"-10% 90%",
            end: "bottom 90%"
        }        
    })
    tl_paso_3
        .from(paso3title, {opacity:0, x:50, ease: "power4.out", duration: 1})
        .from(paso3Content,{opacity:0, ease: "power4.out", duration:3},"<")


})
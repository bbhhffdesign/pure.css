// const  = document.getElementById()


const bgParticles = document.getElementById("tsparticles")

//navbar
const navBar = document.getElementById("navbar");

//hero
const hero  = document.getElementById("hero");
const heroText  = document.getElementById("hero-text");

//mindmap titles 
const mindmapText_1 = document.getElementById("mindmap-text-1")
const mindmapText_2 = document.getElementById("mindmap-text-2")
const mindmapText_3 = document.getElementById("mindmap-text-3")
const mindmapText_4 = document.getElementById("mindmap-text-4")


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
const gemstoneText4 = document.getElementById("gemstone-text-4");
const gemstoneText5 = document.getElementById("gemstone-text-5");
const gemstoneText6 = document.getElementById("gemstone-text-6");

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

//brandsbar
const brandsbarCont_1 = document.getElementById("brands-container1");
const brandsbarCont_2 = document.getElementById("brands-container2");
const brandGm = document.getElementById("logo-gm");
const brandX = document.getElementById("logo-x");
const brandYam = document.getElementById("logo-yam");
const brandSou = document.getElementById("logo-sou");
const brandBel = document.getElementById("logo-bel");
const brandUda = document.getElementById("logo-uda");


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

    // const tl_navbar = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: heroText,
    //         // markers: true,
    //         start:"90% 10%",
    //         end: "110% 10%",
    //         scrub: true
    //     }
    // })
    // tl_navbar
    //     .to(navBar,{y:-100})

    const tl_mindmapText_1 = gsap.timeline({
        scrollTrigger:{
            trigger: mindmapText_1,
            // markers: true,
            start:"-30% 90%",
            end: "-30% 90%",
        }
    })
    tl_mindmapText_1
        .from(mindmapText_1, {y:150, ease: "power4.out", duration: 1})

    const tl_mindmapText_2 = gsap.timeline({
        scrollTrigger:{
            trigger: mindmapText_2,
            // markers: true,
            start:"-30% 90%",
            end: "-30% 90%",
        }
    })
    tl_mindmapText_2
        .from(mindmapText_2, {y:150, ease: "power4.out", duration: 1})

    const tl_mindmapText_3 = gsap.timeline({
        scrollTrigger:{
            trigger: mindmapText_3,
            // markers: true,
            start:"-40% 90%",
            end: "-40% 90%",
        }
    })
    tl_mindmapText_3
        .from(mindmapText_3, {y:150, ease: "power4.out", duration: 1})

    const tl_mindmapText_4 = gsap.timeline({
        scrollTrigger:{
            trigger: mindmapText_4,
            // markers: true,
            start:"-40% 90%",
            end: "-40% 90%",
        }
    })
    tl_mindmapText_4
        .from(mindmapText_4, {y:150, ease: "power4.out", duration: 1})


    //aca va la del mindmapGem

    const tl_servicesText_1 = gsap.timeline({
        scrollTrigger:{
            trigger: servicesText1,
            // markers: true,
            start:"-150 90%",
            end: "bottom 90%"
        }
    }
    )
    tl_servicesText_1
        .from(servicesText1,{opacity: .5, y:150, ease: "power4.out", duration: 1})

    const tl_servicesText_2 = gsap.timeline({
        scrollTrigger:{
            trigger: servicesText2,
            // markers: true,
            start:"-150 90%",
            end: "bottom 90%"
        }
    }
    )
    tl_servicesText_2
        .from(servicesText2,{opacity: .5, y:150, ease: "power4.out", duration: 1})


    // const tl_servicesText_3 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: servicesText3,
    //         markers: true,
    //         pin: true,
    //         start:"center center",
    //         end: "200% center",
    //         scrub: 3,

    //     }
    // })

    tl_servicesText_3
        .from(servicesText3,{opacity: 0, ease: "power4.out", duration: 3})
        .to(bgParticles,{opacity: 0}, "<")
        .to(servicesBox2,{opacity: 0})
        // .from(bgParticles,{opacity: 0})


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

    const tl_gemstoneText_4 = gsap.timeline({
        scrollTrigger:{
            trigger: gemstoneText4,
            // markers: true,
            start:"-20% 90%",
            end: "bottom 90%"
        }
    })
    tl_gemstoneText_4
        .from(gemstoneText4,{opacity:0, y:80, duration:.5})

    const tl_gemstoneText_5 = gsap.timeline({
        scrollTrigger:{
            trigger: gemstoneText5,
            // markers: true,
            start:"-20% 90%",
            end: "bottom 90%"
        }
    })
    tl_gemstoneText_5
        .from(gemstoneText5,{opacity:0, y:80, duration:.5})

    const tl_gemstoneText_6 = gsap.timeline({
        scrollTrigger:{
            trigger: gemstoneText6,
            // markers: true,
            start:"-20% 90%",
            end: "bottom 90%"
        }
    })
    tl_gemstoneText_6
        .from(gemstoneText6,{opacity:0, y:80, duration:.5})

        //aca va la animacion del gemstone gem xd

    // const tl_paso_1 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: paso1,
    //         // markers: true,
    //         start:"-10% 90%",
    //         end: "bottom 90%"
    //     }        
    // })
    // tl_paso_1
    //     .from(paso1title, {opacity:0, x:50, ease: "power4.out", duration: 1})
    //     .from(paso1Content,{opacity:0, ease: "power4.out", duration:3},"<")

    // const tl_paso_2 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: paso2,
    //         // markers: true,
    //         start:"10% 90%",
    //         end: "bottom 90%"
    //     }        
    // })
    // tl_paso_2
    //     .from(paso2title, {opacity:0, x:-50, ease: "power4.out", duration: 1})
    //     .from(paso2Content,{opacity:0, ease: "power4.out", duration:3},"<")

    // const tl_paso_3 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: paso3,
    //         // markers: true,
    //         start:"-10% 90%",
    //         end: "bottom 90%"
    //     }        
    // })
    // tl_paso_3
    //     .from(paso3title, {opacity:0, x:50, ease: "power4.out", duration: 1})
    //     .from(paso3Content,{opacity:0, ease: "power4.out", duration:3},"<")

    // const tl_faqText_1 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:faqText1,
    //         // markers: true,
    //         start:"-40% 90%",
    //         end: "bottom 90%"
    //     }
    // })
    tl_faqText_1
        .from(faqText1,{opacity: 0, y:100, ease: "power4.out", duration: 1})

        
    const tl_faqText_2 = gsap.timeline({
        scrollTrigger:{
            trigger:faqText2,
            // markers: true,
            start:"-40% 90%",
            end: "bottom 90%"
        }
    })
    tl_faqText_2
        .from(faqText2,{opacity: 0, y:100, ease: "power4.out", duration: 1})

    // const tl_brandsbar_1 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: brandsbarCont_1,
    //         // markers: true,
    //         start:"top 90%",
    //         end: "bottom 90%"
    //     }
    // })
    // tl_brandsbar_1
    //     .from(brandsbarCont_1, {opacity: 0, x:-60,  duration: 1.2, ease: "power2.out" })

    // const tl_brandsbar_2 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: brandsbarCont_2,
    //         // markers: true,
    //         start:"top 90%",
    //         end: "bottom 90%"
    //     }
    // })
    // tl_brandsbar_2
    // .from(brandsbarCont_2, {opacity: 0, x:60,  duration: 1.2, ease: "power2.out" })


})
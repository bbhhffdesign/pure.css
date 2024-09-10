
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
            onLeaveBack: ()=> tl_servicesTextMobile.reverse()
        }

    })
    tl_servicesTextMobile
                .from(servicesText1,{y:500, ease: "circ.out"}, "<")
                .from(servicesText2,{y:500, ease: "circ.out"}, "<")
                .from(servicesText3,{y:500, ease: "circ.out"}, "<")

    const tl_servicesBox1Mobile = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox1,
            // markers: true,
            start: "-130% center",
            end: "top center",
            onEnter: () => tl_servicesBox1Mobile.play(),
            onEnterBack: () => tl_servicesBox1Mobile.play(),
            onLeaveBack: () => tl_servicesBox1Mobile.reverse()
        }
    })

    tl_servicesBox1Mobile
                .from(servicesBox1,{y:"120%", duration:1, ease: "power2.out"})
                .from(servicesBox1Content,{opacity:0})


    const tl_servicesBox2Mobile = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox2,
            // markers: true,
            start: "-170% center",
            end: "center center",
            onEnter: () => tl_servicesBox2Mobile.play(),
            onEnterBack: () => tl_servicesBox2Mobile.play(),
            onLeaveBack: () => tl_servicesBox2Mobile.reverse()
        }
    })

    tl_servicesBox2Mobile
                .from(servicesBox2,{y:"120%", duration:1, ease: "power2.out"})
                .from(servicesBox2Content,{opacity:0})
    
    const tl_servicesBox3Mobile = gsap.timeline({
        scrollTrigger:{
            trigger: servicesBox3,
            markers: true,
            start: "-170% center",
            end: "center center",
            onEnter: () => tl_servicesBox3Mobile.play(),
            onEnterBack: () => tl_servicesBox3Mobile.play(),
            onLeaveBack: () => tl_servicesBox3Mobile.reverse()
        }
    })  
    tl_servicesBox3Mobile
                .from(servicesBox3,{y:"120%", duration:1, ease: "power2.out"})
                .from(servicesBox3Content,{opacity:0})
});


// //timeLineServices
// let tl_servicesText = gsap.timeline({
//     scrollTrigger:{
//         trigger:servicesContainer,
//         // markers: true,
//         pin: true,
//         scrub: 1,
//         start: "top 35%",
//         end: "30% 40%",
//         // invalidateOnRefresh: true
//     }
// });
// let tl_servicesBoxes = gsap.timeline({
//     scrollTrigger:{
//         trigger: servicesText,
//         markers: true,   
//         // pin: true,
//         scrub: 1,
//         start: "bottom center",
//         end: "400% center",
//         // invalidateOnRefresh: true
//     }
// });

// tl_servicesText
//             .from(servicesText1,{opacity:0})
//             .from(servicesText2,{opacity:0})
//             .from(servicesText3,{opacity:0});


// tl_servicesBoxes
// .from(servicesBox1,{y:"100%"})
// .from(servicesBox1Content,{opacity:0})
// .from(servicesBox2,{y:"100%"})
// .from(servicesBox2Content,{opacity:0})
// .from(servicesBox3,{y:"100%"})
// .from(servicesBox3Content,{opacity:0})

// tl_gemstone
//             .from(gemstoneText1,{opacity:0})
//             .from(gemstoneText2,{opacity:0})
//             .from(gemstoneText3,{opacity:0})
//             .from(gemstonePaso1,{opacity:0})
//             .from(gemstonePaso2,{opacity:0})
//             .from(gemstonePaso3,{opacity:0})

      



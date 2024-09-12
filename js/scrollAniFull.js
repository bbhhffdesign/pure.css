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
const gemstoneText = document.getElementById("gemstone-text");
const gemstoneText1_2 = document.getElementById("gemstone-text-1-2");
const gemstoneText1 = document.getElementById("gemstone-text-1");
const gemstoneText1Cursor = document.getElementById("gemstone-text-1-cursor");
const gemstoneText2 = document.getElementById("gemstone-text-2");
const gemstoneText2Cursor = document.getElementById("gemstone-text-2-cursor");
const gemstoneText3 = document.getElementById("gemstone-text-3");
const gemstoneText3Cursor = document.getElementById("gemstone-text-3-cursor");

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

const mm_mobile = gsap.matchMedia();

mm_mobile.add("(max-width: 768px)", () => {

    const tl_mindmapTitles = gsap.timeline({
        scrollTrigger:{
            trigger: mindmapTitles,
            markers: true,
            start:"top 80%",
            end: "40% 80%",
            scrub: 3
        }
    })

    tl_mindmapTitles
        .from(mindmapTitle, {y:150, ease: "power4.out", duration: 1})
        .from(mindmapSubtitle, {y:150, ease: "power4.out", duration: 1})

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
        .from(servicesText2,{opacity: .5, y:150, ease: "power4.out", duration: 1},"<")

})
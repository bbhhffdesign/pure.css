// const  = document.getElementById()

const bgParticles = document.getElementById("tsparticles");

//navbar
const navBar = document.getElementById("navbar");

//themeswitch2

const themeSwitch2 = document.getElementById("themeSwitch2");

//hero
const hero = document.getElementById("hero");
const heroText = document.getElementById("hero-text");

//mindmap titles
const mindmapText_1 = document.getElementById("mindmap-text-1");
const mindmapText_2 = document.getElementById("mindmap-text-2");
const mindmapText_3 = document.getElementById("mindmap-text-3");
const mindmapText_4 = document.getElementById("mindmap-text-4");
const mindmapCta = document.getElementById("mindmap-cta");

//mindmap gem
const mindmapGem = document.getElementById("mindmap-gem");

//services text
const servicesContainer = document.getElementById("services-container");
const servicesText = document.getElementById("services-text");
const servicesText1 = document.getElementById("services-text-1");
const servicesText2 = document.getElementById("services-text-2");
const servicesText3 = document.getElementById("services-text-3");
const servicesLogoTitle1 = document.getElementById("services-logo-title-1");
const servicesLogo1 = document.getElementById("oferta-logo");
const servicesLogoTitle2 = document.getElementById("services-logo-title-2");
const servicesLogo2 = document.getElementById("comunicacion-logo");
const servicesLogoTitle3 = document.getElementById("services-logo-title-3");
const servicesLogo3 = document.getElementById("marca-logo");

//servicesBoxes
const servicesBox1 = document.getElementById("services-box-1");
const servicesBox1Content = document.getElementById("services-box-1-content");
const servicesBox2 = document.getElementById("services-box-2");
const servicesBox2Content = document.getElementById("services-box-2-content");
const servicesBox3 = document.getElementById("services-box-3");
const servicesBox3Content = document.getElementById("services-box-3-content");

//gemstoneText
const gemstoneSection = document.getElementById("gemstone-section");
const gemstoneTextContainer = document.getElementById("gemstone-text");
const gemstoneText1 = document.getElementById("gemstone-text-1");
const gemstoneText1Container = document.getElementById(
  "gemstone-text-1-container"
);
const gemstoneText2 = document.getElementById("gemstone-text-2");
const gemstoneText3 = document.getElementById("gemstone-text-3");
const gemstoneText4 = document.getElementById("gemstone-text-4");
const gemstoneText5 = document.getElementById("gemstone-text-5");
const gemstoneText6 = document.getElementById("gemstone-text-6");

//gemstoneSvgs
const gemstoneBg = document.getElementById("gemstone-bg-path");
const gemstoneBg_path = gemstoneBg.getTotalLength();
gemstoneBg.style.strokeDashoffset = gemstoneBg_path;
gemstoneBg.style.strokeDasharray = gemstoneBg_path;

//gemstone paso
const pasoNumber1 = document.getElementById("paso-number-1");
const pasoText1 = document.getElementById("paso-text-1");
const pasoBox1 = document.getElementById("paso-1-content");
const pasoNumber2 = document.getElementById("paso-number-2");
const pasoText2 = document.getElementById("paso-text-2");
const pasoBox2 = document.getElementById("paso-2-content");
const pasoNumber3 = document.getElementById("paso-number-3");
const pasoText3 = document.getElementById("paso-text-3");
const pasoBox3 = document.getElementById("paso-3-content");

//gemstone cta
const ctaGemstone = document.getElementById("cta-gemstone")


//brandsbar
const brandsbarCont_1 = document.getElementById("brands-container1");
const brandsbarCont_2 = document.getElementById("brands-container2");
const brandGm = document.getElementById("logo-gm");
const brandX = document.getElementById("logo-x");
const brandYam = document.getElementById("logo-yam");
const brandSou = document.getElementById("logo-sou");
const brandBel = document.getElementById("logo-bel");
const brandUda = document.getElementById("logo-uda");

//testimonials
const testimonial_1 = document.getElementById("testimonial-1");
const testimonial_2 = document.getElementById("testimonial-2");
const testimonial_3 = document.getElementById("testimonial-3");

//ctaemail
const ctaemail = document.getElementById("cta-email");
const ctaemail_text = document.getElementById("input-email-text");

//faqText
const faqText = document.getElementById("faq-text");
const faqText1 = document.getElementById("faq-text-1");
const faqText2 = document.getElementById("faq-text-2");

//faqQuestions
const faqQuestion1 = document.getElementById("faq-question-1");
const faqQuestion2 = document.getElementById("faq-question-2");
const faqQuestion3 = document.getElementById("faq-question-3");
const faqQuestion4 = document.getElementById("faq-question-4");
const faqQuestion5 = document.getElementById("faq-question-5");

const mm_mobile = gsap.matchMedia();

mm_mobile.add("(max-width: 1920px)", () => {
  const tl_navbar = gsap.timeline({
    scrollTrigger: {
      trigger: heroText,
      // markers: true,
      start: "70% 10%",
      end: "110% 10%",
      scrub: true,
    },
  });
  tl_navbar
    .to(navBar, { y: "-100%" })
    .from(themeSwitch2, { opacity: 0, zIndex: "auto" }, "<");

  const tl_mindmapText_1 = gsap.timeline({
    scrollTrigger: {
      trigger: mindmapText_1,
      // markers: true,
      start: "-30% 90%",
      end: "-30% 90%",
    },
  });
  tl_mindmapText_1.from(mindmapText_1, {
    y: 150,
    ease: "power4.out",
    duration: 1,
  });

  const tl_mindmapText_2 = gsap.timeline({
    scrollTrigger: {
      trigger: mindmapText_2,
      // markers: true,
      start: "-30% 90%",
      end: "-30% 90%",
    },
  });
  tl_mindmapText_2.from(mindmapText_2, {
    y: 150,
    ease: "power4.out",
    duration: 1,
  });

  const tl_mindmapText_3 = gsap.timeline({
    scrollTrigger: {
      trigger: mindmapText_3,
      // markers: true,
      start: "-40% 90%",
      end: "-40% 90%",
    },
  });
  tl_mindmapText_3.from(mindmapText_3, {
    y: 150,
    ease: "power4.out",
    duration: 1,
  });

  const tl_mindmapText_4 = gsap.timeline({
    scrollTrigger: {
      trigger: mindmapText_4,
      // markers: true,
      start: "-40% 90%",
      end: "-40% 90%",
    },
  });
  tl_mindmapText_4.from(mindmapText_4, {
    y: 150,
    ease: "power4.out",
    duration: 1,
  });

  const tl_mindmapCta = gsap.timeline({
    scrollTrigger: {
      trigger: mindmapCta,
      // markers: true,
      start: "-50% 100%",
      end: "-50% 100%",
    },
  });
  tl_mindmapCta.from(mindmapCta, { y: 150, ease: "power4.out", duration: 1 });

  //aca va la del mindmapGem

  const tl_servicesText_1 = gsap.timeline({
    scrollTrigger: {
      trigger: servicesText1,
      // markers: true,
      start: "-150 90%",
      end: "bottom 90%",
    },
  });
  tl_servicesText_1.from(servicesText1, {
    opacity: 0.5,
    y: 150,
    ease: "power4.out",
    duration: 1,
  });

  const tl_servicesText_2 = gsap.timeline({
    scrollTrigger: {
      trigger: servicesText2,
      // markers: true,
      start: "-150 90%",
      end: "bottom 90%",
    },
  });
  tl_servicesText_2.from(servicesText2, {
    opacity: 0.5,
    y: 150,
    ease: "power4.out",
    duration: 1,
  });

  const tl_servicesText_3 = gsap.timeline({
    scrollTrigger: {
      trigger: servicesText3,
      // markers: true,
      start: "top 90%",
      end: "top 90%",
    },
  });
  tl_servicesText_3.from(servicesText3, {
    opacity: 0.5,
    y: 150,
    ease: "power4.out",
    duration: 1,
  });

  const tl_servicesBox_1 = gsap.timeline({
    scrollTrigger: {
      trigger: servicesBox1,
      // markers: true,
      start: "top 90%",
      end: "top 90%",
    },
  });

  tl_servicesBox_1
    .from(servicesBox1Content, {
      opacity: 0.5,
      y: 150,
      ease: "power4.out",
      duration: 1,
    })
    .from(servicesLogo1, { fill: "#c6c6c6", duration: 2, ease: "power4.out" })
    .to(servicesLogo1, { fill: "var(--colorBg)", duration: 1 });

  const tl_servicesBox_2 = gsap.timeline({
    scrollTrigger: {
      trigger: servicesBox2,
      // markers: true,
      start: "top 90%",
      end: "top 90%",
    },
  });
  tl_servicesBox_2
    .from(servicesBox2Content, {
      opacity: 0.5,
      y: 150,
      ease: "power4.out",
      duration: 1,
    })
    .from(servicesLogo2, { fill: "#c6c6c6", duration: 3, ease: "power4.out" })
    .to(servicesLogo2, { fill: "var(--colorBg)", duration: 1 });

  const tl_servicesBox_3 = gsap.timeline({
    scrollTrigger: {
      trigger: servicesBox3,
      // markers: true,
      start: "top 90%",
      end: "top 90%",
    },
  });
  tl_servicesBox_3
    .from(servicesBox3Content, {
      opacity: 0.5,
      y: 150,
      ease: "power4.out",
      duration: 1,
    })
    .from(servicesLogo3, { fill: "#c6c6c6", duration: 3, ease: "power4.out" })
    .to(servicesLogo3, { fill: "var(--colorBg)", duration: 1 });

  // tl_gemstoneText_1
  //     .from(gemstoneText1,{opacity:0, y:80,  duration:.5})

  const tl_gemstoneText_1 = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneText1Container,
      // markers: true,
      pin: true,
      start: "center center",
      end: "200% center",
      scrub: 1,
    },
  });

  tl_gemstoneText_1
    .from(gemstoneText1, { opacity: 0, ease: "power4.out", duration: 3 })
    .to(bgParticles, { opacity: 0 }, "<")
    .to(gemstoneSection, { background: "var(--colorBg)" })
    // .to(bgParticles, { opacity: 1 });

  const tl_gemstoneBg = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneBg,
      // markers:true,
      start: "400% 40%",
      end: "400% 40%",
      onEnter: () =>{
        tl_gemstoneBg.play()
      },
      onEnterBack: ()=>{
        tl_gemstoneBg.reverse()
        tl_gemstoneBg.stop()
      }
    },
  });

  tl_gemstoneBg.to(gemstoneBg, { strokeDashoffset: 0, duration: 45 });

  const tl_gemstoneText_2 = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneText2,
      // markers: true,
      start: "-20% 90%",
      end: "bottom 90%",
    },
  });
  tl_gemstoneText_2.from(gemstoneText2, { opacity: 0, y: 80, duration: 0.5 });

  const tl_gemstoneText_3 = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneText3,
      // markers: true,
      start: "-20% 90%",
      end: "bottom 90%",
    },
  });
  tl_gemstoneText_3.from(gemstoneText3, { opacity: 0, y: 80, duration: 0.5 });

  const tl_gemstoneText_4 = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneText4,
      // markers: true,
      start: "-20% 90%",
      end: "bottom 90%",
    },
  });
  tl_gemstoneText_4.from(gemstoneText4, { opacity: 0, y: 80, duration: 0.5 });

  const tl_paso1 = gsap.timeline({
    scrollTrigger: {
      trigger: pasoBox1,
      // markers: true,
      start: "top 80%",
      end: "bottom 80%",
      // onEnter: () =>tl_paso1.play(),
      // onEnterBack: () =>tl_paso1.reverse()
    },
  });
  tl_paso1
    .from(pasoNumber1, { scale: 0.8, opacity: 0, y: 80, duration: 0.8 })
    .from(pasoText1, { opacity: 0, y: 80, duration: 0.5 }, "<");

  const tl_paso2 = gsap.timeline({
    scrollTrigger: {
      trigger: pasoBox2,
      // markers: true,
      start: "top 80%",
      end: "bottom 80%",
      // onEnter: () =>tl_paso2.play(),
      // onEnterBack: () =>tl_paso2.reverse()
    },
  });
  tl_paso2
    .from(pasoNumber2, { scale: 0.8, opacity: 0, y: 80, duration: 0.5 })
    .from(pasoText2, { opacity: 0, y: 80, duration: 0.8 }, "<");

  const tl_paso3 = gsap.timeline({
    scrollTrigger: {
      trigger: pasoBox3,
      // markers: true,
      start: "top 80%",
      end: "bottom 80%",
      // onEnter: () =>tl_paso3.play(),
      // onEnterBack: () =>tl_paso3.reverse()
    },
  });
  tl_paso3
    .from(pasoNumber3, { scale: 0.8, opacity: 0, y: 80, duration: 0.8 })
    .from(pasoText3, { opacity: 0, y: 80, duration: 0.5 }, "<");


    const tl_ctaGemstone = gsap.timeline({
      scrollTrigger:{
        trigger: ctaGemstone,
        // markers:true,
        start: "top 90%",
        end: "bottom 90%"
      }
    })
    tl_ctaGemstone.from(ctaGemstone,{opacity:0, y: 100})

    const tl_testimonial1 = gsap.timeline({
      scrollTrigger: {
        trigger: testimonial_1,
        // markers: true,
        start: "-50% 80%",
        end: "bottom 80%",
      },
    });
    tl_testimonial1.from(testimonial_1, { y: 100, opacity: 0, duration: 0.8 });
    
    const tl_testimonial2 = gsap.timeline({
      scrollTrigger: {
        trigger: testimonial_2,
        // markers: true,
        start: "-50% 80%",
        end: "bottom 80%",
      },
    });
    tl_testimonial2.from(testimonial_2, { y: 100, opacity: 0, duration: 0.8 });
    
    const tl_testimonial3 = gsap.timeline({
      scrollTrigger: {
        trigger: testimonial_3,
        //   markers: true,
        start: "-50% 80%",
        end: "bottom 80%",
      },
    });
    tl_testimonial3.from(testimonial_3, { y: 100, opacity: 0, duration: 0.8 });
    
    const tl_ctaemail = gsap.timeline({
      scrollTrigger: {
        trigger: ctaemail,
        // markers: true,
        start: "-200% 80%",
        end: "bottom 80%",
      },
    });
    tl_ctaemail
      .from(ctaemail, { y: 200, opacity: 0, duration: 0.6 })
      .from(ctaemail_text, { y: 200, opacity: 0, duration: 0.6 }, "<");
    
});

const mm_tablet = gsap.matchMedia();

mm_tablet.add("(min-width: 600px)", () => {

  const tl_gemstoneBg = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneBg,
      // markers:true,
      start: "500% 40%",
      end: "900% 40%",
    },
  });

  tl_gemstoneBg.to(gemstoneBg, { strokeDashoffset: 0, duration: 45 });

  
});
mm_tablet.add("(min-width: 768px)", () => {

  const tl_gemstoneBg = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneBg,
      // markers:true,
      start: "450% 40%",
      end: "900% 40%",
    },
  });

  tl_gemstoneBg.to(gemstoneBg, { strokeDashoffset: 0, duration: 45 });

  
});
mm_tablet.add("(min-width: 1440px)", () => {

  const tl_gemstoneBg = gsap.timeline({
    scrollTrigger: {
      trigger: gemstoneBg,
      // markers:true,
      start: "350% 40%",
      end: "900% 40%",
    },
  });

  tl_gemstoneBg.to(gemstoneBg, { strokeDashoffset: 0, duration: 45 });

  
});
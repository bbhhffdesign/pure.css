//form containers
const inputA_container = document.getElementById("input_a_container")
const inputB_container = document.getElementById("input_b_container")
const inputC_container = document.getElementById("input_a_container")
const inputD_container = document.getElementById("input_b_container")

//svg bg paths
const gall = document.getElementById("gall")
const gall_path = gall.getTotalLength();
gall.style.strokeDashoffset = gall_path;
gall.style.strokeDasharray = gall_path;

const bordeExt = document.getElementById("borde-ext");
const bordeExt_path = bordeExt.getTotalLength();
bordeExt.style.strokeDashoffset = bordeExt_path;
bordeExt.style.strokeDasharray = bordeExt_path;


const bordeInt = document.getElementById("borde-int")
const bordeInt_path= bordeInt.getTotalLength();
bordeInt.style.strokeDashoffset = bordeInt_path;
bordeInt.style.strokeDasharray = bordeInt_path;

const gemstoneSup = document.getElementById("gemstone-sup")
const gemstoneSup_path= gemstoneSup.getTotalLength();
gemstoneSup.style.strokeDashoffset = gemstoneSup_path;
gemstoneSup.style.strokeDasharray = gemstoneSup_path;

const gemstoneInf = document.getElementById("gemstone-inf")
const gemstoneInf_path= gemstoneInf.getTotalLength();
gemstoneInf.style.strokeDashoffset = gemstoneInf_path;
gemstoneInf.style.strokeDasharray = gemstoneInf_path;


// gsap.to(inputA_container,{x:"-100%", duration: 1.5, ease: "expo.out", delay: 2})
// gsap.to(inputB_container,{x:"-100%", duration: 1.5, ease: "expo.out"}, "<")

const tl_gemstoneBg = gsap.timeline();

tl_gemstoneBg
        .to(bordeInt,{strokeDashoffset:0, duration:3, delay:0})
        .to(bordeExt,{strokeDashoffset:0, duration:3, delay:1},"<")
        // .to(gall,{strokeDashoffset:0, duration: 5},"<")
        // .to(gall,{strokeDashoffset: gall_path, duration:3})
        .to(gemstoneInf,{strokeDashoffset:0, duration:15})
        // .to(gemstoneSup,{strokeDashoffset:0, duration:},"<")
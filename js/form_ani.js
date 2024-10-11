//form containers
const inputA_container = document.getElementById("input_a_container");
const inputA_next = document.getElementById("input_a_next");

const inputB_container = document.getElementById("input_b_container");
const inputB_back = document.getElementById("input_b_back");
const inputB_next = document.getElementById("input_b_next");

const inputC_container = document.getElementById("input_c_container");
const inputC_back = document.getElementById("input_c_back");
const inputC_next = document.getElementById("input_c_next");

const inputD_container = document.getElementById("input_d_container");
const inputD_back = document.getElementById("input_d_back");
const inputD_next = document.getElementById("input_d_next");

const inputE_container = document.getElementById("input_e_container");
const inputE_back = document.getElementById("input_e_back");
const inputE_next = document.getElementById("input_e_next");

//timelines next
const tl_inputA_next = gsap.timeline({ paused: true });
tl_inputA_next
  .to(inputA_container, { x: "-100%" })
  .to(inputB_container, { x: "-100%" }, "<");

const tl_inputB_next = gsap.timeline({ paused: true });
tl_inputB_next
  .to(inputB_container, { x: "-200%" })
  .to(inputC_container, { x: "-200%" }, "<");

const tl_inputC_next = gsap.timeline({ paused: true });
tl_inputC_next
  .to(inputC_container, { x: "-300%" })
  .to(inputD_container, { x: "-300%" }, "<");

const tl_inputD_next = gsap.timeline({ paused: true });
tl_inputD_next.to(inputD_container, { x: "-400%" });
tl_inputD_next.to(inputE_container, { x: "-400%" }, "<");

const tl_inputE_next = gsap.timeline({ paused: true });
tl_inputE_next.to(inputE_container, { x: "-500%" });

//timelines back
const tl_inputB_back = gsap.timeline({ paused: true });
tl_inputB_back
  .to(inputB_container, { x: "0%" })
  .to(inputA_container, { x: "0%" }, "<");

const tl_inputC_back = gsap.timeline({ paused: true });
tl_inputC_back
  .to(inputC_container, { x: "-100%" })
  .to(inputB_container, { x: "-100%" }, "<");

const tl_inputD_back = gsap.timeline({ paused: true });
tl_inputD_back
  .to(inputD_container, { x: "-200%" })
  .to(inputC_container, { x: "-200%" }, "<");

const tl_inputE_back = gsap.timeline({ paused: true });
tl_inputE_back
  .to(inputE_container, { x: "-300%" })
  .to(inputD_container, { x: "-300%" }, "<");

//eventlisteners
inputA_next.addEventListener("click", () => {
  tl_inputA_next.restart();
  console.log("aaaaa");
});
inputB_next.addEventListener("click", () => {
  tl_inputB_next.restart();
});
inputC_next.addEventListener("click", () => {
  tl_inputC_next.restart();
});
inputD_next.addEventListener("click", () => {
  tl_inputD_next.restart();
});
inputE_next.addEventListener("click", () => {
  tl_inputE_next.restart();
});

inputB_back.addEventListener("click", () => {
  tl_inputB_back.restart();
});
inputC_back.addEventListener("click", () => {
  tl_inputC_back.restart();
});
inputD_back.addEventListener("click", () => {
  tl_inputD_back.restart();
});
inputE_back.addEventListener("click", () => {
  tl_inputE_back.restart();
});

//svg bg paths
const gall = document.getElementById("gall");
const gall_path = gall.getTotalLength();
gall.style.strokeDashoffset = gall_path;
gall.style.strokeDasharray = gall_path;

const bordeExt = document.getElementById("borde-ext");
const bordeExt_path = bordeExt.getTotalLength();
bordeExt.style.strokeDashoffset = bordeExt_path;
bordeExt.style.strokeDasharray = bordeExt_path;

const bordeInt = document.getElementById("borde-int");
const bordeInt_path = bordeInt.getTotalLength();
bordeInt.style.strokeDashoffset = bordeInt_path;
bordeInt.style.strokeDasharray = bordeInt_path;

const gemstoneSup = document.getElementById("gemstone-sup");
const gemstoneSup_path = gemstoneSup.getTotalLength();
gemstoneSup.style.strokeDashoffset = gemstoneSup_path;
gemstoneSup.style.strokeDasharray = gemstoneSup_path;

const gemstoneInf = document.getElementById("gemstone-inf");
const gemstoneInf_path = gemstoneInf.getTotalLength();
gemstoneInf.style.strokeDashoffset = gemstoneInf_path;
gemstoneInf.style.strokeDasharray = gemstoneInf_path;

const tl_gemstoneBg = gsap.timeline({ repeat: -1, yoyo: true });

tl_gemstoneBg
  .to(bordeInt, { strokeDashoffset: 0, duration: 3, delay: 1 })
  .to(bordeExt, { strokeDashoffset: 0, duration: 3, delay: 1 }, "<")

  .to(gall, { strokeDashoffset: 0, duration: 6 })
  .to(gall, {
    strokeDashoffset: gall_path,
    duration: 3,
    delay: 1,
    opacity: 0.5,
  })
  .to(gemstoneInf, { strokeDashoffset: 0, duration: 15 })
  .to(gemstoneSup, { strokeDashoffset: 0, duration: 10 }, "<")
  .to(gemstoneInf, { strokeDashoffset: gemstoneInf_path, duration: 5 })
  .to(gemstoneSup, { strokeDashoffset: gemstoneSup_path, duration: 5 }, "<");

//error
const error_container = document.getElementById("input_error_container");
const error_return = document.getElementById("input_error_return");
const error_text = document.getElementById("input_error_text");

//form containers
const inputA = document.getElementById("input_a"); 
const inputA_container = document.getElementById("input_a_container");
const inputA_next = document.getElementById("input_a_next");
const inputA_back = document.getElementById("input_a_back");

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

const inputF_container = document.getElementById("input_f_container");
const form_container = document.getElementById("form_container");

//display information check
const display_name = document.getElementById("display_name");
const display_email = document.getElementById("display_email");
const display_brand = document.getElementById("display_brand");
const display_social = document.getElementById("display_social");

//HOME
inputA_back.addEventListener("click", () => {
  console.log("aaa");
  window.location.href = "index.html";
});

//timelines next
const tl_inputA_next = gsap.timeline({ paused: true });
tl_inputA_next
  .to(inputA_container, { x: "-200%" })
  .to(inputB_container, { x: "-200%" }, "<");

const tl_inputA_error = gsap.timeline({ paused: true });
tl_inputA_error
  .to(inputA_container, { x: "0%" })
  .to(error_container, { x: "0%" });

const tl_inputB_next = gsap.timeline({ paused: true });
tl_inputB_next
  .to(inputB_container, { x: "-300%" })
  .to(inputC_container, { x: "-300%" }, "<");

const tl_inputB_error = gsap.timeline({ paused: true });
tl_inputB_error
  .to(inputB_container, { x: "-300" })
  .to(error_container, { x: "0%" });

const tl_inputC_next = gsap.timeline({ paused: true });
tl_inputC_next
  .to(inputC_container, { x: "-400%" })
  .to(inputD_container, { x: "-400%" }, "<");

const tl_inputC_error = gsap.timeline({ paused: true });
tl_inputC_error
  .to(inputC_container, { x: "-200%" })
  .to(error_container, { x: "0%" });

const tl_inputD_next = gsap.timeline({ paused: true });
tl_inputD_next.to(inputD_container, { x: "-500%" });
tl_inputD_next.to(inputE_container, { x: "-500%" }, "<");

const tl_inputD_error = gsap.timeline({ paused: true });
tl_inputD_error
  .to(inputD_container, { x: "-300%" })
  .to(error_container, { x: "0%" });


const tl_inputE_next = gsap.timeline({ paused: true });
tl_inputE_next
  .to(inputE_container, { x: "-600%" })
  .to(inputF_container, { x: "-600%" })
  .to(form_container, { y: "100%", delay: 3, duration: 2 });


//timelines back
const tl_inputB_back = gsap.timeline({ paused: true });
tl_inputB_back
  .to(inputB_container, { x: "-100%" })
  .to(inputA_container, { x: "-100%" }, "<");

const tl_inputC_back = gsap.timeline({ paused: true });
tl_inputC_back
  .to(inputC_container, { x: "-200%" })
  .to(inputB_container, { x: "-200%" }, "<");

const tl_inputD_back = gsap.timeline({ paused: true });
tl_inputD_back
  .to(inputD_container, { x: "-300%" })
  .to(inputC_container, { x: "-300%" }, "<");

const tl_inputE_back = gsap.timeline({ paused: true });
tl_inputE_back
  .to(inputE_container, { x: "-400%" })
  .to(inputD_container, { x: "-400%" }, "<");


//eventlisteners
inputA_next.addEventListener("click", () => {
  let name = String(document.getElementById("input_a").value).toLowerCase();

  if (name.length < 10) {
    error_text.innerText = "Tu nombre debe contener mas de 10 caracteres.";
  
    // tl_inputA_error.restart();
    gsap.to(inputA_container,{x:"+=7", yoyo:true, repeat:3 ,duration: .03});
    inputA.value = "Error"
    inputA.style.borderBottom = "1px solid red"

    error_return.addEventListener("click", () => {
      // tl_inputA_error.reverse();
    });
  } else {
    display_name.innerText = name;
    console.log(name);
    tl_inputA_next.restart();
  }
});

inputB_next.addEventListener("click", () => {
  let email = String(document.getElementById("input_b").value).toLowerCase();

  if (email.length < 15 || !email.includes("@") || !email.includes(".com")) {
    error_text.innerText = "El email no es válido, o el campo está vacío.";
    tl_inputB_error.restart();

    error_return.addEventListener("click", () => {
      tl_inputB_error.reverse();
    });
  } else {
    display_email.innerText = email;
    console.log(email);
    tl_inputB_next.restart();
  }
});

inputC_next.addEventListener("click", () => {
  let brand = String(document.getElementById("input_c").value).toLowerCase();

  if (!brand) {
    error_text.innerText = "El campo no puede estar vacío";
    tl_inputC_error.restart();

    error_return.addEventListener("click", () => {
      tl_inputC_error.reverse();
    });
  } else {
    display_brand.innerText = brand;
    console.log(brand);
    tl_inputC_next.restart();
  }
});

inputD_next.addEventListener("click", () => {
  let social = String(document.getElementById("input_d").value);

  if (!social || !social.includes("/") || !social.includes(".com")) {
    error_text.innerText =
      "No es una red social válida, o el campo está vacío.";
    tl_inputD_error.restart();

    error_return.addEventListener("click", () => {
      tl_inputD_error.reverse();
    });
  } else {
    display_social.innerText = social;
    console.log(social);
    tl_inputD_next.restart();
  }
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
    duration: 2,
    delay: 1,
    opacity: 0.5,
  })
  .to(gemstoneInf, { strokeDashoffset: 0, duration: 15 })
  .to(gemstoneSup, { strokeDashoffset: 0, duration: 10 }, "<")
  .to(gemstoneInf, { strokeDashoffset: gemstoneInf_path, duration: 5 })
  .to(gemstoneSup, { strokeDashoffset: gemstoneSup_path, duration: 5 }, "<");



  // gsap.to(inputA_container,{x:"+=20", yoyo:true, repeat:1,duration: .05})

  

// gsap.to(bordeInt, { strokeDashoffset: 0, duration: 0 });
// gsap.to(bordeExt, { strokeDashoffset: 0, duration: 0 }, "<");
// tl_gemstoneBg

//   .to(gall, { strokeDashoffset: 0, duration: 1,  delay:.5})

  // .to(gall, { strokeDashoffset: 0, duration: 2 , delay:1})
  // .to(gall, {
  //   strokeDashoffset: gall_path,
  //   duration: 2,
  //   delay: 1,
  //   opacity: 0.5,
  // })
  // .to(gemstoneInf, { strokeDashoffset: 0, duration: 6 })
  // .to(gemstoneSup, { strokeDashoffset: 0, duration: 6 , ease: "power4.out"}, "<");
// .to(gemstoneInf, { strokeDashoffset: gemstoneInf_path, duration: 5 })
// .to(gemstoneSup, { strokeDashoffset: gemstoneSup_path, duration: 5 }, "<");

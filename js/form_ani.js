//home
const btn_home = document.getElementById("btn_home");

//error
const error_container = document.getElementById("input_error_container");
const error_return = document.getElementById("input_error_return");
const error_text = document.getElementById("input_error_text");

//form containers
const inputA = document.getElementById("input_a");
const inputA_container = document.getElementById("input_a_container");
const inputA_next = document.getElementById("input_a_next");

const inputB = document.getElementById("input_b");
const inputB_container = document.getElementById("input_b_container");
const inputB_back = document.getElementById("input_b_back");
const inputB_next = document.getElementById("input_b_next");

const inputC = document.getElementById("input_c");
const inputC_container = document.getElementById("input_c_container");
const inputC_back = document.getElementById("input_c_back");
const inputC_next = document.getElementById("input_c_next");

const inputD = document.getElementById("input_d");
const inputD_titleA = document.getElementById("title_a");
const inputD_container = document.getElementById("input_d_container");
const inputD_check = document.getElementById("input_d_check");
const inputD_back = document.getElementById("input_d_back");
const inputD_next = document.getElementById("input_d_next");

const inputE = document.getElementById("input_e");
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

//wpp
const btn_wpp = document.getElementById("btn_wpp");

const tl_wpp = gsap.timeline({delay:1, repeat: -1, repeatDelay:3});

tl_wpp
    .to(btn_wpp, { x: "+=7", yoyo: true, repeat: 5, duration: 0.03 });



//timelines next
const tl_inputA_next = gsap.timeline({ paused: true });
tl_inputA_next
  .to(inputA_container, { x: "-100%" })
  .to(inputB_container, { x: "-100%" }, "<");

const tl_inputB_next = gsap.timeline({ paused: true });
tl_inputB_next
  .to(inputB_container, { x: "-200%" })
  .to(inputC_container, { x: "-200%"}, "<");

const tl_inputC_next = gsap.timeline({ paused: true });
tl_inputC_next
  .to(inputC_container, { x: "-300%" })
  .to(inputD_container, { x: "-300%" }, "<");

const tl_inputD_next = gsap.timeline({ paused: true });
tl_inputD_next.to(inputD_container, { x: "-400%" });
tl_inputD_next.to(inputE_container, { x: "-400%" }, "<");

const tl_inputE_next = gsap.timeline({ paused: true });
tl_inputE_next
  .to(inputE_container, { x: "-500%" })
  .to(inputF_container, { x: "-500%" })
  .to("#input_frame",{height:"420px"}, "<");
  // .to("#input_frame",{height:"0px", delay:5})
  // .to("#input_frame",{scaleX: 0, transformOrigin: "50% 50%"})
  tl_wpp.play()

  


//form close animation

const tl_formClose = gsap.timeline({paused: true});

tl_formClose
        .to("#input_frame",{height:"0px"})
        .to("#input_frame",{scaleX: 0, transformOrigin: "50% 50%"})


// //timelines back
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


//funcion ERROR 
const error = function (input, placeholder) {
  gsap.to(input, { x: "+=7", yoyo: true, repeat: 3, duration: 0.03 });
  input.value = "";
  input.placeholder = "\n\nInvalido";
  input.style.borderBottom = "1px solid red";

  setTimeout(() => {
    input.value = "";
    input.placeholder = placeholder;
    input.style.borderBottom = "1px solid var(--textoPrincipal)";
  }, 1000);
};

const inputListener = function(input, placeholder, input_display, next){
    let input_value = String(input.value).toLowerCase();

    if (input == inputA ){
      if (input_value === ""){
        error(input, placeholder)
        console.log(placeholder)
      }
      else {
        input_display.innerText = input_value;
        console.log(input_display);
        next.restart();
      }
    }
    if (input == inputB){
      if ( !input_value.includes("@") || !input_value.includes(".") || input_value.length < 11){
        error(input, placeholder)
      }
      else{
        input_display.innerText = input_value;
        next.restart()
      }
    }
    if (input == inputC){
      if (input_value === ""){
        error(input,placeholder)
      }
      else{
        input_display.innerText = input_value;
        next.restart();
      }
    }
    if (input == inputD){
      if  (inputD_check.innerText == "Seleccioná una opción"){
        gsap.to(input, { x: "+=7", yoyo: true, repeat: 3, duration: 0.03 });
        input.style.borderBottom = "1px solid red";
        inputD_titleA.innerText ="Error";

        setTimeout(() => {
          // input.value = "";
          inputD_titleA.innerText = placeholder;
          input.style.borderBottom = "1px solid var(--textoPrincipal)";
        }, 1000);
      }
      else{
        next.restart();
      }
    }

}

inputA_next.addEventListener("click", function(){
  inputListener(inputA, "Nombre y Apellido", display_name, tl_inputA_next)
})
inputB_next.addEventListener("click", function(){
  inputListener(inputB, "Email", display_email, tl_inputB_next)
})
inputC_next.addEventListener("click", function(){
  inputListener(inputC, "¿A qué industria pertenece?\n¿Cuál es su producto o servicio?\n¿Qué pretende lograr con su producto/servicio?", display_brand, tl_inputC_next)
})
inputD_next.addEventListener("click", function(){
  inputListener(inputD, "Seleccioná una opción", display_social, tl_inputD_next)
})
inputE_next.addEventListener("click", () => {
  tl_inputE_next.restart();
} )

//back
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


//HOME

btn_wpp.addEventListener("click", () =>{
  tl_formClose.restart();
  
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
})

btn_home.addEventListener("click", () =>{
  tl_formClose.restart();

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
})

//placeholder effect
inputA.addEventListener("click", ()=>{
  inputA.placeholder = ""
})
inputA.addEventListener("blur", ()=>{
  inputA.placeholder = "Nombre y Apellido"
})

inputB.addEventListener("click", ()=>{
  inputB.placeholder = ""
})
inputB.addEventListener("blur", ()=>{
  inputB.placeholder = "Email"
})

inputC.addEventListener("click", ()=>{
  inputC.placeholder = ""
})
inputC.addEventListener("blur", ()=>{
  inputC.placeholder = "¿A qué industria pertenece?\n¿Cuál es su producto o servicio?\n¿Qué pretende lograr con su producto/servicio?"
})

inputD.addEventListener("click", ()=>{
  inputD.placeholder = "Seleccioná una opción"
})
inputD.addEventListener("blur", ()=>{
  inputD.placeholder = "Red social"
})





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


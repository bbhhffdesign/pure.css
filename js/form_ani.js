const inputA_container = document.getElementById("input_a_container")
const inputB_container = document.getElementById("input_b_container")
const inputC_container = document.getElementById("input_a_container")
const inputD_container = document.getElementById("input_b_container")

gsap.to(inputA_container,{x:"-100%", duration: 1.5, ease: "expo.out", delay: 2})
gsap.to(inputB_container,{x:"-100%", duration: 1.5, ease: "expo.out"}, "<")

// gsap.from(inputA_container,{x:"100%", duration: 1.5, ease: "expo.out"})
// gsap.from(inputB_container,{x:"100%", duration: 1.5, ease: "expo.out"}, "<")
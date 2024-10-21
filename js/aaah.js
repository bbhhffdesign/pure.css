const serviceBox1 = document.getElementById("services-box-1");

const cajasServicio = [
    document.getElementById("services-box-1"),
    document.getElementById("services-box-2"),
    document.getElementById("services-box-3"),
]

for ( let i = 0; i < cajasServicio.length; i++){
    cajasServicio[i].addEventListener("touchstart", ()=>{
        cajasServicio[i].classList.add("active");
    })
    cajasServicio[i].addEventListener("touchend", ()=>{
        cajasServicio[i].classList.remove("active");
    })
}

// serviceBox1.addEventListener("touchstart", ()=>{
//     serviceBox1.classList.add("active");
// })
// serviceBox1.addEventListener("touchend", ()=>{
//     serviceBox1.classList.remove("active");
// })


const btns_next = [
    document.getElementById("input_a_next"),
    document.getElementById("input_b_next"),
    document.getElementById("input_c_next"),
    document.getElementById("input_d_next"),
    document.getElementById("input_e_next")
]
const btns_back = [
    document.getElementById("input_b_back"),
    document.getElementById("input_c_back"),
    document.getElementById("input_d_back"),
    document.getElementById("input_e_back")

]
const input_frame = document.getElementById("input_frame")

const inputs = [
    document.getElementById("input_a"),
    document.getElementById("input_b"),
    document.getElementById("input_c"),
    document.getElementById("input_d"),
    document.getElementById("input_e"),
]
const inputs_containers = [
    document.getElementById("input_a_container"),
    document.getElementById("input_b_container"),
    document.getElementById("input_c_container"),
    document.getElementById("input_d_container"),
    document.getElementById("input_e_container"),
    document.getElementById("input_f_container"),
]
const inputD_check = document.getElementById("input_d_check");
const btn_wpp = document.getElementById("btn_wpp");

const tl_wpp = gsap.timeline({delay:2, repeat: 3, repeatDelay:3});

tl_wpp
    .to(btn_wpp, { x: "+=7", yoyo: true, repeat: 5, duration: 0.03 })


let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("entra")
        tl_wpp.play();  // Reproducir animación si está visible
      } else {
        console.log("sale")
        tl_wpp.pause(); // Pausar si está fuera de la pantalla
      }
    });
  }, { threshold: 0.1 });

observer.observe(btn_wpp);


const place_holders = [
    "Nombre y apellido",
    "Email",
    "¿A qué industria pertenece?\n¿Cuál es su producto o servicio?\n¿Qué pretende lograr con su producto/servicio?",
    "Seleccioná una opción"
]

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


// Función para agregar y quitar will-change dinámicamente
function addWillChange(element, property) {
    element.style.willChange = property;
}

function removeWillChange(element) {
    element.style.willChange = '';
}

for (let i = 0; i < btns_next.length; i++){
    btns_next[i].addEventListener("click", ()=> {
        let input_value = inputs[i].value;

        if (btns_next[i] === btns_next[3]) {
            if (inputD_check.innerText === "Seleccioná una opción") {
                error(inputs[i], place_holders[i])
                return;
            } else {
                gsap.to(inputs_containers[i], {
                    x: `${-100 * (i + 1)}%`,
                    onStart: () => addWillChange(inputs_containers[i], "transform"), // Agregar will-change
                    onComplete: () => removeWillChange(inputs_containers[i]) // Quitar will-change
                });
                gsap.to(inputs_containers[i + 1], {
                    x: `${-100 * (i + 1)}%`,
                    onStart: () => addWillChange(inputs_containers[i + 1], "transform"),
                    onComplete: () => removeWillChange(inputs_containers[i + 1])
                });
            }
        }

        if (input_value === "") {
            error(inputs[i], place_holders[i])
        } else {
            gsap.to(inputs_containers[i], {
                x: `${-100 * (i + 1)}%`,
                onStart: () => addWillChange(inputs_containers[i], "transform"),
                onComplete: () => removeWillChange(inputs_containers[i])
            });
            gsap.to(inputs_containers[i + 1], {
                x: `${-100 * (i + 1)}%`,
                onStart: () => addWillChange(inputs_containers[i + 1], "transform"),
                onComplete: () => removeWillChange(inputs_containers[i + 1])
            });
        }

        if (btns_next[i] === btns_next[4]) {
            gsap.to(input_frame, {
                height: "420px",
                onStart: () => addWillChange(input_frame, "height"),
                onComplete: () => removeWillChange(input_frame)
            });
        }
    });

    btns_back[i].addEventListener("click", () => {
        gsap.to(inputs_containers[i], {
            x: `${-1 * (i * 100)}%`,
            onStart: () => addWillChange(inputs_containers[i], "transform"),
            onComplete: () => removeWillChange(inputs_containers[i])
        });
        gsap.to(inputs_containers[i + 1], {
            x: `${-1 * (i * 100)}%`,
            onStart: () => addWillChange(inputs_containers[i + 1], "transform"),
            onComplete: () => removeWillChange(inputs_containers[i + 1])
        });
    });
}

let tl_item1 = gsap.timeline({paused:true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false});
let tl_item2 = gsap.timeline({paused:true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false});
let tl_item3 = gsap.timeline({paused:true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false});
let tl_item4 = gsap.timeline({paused:true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false});

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");

let ofertaTxt = document.getElementById("ofertaTxt");
let comunicacionTxt = document.getElementById("comunicacionTxt");
let marcaTxt = document.getElementById("marcaTxt");

let activeTimeline = null;
let lastClickedItem = null;
let isAnimating = false;

tl_item1.to(item1,{flexGrow:3},"<").to(item2,{flexGrow:.2},"<").to(item3,{flexGrow:.2},"<").to(item4,{flexGrow:.2},"<").to(ofertaTxt,{opacity: 1},"<");
tl_item2.to(item1,{flexGrow:.2},"<").to(item2,{flexGrow:3},"<").to(item3,{flexGrow:.2},"<").to(item4,{flexGrow:.2},"<").to(comunicacionTxt,{opacity: 1},"<");
tl_item3.to(item1,{flexGrow:.2},"<").to(item2,{flexGrow:.2},"<").to(item3,{flexGrow:2},"<").to(item4,{flexGrow:.2},"<").to(marcaTxt,{opacity: 1},"<");
tl_item4.to(item1,{flexGrow:.2},"<").to(item2,{flexGrow:.2},"<").to(item3,{flexGrow:.2},"<").to(item4,{flexGrow:3},"<");

function handleClick(item, timeline) {
    if (isAnimating) return; // Evitar que se inicie una nueva animación si ya hay una en curso

    if (lastClickedItem === item) {
        isAnimating = true;
        timeline.reverse().eventCallback("onReverseComplete", () => {
            isAnimating = false;
            lastClickedItem = null;
            activeTimeline = null;
        });
    } else {
        if (activeTimeline) {
            isAnimating = true;
            activeTimeline.reverse().eventCallback("onReverseComplete", () => {
                activeTimeline = timeline.play();
                lastClickedItem = item;
                isAnimating = true;
            });
        } else {
            activeTimeline = timeline.play();
            lastClickedItem = item;
            isAnimating = true;
        }
    }
}

item1.addEventListener("click", () => handleClick(item1, tl_item1));
item2.addEventListener("click", () => handleClick(item2, tl_item2));
item3.addEventListener("click", () => handleClick(item3, tl_item3));
item4.addEventListener("click", () => handleClick(item4, tl_item4));



let mm = gsap.matchMedia();

// Definir las animaciones para diferentes tamaños de pantalla
mm.add("(min-width: 1024px)", () => {
    // Animaciones para pantallas grandes (desktop)

    let tl_item1_large = gsap.timeline({ paused: true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false });
    let tl_item2_large = gsap.timeline({ paused: true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false });
    let tl_item3_large = gsap.timeline({ paused: true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false });
    let tl_item4_large = gsap.timeline({ paused: true, onComplete: () => isAnimating = false, onReverseComplete: () => isAnimating = false });

    tl_item1_large.to(item1, { flexGrow: 5 }, "<").to(item2, { flexGrow: 1 }, "<").to(item3, { flexGrow: 1 }, "<").to(item4, { flexGrow: 1 }, "<").to(ofertaTxt, { opacity: 0 }, "<");
    tl_item2_large.to(item1, { flexGrow: 1 }, "<").to(item2, { flexGrow: 5 }, "<").to(item3, { flexGrow: 1 }, "<").to(item4, { flexGrow: 1 }, "<").to(comunicacionTxt, { opacity: 1 }, "<");
    tl_item3_large.to(item1, { flexGrow: 1 }, "<").to(item2, { flexGrow: 1 }, "<").to(item3, { flexGrow: 5 }, "<").to(item4, { flexGrow: 1 }, "<").to(marcaTxt, { opacity: 1 }, "<");
    tl_item4_large.to(item1, { flexGrow: 1 }, "<").to(item2, { flexGrow: 1 }, "<").to(item3, { flexGrow: 1 }, "<").to(item4, { flexGrow: 5 }, "<");

    function handleClickLarge(item, timeline) {
        if (isAnimating) return; // Evitar que se inicie una nueva animación si ya hay una en curso

        if (lastClickedItem === item) {
            isAnimating = true;
            timeline.reverse().eventCallback("onReverseComplete", () => {
                isAnimating = false;
                lastClickedItem = null;
                activeTimeline = null;
            });
        } else {
            if (activeTimeline) {
                isAnimating = true;
                activeTimeline.reverse().eventCallback("onReverseComplete", () => {
                    activeTimeline = timeline.play();
                    lastClickedItem = item;
                    isAnimating = true;
                });
            } else {
                activeTimeline = timeline.play();
                lastClickedItem = item;
                isAnimating = true;
            }
        }
    }

    item1.addEventListener("click", () => handleClickLarge(item1, tl_item1_large));
    item2.addEventListener("click", () => handleClickLarge(item2, tl_item2_large));
    item3.addEventListener("click", () => handleClickLarge(item3, tl_item3_large));
    item4.addEventListener("click", () => handleClickLarge(item4, tl_item4_large));

    // Devuelve una función de limpieza si es necesario
    return () => {
        // Quitar eventos para evitar fugas de memoria
        item1.removeEventListener("click", handleClickLarge);
        item2.removeEventListener("click", handleClickLarge);
        item3.removeEventListener("click", handleClickLarge);
        item4.removeEventListener("click", handleClickLarge);
    };
});
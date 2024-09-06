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
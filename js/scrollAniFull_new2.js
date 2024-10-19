
gsap.timeline({
    scrollTrigger:{
        trigger:".mindmap-title-container",
        start: "top center",
        end: "bottom center",
        // markers: true
    }
})
.from(".mindmaptxt",{
    opacity: 0,
    y: 70,
    stagger: .3
})

gsap.timeline({
    scrollTrigger:{
        trigger:"#service-box-1",
        start: "top 80%",
        end: "bottom 80%",
        // markers: trues
    }
})
.from(".serv",{
    opacity: 0,
    y: 70,
    stagger: .8
})

gsap.timeline({
    scrollTrigger:{
        trigger:".gemstone-text-content",
        start: "top 80%",
        end: "bottom 80%",
        // markers: trues
    }
})
.from(".gem-txt",{
    opacity: 0,
    y: 70,
    stagger: .3
})

gsap.timeline({
    scrollTrigger:{
        trigger:".paso-2",
        start: "90% 900%",
        end: "100% 900%",
        // markers: true
    }
})
.from(".paso-number",{
    opacity: 0,
    y: "80%",
    stagger: .6
})




///////////GEMBG/////////
const gemBg = [
    document.getElementById("borde-ext"),
    document.getElementById("borde-int"),
    document.getElementById("gemstone-sup"),
    document.getElementById("gemstone-inf"),
  ];

for(let i = 0; i < gemBg.length; i++){
    const length = gemBg[i].getTotalLength();

    gsap.set(gemBg[i],{
        strokeDasharray: length,
        strokeDashoffset: length
    })

}
const gemBg_tween = gsap.to(".gemstone-bg-path",{strokeDashoffset : 0, duration: 6, paused: true});

gsap.timeline({
    scrollTrigger:{
        trigger:".gemstone-text-1-container",
        start: "center center",
        end: "bottom center",
        pin: true,
        scrub: true,
        // markers: true,
        onEnter: () =>{
            gsap.to("#tsparticles",{opacity:0, scrub: true})
        },
        onLeave: ()=>{
            gemBg_tween.play();
        },
        onEnterBack: ()=>{
            gemBg_tween.timeScale(4).reverse();
        },
        onLeaveBack: () =>{
            gsap.to("#tsparticles",{opacity:1, scrub: true})
        }
    }
})
////////////////////////
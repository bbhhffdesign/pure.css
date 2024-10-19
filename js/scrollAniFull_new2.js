gsap.timeline({
    scrollTrigger:{
        trigger: "#hero",
        start: "bottom top",
        end: "110% top",
        // markers: true,
        scrub: true
    }
})
.to("#navbar",{ y: -100})
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
        trigger:"#services-box-1",
        start: "top 80%",
        end: "bottom 80%",
        // markers: true,
    }
})
.from(".serv",{
    opacity: 0,
    y: 70,
    stagger: .8
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
        start: "30% center",
        end: "70% center",
        // pin: true,
        scrub: true,
        // markers: true,
        onEnter: () =>{
            gsap.to("#tsparticles",{opacity:0});

        },
        onLeave: ()=>{
            gemBg_tween.play();
            const particles = tsParticles.domItem(0);
            particles.stop();
        },
        onEnterBack: ()=>{
            gemBg_tween.timeScale(4).reverse();
            const particles = tsParticles.domItem(0);
            particles.refresh();
        },
        onLeaveBack: () =>{
            gsap.to("#tsparticles",{opacity:1})
        }
    }
})
////////////////////////



gsap.timeline({
    scrollTrigger:{
        trigger:".gemstone-text-content",
        start: "top 80%",
        end: "bottom 80%",
        // markers: true
    }
})
.from(".gem-txt",{
    opacity: 0,
    y: 70,
    stagger: .6
})

gsap.timeline({
    scrollTrigger:{
        trigger:".paso-1",
        start: "top 80%",
        end: "top 80%",
        // markers: true
    }
})
.from(".paso-number",{
    opacity: 0,
    y: "80%",
    stagger: .6
})
.from(".paso-text",{
    opacity: 0,
    y: "80%",
    stagger: .6
},"<")

gsap.timeline({
    scrollTrigger:{
        trigger:".orbita__text",
        start: "top 80%",
        end: "top 80%",
        // markers: true
    }
})
.from(".orbitxt",{
    opacity: 0,
    y: "80%",
    stagger: .3
})
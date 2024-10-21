const bg_form_paths = [
    document.getElementById("borde-ext-form"),
    document.getElementById("borde-int-form"),
    document.getElementById("gall-form"),
    document.getElementById("gemstone-sup-form"),
    document.getElementById("gemstone-inf-form"),
  ]
  
  for (let i = 0; i < bg_form_paths.length; i++){
    let lenght = bg_form_paths[i].getTotalLength();
  
    bg_form_paths[i].style.strokeDasharray = lenght;
    bg_form_paths[i].style.strokeDashoffset = lenght;

  }
  
  const tl_gemstone_bg = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 2});

  tl_gemstone_bg
        .to(bg_form_paths[0], {strokeDashoffset: 0, duration: 3})
        .to(bg_form_paths[1], {strokeDashoffset: 0, duration: 3}, "<")
        .to(bg_form_paths[2], {strokeDashoffset: 0, duration: 3})
        .to(bg_form_paths[2], {strokeDashoffset: bg_form_paths[2].getTotalLength(), duration: 4, delay: 2})
        .to(bg_form_paths[3], {ease: "power1.inOut", strokeDashoffset: 0, duration: 5, delay: 1})
        .to(bg_form_paths[4], {ease: "power1.inOut", strokeDashoffset: 0, duration: 5}, "<")

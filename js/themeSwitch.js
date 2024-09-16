function setTheme(themeName) {
    document
      .getElementById("theme")
      .setAttribute("href", "dist/css/theme-" + themeName + ".css");
  }

  let btn = document.getElementById("theme-switch-1");
  let btn2 = document.getElementById("theme-switch-2");

  btn.addEventListener("click", () =>{
    setTheme("light")
  })
  btn2.addEventListener("click", () =>{
    setTheme("dark")
  })
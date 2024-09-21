// function setTheme(themeName) {
//     document
//       .getElementById("theme")
//       .setAttribute("href", "dist/css/theme-" + themeName + ".css");
//   }

//   let btn = document.getElementById("theme-switch-1");
//   let btn2 = document.getElementById("theme-switch-2");

//   btn.addEventListener("click", () =>{
//     setTheme("light")
//   })
//   btn2.addEventListener("click", () =>{
//     setTheme("dark")
//   })


// Función para cambiar el tema
function setTheme(themeName) {
  document
    .getElementById("theme")
    .setAttribute("href", "dist/css/theme-" + themeName + ".css");
}

// Obtener el checkbox
const themeToggle = document.getElementById('theme-toggle');

// Cambiar el tema cuando se cambia el estado del switch
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    setTheme('light');  // Cambia a modo oscuro
  } else {
    setTheme('dark');  // Cambia a modo claro
  }
});
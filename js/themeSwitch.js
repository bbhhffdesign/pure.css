
function setTheme(themeName) {
  document
    .getElementById("theme")
    .setAttribute("href", "dist/css/theme-" + themeName + ".css");
}


const themeToggle = document.getElementById('theme-toggle');


themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    setTheme('light');
  } else {
    setTheme('dark'); 
  }
});
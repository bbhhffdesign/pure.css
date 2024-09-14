const nightMode = document.getElementById("nightMode");

let isNightMode = false;  // Variable para llevar el estado

let colores = function changeColors() {
    if (!isNightMode) {
        // Cambiar a night mode
        document.documentElement.style.setProperty('--blanco', 'black');
        document.documentElement.style.setProperty('--negro', 'white');
        document.documentElement.style.setProperty('--colorSecundario', '#C9FC59');
        document.documentElement.style.setProperty('--transparentFaq', '#c8c8c85e');
    } else {
        // Volver a los colores originales
        document.documentElement.style.setProperty('--blanco', 'white');
        document.documentElement.style.setProperty('--negro', 'black');
        document.documentElement.style.setProperty('--colorSecundario', '#eba94d');
        document.documentElement.style.setProperty('--transparentFaq', '#6d93d6d9');
    }
    isNightMode = !isNightMode; // Cambiar el estado
}

nightMode.addEventListener("click", colores);
colores();
const nightMode = document.getElementById("nightMode");

let isNightMode = false;  // Variable para llevar el estado

let colores = function changeColors() {
    if (!isNightMode) {
        // Cambiar a night mode
        document.documentElement.style.setProperty('--blanco', 'black');
        document.documentElement.style.setProperty('--negro', 'white');
        document.documentElement.style.setProperty('--colorSecundario', '#C9FC59');
        document.documentElement.style.setProperty('--transparentFaq', '#c8c8c85e');
        document.documentElement.style.setProperty('--borderBlanco', 'black');
        document.documentElement.style.setProperty('--borderNegro', 'white');
        document.documentElement.style.setProperty('--transparentFaq', '#c8c8c85e');
        document.documentElement.style.setProperty('--gradientGrad-1', '#ffffff');
        document.documentElement.style.setProperty('--gradientGrad-2', '#000000');
        document.documentElement.style.setProperty('--borderGrad-1', '#000000');
        document.documentElement.style.setProperty('--borderGrad-2', '#ffffff');
        document.documentElement.style.setProperty('--svgBlanco', '#000000');
        document.documentElement.style.setProperty('--negroTexto', '#c6c6c6');

    } else {
        // Volver a los colores originales
        document.documentElement.style.setProperty('--blanco', 'white');
        document.documentElement.style.setProperty('--negro', 'black');
        document.documentElement.style.setProperty('--colorSecundario', '#eba94d');
        document.documentElement.style.setProperty('--transparentFaq', '#6d93d6d9');
        document.documentElement.style.setProperty('--borderBlanco', 'white');
        document.documentElement.style.setProperty('--borderNegro', 'black');
        document.documentElement.style.setProperty('--gradientGrad-1', '#000000');
        document.documentElement.style.setProperty('--gradientGrad-2', '#c6c6c6');
        document.documentElement.style.setProperty('--borderGrad-1', '#ffffff');
        document.documentElement.style.setProperty('--borderGrad-2', '#000000');
        document.documentElement.style.setProperty('--svgBlanco', '#ffffff');
        document.documentElement.style.setProperty('--negroTexto', '#000000');
    }
    isNightMode = !isNightMode; // Cambiar el estado
}

nightMode.addEventListener("click", colores);
colores();
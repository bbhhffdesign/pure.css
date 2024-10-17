// document.addEventListener("DOMContentLoaded", () => {
//     const slide = document.querySelector('.brands-slide');
    
//     // Clona la primera slide y la añade al final para crear el efecto infinito
//     const clone = slide.cloneNode(true);
//     slide.parentNode.appendChild(clone);
    
//     // Calcula el ancho total del slider (con el clon)
//     const totalWidth = slide.scrollWidth;

//     // Configura GSAP para animar el slider
//     gsap.to(slide, {
//         x: -totalWidth, // Mueve hacia la izquierda por el ancho total
//         duration: 2, // Duración del movimiento
//         ease: "none", // Sin suavizado
//         repeat: -1, // Repetir indefinidamente
//     });

//     // Configura un segundo movimiento para que el clon se mueva simultáneamente
//     gsap.set(clone, { x: totalWidth }); // Coloca el clon al final
// });
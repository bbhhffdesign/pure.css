// //hero text
// const heroText_1 = document.getElementById("hero-text-1")
// const heroText_2 = document.getElementById("hero-text-2")
// const hero = document.getElementById("hero")

// //services text
// const servicesContainer = document.getElementById("services-container") 
// const servicesText = document.getElementById("services-text") 
// const servicesText1 = document.getElementById("services-text-1") 
// const servicesText2 = document.getElementById("services-text-2") 
// const servicesText3 = document.getElementById("services-text-3") 

// //servicesBoxes
// const servicesBox1 = document.getElementById("services-box-1");
// const servicesBox1Content = document.getElementById("services-box-1-content");
// const servicesBox2 = document.getElementById("services-box-2");
// const servicesBox2Content = document.getElementById("services-box-2-content");
// const servicesBox3 = document.getElementById("services-box-3");
// const servicesBox3Content = document.getElementById("services-box-3-content");

// //gemstoneText
// const gemstoneText = document.getElementById("gemstone-text");
// const gemstoneText1_2 = document.getElementById("gemstone-text-1-2");
// const gemstoneText1 = document.getElementById("gemstone-text-1");
// const gemstoneText1Cursor = document.getElementById("gemstone-text-1-cursor");
// const gemstoneText2 = document.getElementById("gemstone-text-2");
// const gemstoneText2Cursor = document.getElementById("gemstone-text-2-cursor");
// const gemstoneText3 = document.getElementById("gemstone-text-3");
// const gemstoneText3Cursor = document.getElementById("gemstone-text-3-cursor");


// const tl = gsap.timeline();

// tl.to(heroText_1, {
//   duration: 1,
//   scrambleText: {
//     text: heroText_1.textContent,
//     chars: "random",
//     revealDelay: 0.1,
//     tweenLength: 0.2
//   },
//   ease: "power1.inOut"
// })

// Selecciona los elementos de texto y el botón
// Selecciona los elementos de texto y el botón
const textElement1 = document.querySelector('#hero-text-1');
const textElement2 = document.querySelector('#hero-text-2');
const button = document.getElementById('navBtn');

// Función para generar un texto de scrambling
function scrambleText(element, duration = 5, scrambleDuration = 3, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
  const originalText = element.textContent;
  const length = originalText.length;
  const randomChars = chars.split('');
  
  // Genera una secuencia de texto aleatorio para el scrambling
  const generateScrambleText = () => {
    return Array.from({ length }, () => randomChars[Math.floor(Math.random() * randomChars.length)]).join('');
  };

  // Inicializa el texto con caracteres aleatorios
  element.textContent = generateScrambleText();

  // Animación para el scrambling
  gsap.to(element, {
    duration: scrambleDuration,
    onUpdate: function () {
      // Cambia el texto en cada actualización para simular el scrambling
      element.textContent = generateScrambleText();
    },
    ease: "power1.inOut",
    onComplete: function () {
      // Al finalizar el scrambling, comienza a revelar el texto original letra por letra
      gsap.fromTo(element, 
        { text: { value: "" } }, // Empieza con un texto vacío
        { 
          duration: duration - scrambleDuration,
          text: { value: originalText },
          ease: "power1.inOut"
        }
      );
    }
  });
}

// Configura el evento de clic en el botón para iniciar la animación
button.addEventListener('click', () => {
  scrambleText(textElement1, 3, 2); // Duración total de 3 segundos, scrambling de 2 segundos
  scrambleText(textElement2, 3, 2); // Duración total de 3 segundos, scrambling de 2 segundos
});
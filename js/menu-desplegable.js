document.addEventListener('DOMContentLoaded', function () {
    const selectTitle = document.querySelector('.select__title');
    const selectItems = document.querySelector('.select__items');
    const items = document.querySelectorAll('.item');
  
    // Toggle desplegable al hacer clic en el título
    selectTitle.addEventListener('click', function () {
      selectItems.style.display = selectItems.style.display === 'block' ? 'none' : 'block';
    });
  
    // Manejar la selección de un item
    items.forEach(item => {
      item.addEventListener('click', function () {
        const selectedValue = item.getAttribute('data-value');
        const selectedText = item.textContent;
  
        // Cambiar el texto del título por la opción seleccionada
        selectTitle.textContent = selectedText;
  
        // Ocultar el desplegable después de seleccionar
        selectItems.style.display = 'none';
  
        // Aquí puedes manejar el valor seleccionado con JS
        console.log('Valor seleccionado:', selectedValue);
      });
    });
  
    // Ocultar el menú si se hace clic fuera del componente
    document.addEventListener('click', function (e) {
      if (!selectTitle.contains(e.target) && !selectItems.contains(e.target)) {
        selectItems.style.display = 'none';
      }
    });
  });
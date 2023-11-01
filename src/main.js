import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';



const root = document.querySelector('#root');
root.innerHTML = renderItems(data);

// Seleccionar el elemento <select> por su id
const selectElement = document.getElementById('alineacion-select');

// Agregar un controlador de eventos 'change'
selectElement.addEventListener('change', function() {
  // Obtener el valor seleccionado en el <select>
  const selectedValue = selectElement.value;

  // Llamar a tu función de filtrado o realizar la acción deseada
  filterByAlignment(selectedValue); // Reemplaza 'filterByAlignment' con el nombre de tu función
});

import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';



const root = document.querySelector('#root'); //id contenedor de tarjetas
root.innerHTML = renderItems(data);
const manipulatedData = data
//root contenedor lista de elementos
//Filtro alineación escribirlo en ingles
const selectFiltro = document.querySelector("select[name='alignment']")
selectFiltro.addEventListener("change",(event)=>{
  const dataFiltrada = filterData(manipulatedData, "alignment", event.target.value) 
  root.innerHTML = renderItems(dataFiltrada);

});

const selectOrden = document.querySelector("select[name='name']")
selectOrden.addEventListener("change",(event)=> {
  const orden = sortData(manipulatedData, "name", event.target.value)
  root.innerHTML = renderItems(orden);
});

//boton limpiar
const clearButton = document.querySelector('[data-testid="button-clear"]');
clearButton.addEventListener('click', function () {
  root.innerHTML = renderItems(data);
});

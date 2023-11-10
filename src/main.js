import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';



const root = document.querySelector('#root'); //id contenedor de tarjetas
root.innerHTML = renderItems(data);
//root contenedor lista de elementos
//Filtro alineación escribirlo en ingles
const selectFiltro = document.querySelector("select[name='alignment']")
selectFiltro.addEventListener("change",(event)=>{
  const dataFiltrada = filterData(data, "alignment", event.target.value) 
  root.innerHTML = renderItems(dataFiltrada);

});

const selectOrden = document.querySelector("select[name='name']")
selectOrden.addEventListener("change",(event)=>{
  const orden = sortData(data, "name", event.target.value)
  root.innerHTML = renderItems(orden);
});

//boton limpiar
const clearButton = document.querySelector("button[data-testid='button-clear']");
clearButton.addEventListener("click", () => {
  //reestablece el valor de AMBOS 
  selectFiltro.value = "";
  selectOrden.value = "";
  root.innerHTML = renderItems(data);
});

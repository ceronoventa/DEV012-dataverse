import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';



const root = document.querySelector('#root'); //id contenedor de tarjetas
root.innerHTML = renderItems(data);
//root contenedor lista de elementos
//Filtro alineación escribirlo en ingles
const selectFiltro = document.querySelector("select[name='alineacion']")
selectFiltro.addEventListener("change",(event)=>{
  const dataFiltrada = filterData(data, "alignment", event.target.value) 
  root.innerHTML = renderItems(dataFiltrada);

});

const selectOrden = document.querySelector("select[name='alfabetico']")
selectOrden.addEventListener("change",(event)=>{
  const orden = sortData(data, "alfabetico", event.target.value)
  root.innerHTML = renderItems(orden);
});
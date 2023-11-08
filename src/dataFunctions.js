
//(data, filterBy, value) 
export function filterData(data, filterBy, value) {
//const result = words.filter((word) => word.length > 6);
  const result = data.filter((personaje) => personaje.facts[filterBy] === value);
  return  result
}
//sortBy que tiene 3 parámetros (data, sortBy, sortOrder)
//function compare(a, b) {
// if (a es menor que b según criterio de ordenamiento) {
//  return -1;
//}
//if (a es mayor que b según criterio de ordenamiento) {
//return 1;
//}
// a debe ser igual b
//return 0;
//}
export function sortData(data, alfabetico, sortOrder) {
//data.sort((a, b) => a.localeCompare(b));
  if (sortOrder === "asc"){
    return data.sort((a, b) => a[alfabetico].localCompare(b[alfabetico]))
  } else if (sortOrder === "desc"){
    return data.sort((a, b) => b[alfabetico].localCompare(b[alfabetico]));
  } else {
    return data; 
  }
} 



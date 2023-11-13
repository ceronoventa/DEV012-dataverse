export const renderItems = (data) => {
  // Aquí creamos un string para almacenar las tarjetas de personajes.
  let tarjetas = "";
  // Recorremos el arreglo de datos para generar una tarjeta para cada personaje.
  data.forEach(personaje => {
    
    tarjetas += ` 
    <li class="card">
    <div class="face font">
      <dl itemscope itemtype="xmen">
        <img src="${personaje.imageUrl}" alt="${personaje.name}" itemprop="image" />
        <h3 itemprop="name">${personaje.name}</h3>
      </dl>
    </div>
    <div class="face back">
      <h3>${personaje.name}</h3>
      <p itemprop="shortDescription">${personaje.description}</p>
      <p itemprop="alignment">${personaje.facts.alignment}</p>
    </div>
  </li>
`;
  });

  // Finalmente, retornamos el conjunto de tarjetas como una cadena HTML.
  return `<ul class="mamatarjetitas">${tarjetas}</ul>`;
};

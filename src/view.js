export const renderItems = (data) => {
  // Aquí creamos un string para almacenar las tarjetas de personajes.
  let tarjetas = "";
  // Recorremos el arreglo de datos para generar una tarjeta para cada personaje.
  data.forEach(personaje => {
    
    tarjetas += ` 
    <li class="tarjetita">

      <dl itemscope itemtype="xmen">
        <img src="${personaje.imageUrl}" alt="${personaje.name}" itemprop="image" />
        <dt>Nombre:</dt><dd itemprop="name">${personaje.name}</dd>
        <dt>Descripción:</dt><dd itemprop="shortDescription">${personaje.description}</dd>
        <dt>Alineación:</dt><dd itemprop="alignment">${personaje.facts.alignment}</dd>
      </dl>
      </li>
    `;
  }
  )
  // Finalmente, retornamos el conjunto de tarjetas como una cadena HTML.
  return `<ul class="mamatarjetitas">${tarjetas}</ul>`;
};
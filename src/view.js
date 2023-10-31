export const renderItems = (data) => {
  console.log(data)
 
  // Aquí creamos un string para almacenar las tarjetas de personajes.
  let tarjetas = "";
  // Recorremos el arreglo de datos para generar una tarjeta para cada personaje.
  data.forEach(personaje => {
    
    tarjetas += ` 
    <li>

      <dl itemscope itemtype="https://schema.org/Superhero">
        <img src="${personaje.imageUrl}" alt="${personaje.name}" itemprop="image" />
        <dt>Nombre:</dt><dd itemprop="name">${personaje.name}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${personaje.description}</dd>
        <dt>Alineación:</dt><dd itemprop="alignment">${personaje.facts.alignment}</dd>
        <dt>Género:</dt><dd itemprop="gender">${personaje.facts.gender}</dd>
        <dt>Poderes:</dt><dd itemprop="powers">${personaje.facts.powers}</dd>
      </dl>
      </li>
    `;
  }
  )
  // Finalmente, retornamos el conjunto de tarjetas como una cadena HTML.
  return `<ul>${tarjetas}</ul>`;
};
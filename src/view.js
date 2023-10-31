export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  return 'example';
  // Aquí creamos un string para almacenar las tarjetas de personajes.
  let tarjetas = "";
  // Recorremos el arreglo de datos para generar una tarjeta para cada personaje.
  for (let i = 0; i < data[0].length; i++) {
    const personaje = data[0][i];
    tarjetas += `
      <dl itemscope itemtype="https://schema.org/Superhero">
        <img src="${personaje.imageUrl}" alt="${personaje.name}" itemprop="image" />
        <dt>Nombre:</dt><dd itemprop="name">${personaje.name}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${personaje.description}</dd>
        <dt>Alineación:</dt><dd itemprop="alignment">${personaje.facts.alignment}</dd>
        <dt>Género:</dt><dd itemprop="gender">${personaje.facts.gender}</dd>
        <dt>Poderes:</dt><dd itemprop="powers">${personaje.facts.powers}</dd>
      </dl>
    `;
  }
  // Finalmente, retornamos el conjunto de tarjetas como una cadena HTML.
  return tarjetas;
};
export const getCharacters = async () => {
  const res = await fetch(
    `https://hp-api.onrender.com/api/characters`
  );

  const data = await res.json();

  const dataMapper = {
    results: data
      .filter((item) => item.image && item.image.trim() !== '') // Filtra los elementos con image no nulo o vacío
      .map((item) => ({
        name: item.name,
        image: item.image,
        house: item.house === 'Gryffindor' ? 'Gryffindor' : 'Slytherin',
        patronus: item.patronus,
        actor: item.actor
      })),
    info: {
      pages: data.totalPages,
    },
  };

  return dataMapper;
};

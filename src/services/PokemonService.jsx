const fetchPokemon = async (offset) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
    );
    const data = await response.json();
    const imageUrls = data.results.map((result) => result.url);
    const imagePromises = imageUrls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    });
    const pokemonName = data.results.map((result) => result.name);
    const imageData = await Promise.all(imagePromises);
    const imagePokemon = imageData.map((data) => data.sprites.front_default);

    return {
      pokemonName,
      imagePokemon,
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchPokemon;

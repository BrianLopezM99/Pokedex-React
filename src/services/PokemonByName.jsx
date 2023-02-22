const callPokemon = async (inputPokemon) => {
    try {
      if(inputPokemon.length > 0) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`
        );
        const data = await response.json();
        return data
        
      } else {
        console.log('No se ha escrito nada en el input')
      }
    } catch (error) {
      console.log(error);
    }
  };

  export default callPokemon;
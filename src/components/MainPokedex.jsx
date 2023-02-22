import React, { useState, useEffect } from "react";
import fetchPokemon from "../services/PokemonService";
import InfoModal from "./InfoModal";

const MainPokedex = ({ callPokemon }) => {
  const [imagePokemon, setImagePokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState();
  const [offset, setOffset] = useState(0);
  const [infoPokemon, setInfoPokemon] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon(offset);
      setPokemonName(data.pokemonName);
      setImagePokemon(data.imagePokemon);
    };
    fetchData();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 50);
  };

  const handlePrevious = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 50, 0));
  };

  const handlePokemonClick = async (pokemon) => {
    const data = await callPokemon(pokemon.name);
    setInfoPokemon(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ul className="list-pokemons">
        {imagePokemon.length && pokemonName.length
          ? imagePokemon.map((image, index) => (
              <li
                key={index}
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() =>
                  handlePokemonClick({
                    name: pokemonName[index],
                    image: imagePokemon[index],
                  })
                }
              >
                <div className="pokemon-info">
                  <img src={image} alt="none" />
                </div>
                <div>{pokemonName[index]}</div>
              </li>
            ))
          : "Loading..."}
      </ul>
      <InfoModal
        infoPokemon={infoPokemon}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <div className="button-container">
        {offset === 0 ? (
          <button className="button-disabled" onClick={handlePrevious} disabled>
            Previous Page
          </button>
        ) : (
          <button className="button" onClick={handlePrevious}>
            Previous Page
          </button>
        )}
        <button className="button" onClick={handleLoadMore}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default MainPokedex;

import Box from "@mui/material/Box";
import "../index.css";
import { useState, useEffect } from "react";
import callPokemon from "../services/PokemonByName";
import InfoModal from "./InfoModal";
import MainPokedex from "./MainPokedex";

const Search = () => {
  const [inputPokemon, setInputPokemon] = useState("");
  const [infoPokemon, setInfoPokemon] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setIsTyping(true);
    setInputPokemon(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await callPokemon(inputPokemon);
      setInfoPokemon(data);
      setIsSearching(false);
    };

    fetchData();
  }, [isSearching]);

  const handleSubmit = () => {
    setIsSearching(true);
    setIsTyping(false);
  };

  const handleSeeInfo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="main">
        <img
          src="src\assets\pngwing.com.png"
          alt=""
          width={200}
          height={200}
          style={{ marginBottom: "20px" }}
        />
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <div className="title">Pokemon Finder</div>
          </Box>
          <Box gridColumn="span 12">
            <input
              type="text"
              value={inputPokemon}
              onChange={handleInputChange}
              placeholder="Search your pokemon ..."
              className="input-field"
            />
          </Box>
          <Box gridColumn="span 12">
            <div className="container-center">
              <button className="button" onClick={handleSubmit}>
                Search
              </button>
            </div>
          </Box>
          {infoPokemon && !isTyping ? (
            <>
              <Box gridColumn="span 12">
                <div className="container-center">
                  <button className="button" onClick={handleSeeInfo}>
                    See more information
                  </button>
                </div>
              </Box>
            </>
          ) : null}
        </Box>
        <InfoModal
          infoPokemon={infoPokemon}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
      <MainPokedex callPokemon={callPokemon} infoModal={InfoModal}/>;
    </>
  );
};

export default Search;


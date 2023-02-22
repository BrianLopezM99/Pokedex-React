import React from "react";
import Modal from "react-modal";

const InfoModal = ({ isOpen, onClose, infoPokemon }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      className="modal"
      ariaHideApp={false}
    >
      {infoPokemon && infoPokemon.sprites ? (
        <>
          <div className="main">
            <h2>Información del Pokémon</h2>
            <h3>Normal</h3>
            <div className="container-modal">
              <img src={infoPokemon.sprites.front_default} alt="" />
              <img src={infoPokemon.sprites.back_default} alt="" />
            </div>
            <h3>Shiny</h3>
            <div className="container-modal">
              <img src={infoPokemon.sprites.front_shiny} alt="" />
              <img src={infoPokemon.sprites.back_shiny} alt="" />
            </div>
            <div className="container-text">
              <p className="pa">
                Nombre:{" "}
                {infoPokemon ? infoPokemon.name : "Nombre no disponible"}
              </p>
              <p className="pa" style={{marginLeft: "15px"}}>
                Tipo:{" "}
                {infoPokemon && infoPokemon.types
                  ? infoPokemon.types[0].type.name
                  : "Tipo no disponible"}
              </p>
            </div>
          </div>

          <div className="container-center">
            <button className="button" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </>
      ) : (
        <button onClick={onClose}>Cerrar</button>
      )}
    </Modal>
  );
};

export default InfoModal;

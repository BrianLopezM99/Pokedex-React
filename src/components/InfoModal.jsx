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
          <h2>Información del Pokémon</h2>
          <img src={infoPokemon.sprites.front_default} alt="" />
          <p>Nombre: {infoPokemon ? infoPokemon.name : 'Nombre no disponible'}</p>
          <p>Tipo: {infoPokemon && infoPokemon.types ? infoPokemon.types[0].type.name : 'Tipo no disponible'}</p>

          <button onClick={onClose}>Cerrar</button>
        </>
      ) : (
        <button onClick={onClose}>Cerrar</button>
      )}
    </Modal>
  );
};

export default InfoModal;

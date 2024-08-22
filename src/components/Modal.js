import React from 'react';

const Modal = ({ pokemon, onClose }) => {
    if (!pokemon) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>X</button>
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="modal-image" />
          <p><strong>Height:</strong> {pokemon.height / 10} m</p>
          <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Type:</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
          <p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>
      </div>
    );
  };
  
  export default Modal;
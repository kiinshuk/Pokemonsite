import React from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
    return (
      <div className="pokemon-card" onClick={() => onClick(pokemon)}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
        <div className="pokemon-info">
          <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        </div>
      </div>
    );
  };
  
  export default PokemonCard;
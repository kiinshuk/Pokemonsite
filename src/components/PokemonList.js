import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCards';
import Modal from './Modal';
import SearchBar from './SearchBar';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(null);
  
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
          const promises = response.data.results.map(pokemon =>
            axios.get(pokemon.url)
          );
          const results = await Promise.all(promises);
          setPokemonList(results.map(result => result.data));
          setFilteredPokemon(results.map(result => result.data));
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
        }
      };
      fetchPokemon();
    }, []);
  
    useEffect(() => {
      setFilteredPokemon(
        pokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, pokemonList]);
  
    const handleCardClick = (pokemon) => {
      setSelectedPokemon(pokemon);
    };
  
    const handleCloseModal = () => {
      setSelectedPokemon(null);
    };
  
    return (
      <div className="pokemon-list-container">
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="pokemon-list">
          {filteredPokemon.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={handleCardClick} />
          ))}
        </div>
        <Modal pokemon={selectedPokemon} onClose={handleCloseModal} />
      </div>
    );
  };
  
  export default PokemonList;
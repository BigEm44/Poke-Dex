import React, { createContext, useState } from 'react';

export const PokemonListContext = createContext();

const PokemonListContextProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const initialApi = 'https://pokeapi.co/api/v2/pokemon';
  const filterApi = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964';

  async function getAllPokemon(api) {
    return new Promise((resolve, reject) => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          alert(err + 'Try to refresh page');
        });
    });
  }

  async function getPokemon(api) {
    return new Promise((resolve, reject) => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => alert(err + 'Try to refresh page'));
    });
  }

  return (
    <PokemonListContext.Provider
      value={{
        pokemons,
        nextPage,
        prevPage,
        loading,
        initialApi,
        filterApi,
        setPokemons,
        setNextPage,
        setPrevPage,
        setLoading,
        getAllPokemon,
        getPokemon,
      }}
    >
      {props.children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListContextProvider;

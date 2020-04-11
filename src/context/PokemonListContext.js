import React, { createContext, useState } from 'react';

export const PokemonListContext = createContext();

const PokemonListContextProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const api = 'https://pokeapi.co/api/v2/pokemon';

  async function getAllPokemon(api) {
    return new Promise((resolve, reject) => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        //TO-DO BŁĘDY OBSŁUŻYĆ
        .catch((err) => console.log('coś nie tak' + err));
    });
  }

  async function getPokemon(api) {
    return new Promise((resolve, reject) => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        //TO-DO BŁĘDY OBSŁUŻYĆ
        .catch((err) => console.log('oops' + err));
    });
  }

  return (
    <PokemonListContext.Provider
      value={{
        pokemons,
        nextPage,
        prevPage,
        loading,
        api,
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

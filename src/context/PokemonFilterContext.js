import React, { createContext, useState } from 'react';

export const PokemonFilterContext = createContext();

const PokemonFilterContextProvider = (props) => {
  const [menu, setMenuToggle] = useState(false);
  const menuToggle = () => setMenuToggle(!menu);
  const [pokemonTypes, setPokemonTypes] = useState([
    { name: 'normal', id: 1 },
    { name: 'fighting', id: 2 },
    { name: 'poison', id: 3 },
    { name: 'ground', id: 4 },
    { name: 'rock', id: 5 },
    { name: 'bug', id: 6 },
    { name: 'ghost', id: 7 },
    { name: 'steel', id: 8 },
    { name: 'fire', id: 9 },
    { name: 'water', id: 10 },
    { name: 'grass', id: 11 },
    { name: 'electric', id: 12 },
    { name: 'psychic', id: 13 },
    { name: 'ice', id: 14 },
    { name: 'dragon', id: 15 },
    { name: 'fairy', id: 16 },
    { name: 'dark', id: 17 },
  ]);
  const [choosenPokemonType, setChoosenPokemonType] = useState([]);
  const [typeFilter, setTypeFilter] = useState(false);
  const [pokemonAbilities, setPokemonAbilities] = useState([
    { name: 'anticipation', id: 1 },
    { name: 'blaze', id: 2 },
    { name: 'chlorophyll', id: 3 },
    { name: 'clear-body', id: 4 },
    { name: 'damp', id: 5 },
    { name: 'flame-body', id: 6 },
    { name: 'flash-fire', id: 7 },
    { name: 'frisk', id: 8 },
    { name: 'gluttony', id: 9 },
    { name: 'guts', id: 10 },
    { name: 'hustle', id: 11 },
    { name: 'ice-body', id: 12 },
    { name: 'infiltrator', id: 13 },
    { name: 'inner-focus', id: 14 },
    { name: 'insomnia', id: 15 },
    { name: 'intimidate', id: 16 },
    { name: 'keen-eye', id: 17 },
    { name: 'leaf-guard', id: 18 },
    { name: 'levitate', id: 19 },
    { name: 'oblivious', id: 20 },
    { name: 'overgrow', id: 21 },
    { name: 'own-tempo', id: 22 },
    { name: 'pickup', id: 23 },
    { name: 'pressure', id: 24 },
    { name: 'run-away', id: 25 },
    { name: 'shell-armor', id: 26 },
    { name: 'sniper', id: 27 },
    { name: 'sturdy', id: 28 },
    { name: 'swift-swim', id: 29 },
    { name: 'torrent', id: 30 },
    { name: 'unnerve', id: 31 },
    { name: 'water-absorb', id: 32 },
  ]);

  return (
    <PokemonFilterContext.Provider
      value={{
        menu,
        pokemonTypes,
        choosenPokemonType,
        typeFilter,
        pokemonAbilities,
        setMenuToggle,
        menuToggle,
        setChoosenPokemonType,
        setTypeFilter,
        setPokemonAbilities,
      }}
    >
      {props.children}
    </PokemonFilterContext.Provider>
  );
};
export default PokemonFilterContextProvider;

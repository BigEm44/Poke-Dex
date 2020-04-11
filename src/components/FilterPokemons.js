import React, { useContext, useState } from 'react';
import { PokemonListContext } from '../context/PokemonListContext';
import PokemonListDetails from './PokemonListDetails';
import { PokemonFilterContext } from '../context/PokemonFilterContext';

const FilterPokemons = () => {
  const {
    menu,
    setMenuToggle,
    menuToggle,
    pokemonTypes,
    typeFilter,
    pokemonAbilities,
    choosenPokemonType,
    setChoosenPokemonType,
    setTypeFilter,
    setPokemonAbilities,
  } = useContext(PokemonFilterContext);

  //console.log(pokemonTypes);
  console.log(choosenPokemonType);
  // console.log(typeFilter);
  return (
    <div className="filterPokemon">
      <div
        onClick={() => setMenuToggle(false)}
        className="filterPokemon__closeBtn"
      >
        x
      </div>
      <h2>Find your Pokemon</h2>
      <div className="filterPokemon__category">
        <h3>Choose type</h3>
        <ul className="filterPokemon__category--type">
          {pokemonTypes.map((type) => {
            return (
              <li
                key={type.id}
                onClick={() => setChoosenPokemonType(type.name)}
              >
                {type.name}
              </li>
            );
          })}
        </ul>
        <h3>Choose ability</h3>
        <ul className="filterPokemon__category--ability">
          {pokemonAbilities.map((ability) => {
            return <li key={ability.id}>{ability.name}</li>;
          })}
        </ul>
        <button
          onClick={() => menuToggle(setTypeFilter(true))}
          className="filterPokemon__applyBtn"
        >
          Apply
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default FilterPokemons;

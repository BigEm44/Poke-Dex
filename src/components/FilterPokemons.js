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
    typeForm,
    abilityForm,
    typeFilter,
    pokemonAbilities,
    handleTypeChange,
    handleTypeSubmit,
    handleAbilityChange,
    handleAbilitySubmit,
    setTypeFilter,
    setPokemonAbilities,
  } = useContext(PokemonFilterContext);

  return (
    <div className="filterPokemon">
      <h2>Find your Pokemon</h2>
      <div className="filterPokemon__category">
        <div className="filterPokemon__category--type">
          <form onSubmit={handleTypeSubmit}>
            <label>
              Choose type:
              <select
                name="pokemonType"
                onChange={handleTypeChange}
                value={typeForm}
              >
                {pokemonTypes.map((type) => {
                  return (
                    <option key={type.id} value={type.name}>
                      {type.name}
                    </option>
                  );
                })}
              </select>
            </label>
            <input type="submit" value="Apply" />
          </form>
        </div>
        <div className="filterPokemon__category--ability">
          <form onSubmit={handleAbilitySubmit}>
            <label>
              Choose ability:
              <select
                name="pokemonAbility"
                onChange={handleAbilityChange}
                value={abilityForm}
              >
                {pokemonAbilities.map((ability) => {
                  return (
                    <option key={ability.id} value={ability.name}>
                      {ability.name}
                    </option>
                  );
                })}
              </select>
            </label>
            <input type="submit" value="Apply" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterPokemons;

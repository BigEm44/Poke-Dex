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
    nameForm,
    nameFilter,
    pokemonAbilities,
    handleTypeChange,
    handleTypeSubmit,
    handleAbilityChange,
    handleAbilitySubmit,
    handleNameChange,
    handleNameSubmit,
    setTypeFilter,
    setPokemonAbilities,
  } = useContext(PokemonFilterContext);
  console.log(nameForm);
  return (
    <div className="filterPokemon">
      <div className="filterPokemon__category">
        <div className="filterPokemon__category--name">
          <form onSubmit={handleNameSubmit}>
            <label>
              Enter pokemon name
              <input
                type="text"
                name="pokemonName"
                onChange={handleNameChange}
              ></input>
              <button>Apply</button>
            </label>
          </form>
        </div>
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
      {/* <div className="filterPokemon__nameFilter">
        <form onSubmit={handleNameSubmit}>
          <label>
            Enter pokemon name
            <input
              type="text"
              name="pokemonName"
              onChange={handleNameChange}
            ></input>
            <button>Apply</button>
          </label>
        </form>
      </div> */}
    </div>
  );
};

export default FilterPokemons;

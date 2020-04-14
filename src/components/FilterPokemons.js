import React, { useContext } from 'react';
import { PokemonFilterContext } from '../context/PokemonFilterContext';

const FilterPokemons = () => {
  const {
    pokemonTypes,
    typeForm,
    abilityForm,
    pokemonAbilities,
    handleTypeChange,
    handleTypeSubmit,
    handleAbilityChange,
    handleAbilitySubmit,
    handleNameChange,
    handleNameSubmit,
  } = useContext(PokemonFilterContext);

  return (
    <div className="filterPokemon">
      <div className="filterPokemon__category">
        <div className="filterPokemon__category--name">
          <form onSubmit={handleNameSubmit}>
            <h3>Enter pokemon name</h3>
            <label>
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
            <h3>Choose type</h3>
            <label>
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
            <h3>Choose ability</h3>
            <label>
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

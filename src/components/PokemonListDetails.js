import React from 'react';

const PokemonListDetails = ({ pokemon }) => {
  return (
    <div className="pokemonListDetails">
      <h2 className="pokemonListDetails__name">{pokemon.name}</h2>
      <div className="pokemonListDetails__image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="pokemonListDetails__basicData">
        <div className="pokemonListDetails__basicDate--height">
          <h3>Height</h3>
          <p>{pokemon.height}</p>
        </div>
        <div className="pokemonListDetails__basicDate--weight">
          <h3>Weight</h3>
          <p>{pokemon.weight}</p>
        </div>
      </div>
      <h3>Type:</h3>
      <div className="pokemonListDetails__types">
        {pokemon.types.map((type, index) => {
          return (
            <div className="pokemonListDetails__type" key={index}>
              {type.type.name}
            </div>
          );
        })}
      </div>
      <h3>Ability:</h3>
      <div className="pokemonListDetails__abilities">
        {pokemon.abilities.map((ability, index) => {
          return (
            <div className="pokemoneListDetails__ability" key={index}>
              {ability.ability.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonListDetails;

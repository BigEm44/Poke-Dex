import React, { useContext } from 'react';
import { PokemonFilterContext } from '../context/PokemonFilterContext';
import FilterPokemons from './FilterPokemons';

const Header = () => {
  const { menu, menuToggle, nameFilter } = useContext(PokemonFilterContext);

  return (
    <div className="header">
      <h1>Pokedex</h1>
      <button className="menuBtn" onClick={() => menuToggle()}>
        {menu ? 'Close Filters' : 'Find Pokemon'}
        {nameFilter ? '/ Show all' : ''}
      </button>
      {menu ? <FilterPokemons /> : <React.Fragment />}
    </div>
  );
};

export default Header;

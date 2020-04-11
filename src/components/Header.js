import React, { useContext } from 'react';
import { PokemonFilterContext } from '../context/PokemonFilterContext';
import FilterPokemons from './FilterPokemons';

const Header = () => {
  const { menu, menuToggle } = useContext(PokemonFilterContext);
  return (
    <div className="header">
      <button onClick={menuToggle}>
        {menu ? 'Close Menu' : 'Find Pokemon'}
      </button>
      {menu ? <FilterPokemons /> : <React.Fragment />}
    </div>
  );
};

export default Header;

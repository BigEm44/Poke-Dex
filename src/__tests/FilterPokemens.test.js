import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterPokemons from '../components/FilterPokemons';
import PokemonFilterContextProvider from '../context/PokemonFilterContext';

test('renders component', () => {
  const { getByText } = render(
    <PokemonFilterContextProvider>
      <FilterPokemons />
    </PokemonFilterContextProvider>
  );
  expect(getByText('Enter pokemon name')).toBeInTheDocument();
  expect(getByText('Choose type')).toBeInTheDocument();
  expect(getByText('Choose ability')).toBeInTheDocument();
});

test('display all select form options types', () => {
  const { getByTestId } = render(
    <PokemonFilterContextProvider>
      <FilterPokemons />
    </PokemonFilterContextProvider>
  );
  const types = getByTestId('types');
  expect(types.children.length).toBe(17);
});

test('display all select form options abilities', () => {
  const { getByTestId } = render(
    <PokemonFilterContextProvider>
      <FilterPokemons />
    </PokemonFilterContextProvider>
  );
  const abilities = getByTestId('abilities');
  expect(abilities.children.length).toBe(25);
});

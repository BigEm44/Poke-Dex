import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';
import PokemonFilterContextProvider from '../context/PokemonFilterContext';

test('renders component', () => {
  const { getByText } = render(
    <PokemonFilterContextProvider>
      <Header />
    </PokemonFilterContextProvider>
  );
  expect(getByText('Pokedex')).toBeInTheDocument();
});

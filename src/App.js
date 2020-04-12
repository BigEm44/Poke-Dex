import React from 'react';
import PokemonList from './components/PokemonList';
import Header from './components/Header';
import PokemonListContextProvider from './context/PokemonListContext';
import PokemonFilterContextProvider from './context/PokemonFilterContext';

function App() {
  return (
    <div className="app">
      <PokemonListContextProvider>
        <PokemonFilterContextProvider>
          <Header />
          {/* <ModalTrigger /> */}
          <PokemonList />
          {/* <ModalContent /> */}
        </PokemonFilterContextProvider>
      </PokemonListContextProvider>
    </div>
  );
}

export default App;

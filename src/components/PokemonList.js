import React, { useEffect, useContext } from 'react';
import PokemonListDetails from './PokemonListDetails';
import { PokemonListContext } from '../context/PokemonListContext';
import { PokemonFilterContext } from '../context/PokemonFilterContext';

const PokemonList = () => {
  const {
    pokemons,
    nextPage,
    prevPage,
    loading,
    api,
    setPokemons,
    setNextPage,
    setPrevPage,
    setLoading,
    getPokemon,
    getAllPokemon,
    getFilterPokemon,
  } = useContext(PokemonListContext);
  const { typeFilter, menuToggle } = useContext(PokemonFilterContext);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(api);
      setNextPage(response.next);
      setPrevPage(response.previous);
      //let pokemon = await loadingPokemon(response.results); -tak było oryginalnie
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [typeFilter]);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextPage);
    await loadingPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevPage) return;
    setLoading(true);
    let data = await getAllPokemon(prevPage);
    await loadingPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    console.log(typeFilter);

    let singlePokemon = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    //TO-DO przypisać do funkcji, a nie console.loga,
    {
      typeFilter
        ? console.log(
            singlePokemon.filter((type) =>
              type.types.find((el) => el.type.name === 'poison')
            )
          )
        : console.log(singlePokemon);
    }
    singlePokemon = singlePokemon.filter((type) =>
      type.types.find((el) => el.type.name === 'poison')
    );
    //singlePokemon = singlePokemon.filter((el) => el.name === 'bulbasaur');
    setPokemons(singlePokemon);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          <div className="">
            {pokemons.map((pokemon, index) => {
              return <PokemonListDetails key={index} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonList;

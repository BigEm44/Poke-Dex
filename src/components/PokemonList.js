import React, { useEffect, useContext } from 'react';
import PokemonListDetails from './PokemonListDetails';
import { PokemonListContext } from '../context/PokemonListContext';
import { PokemonFilterContext } from '../context/PokemonFilterContext';

const PokemonList = () => {
  const {
    api,
    initialApi,
    filterApi,
    pokemons,
    nextPage,
    prevPage,
    loading,
    setPokemons,
    setNextPage,
    setPrevPage,
    setLoading,
    getPokemon,
    getAllPokemon,
    getFilterPokemon,
  } = useContext(PokemonListContext);
  const {
    typeFilter,
    setTypeFilter,
    abilityFilter,
    menuToggle,
    typeForm,
    setTypeForm,
    abilityForm,
  } = useContext(PokemonFilterContext);

  useEffect(() => {
    console.log(api);

    async function fetchData() {
      //console.log(url);
      // console.log(filterApi);
      // console.log(initialApi);

      // let response = await getAllPokemon(url);
      let response =
        typeFilter || abilityFilter
          ? await getAllPokemon(filterApi)
          : await getAllPokemon(initialApi);
      console.log(filterApi);
      console.log(initialApi);
      // let response = await getAllPokemon(
      //   'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=104'
      // );
      setNextPage(response.next);
      setPrevPage(response.previous);
      //let pokemon = await loadingPokemon(response.results); -tak było oryginalnie
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [typeFilter, abilityFilter]);

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
    let singlePokemon = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    console.log(
      singlePokemon.filter((ability) =>
        ability.abilities.find((el) => el.ability.name === abilityForm)
      )
    );
    //TO-DO CHANGE IN SWITCH
    if (typeFilter) {
      setPokemons(
        singlePokemon.filter((type) =>
          type.types.find((el) => el.type.name === typeForm)
        )
      );
    } else if (abilityFilter) {
      setPokemons(
        singlePokemon.filter((ability) =>
          ability.abilities.find((el) => el.ability.name === abilityForm)
        )
      );
    } else {
      setPokemons(singlePokemon);
    }
  };

  return (
    <div className="wrapper">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          <div className="pokemonList">
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

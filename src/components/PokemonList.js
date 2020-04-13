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
    nameFilter,
    menuToggle,
    typeForm,
    setTypeForm,
    abilityForm,
    nameForm,
  } = useContext(PokemonFilterContext);

  useEffect(() => {
    console.log(api);

    async function fetchData() {
      let response =
        typeFilter || abilityFilter || nameFilter
          ? await getAllPokemon(filterApi)
          : await getAllPokemon(initialApi);
      setNextPage(response.next);
      setPrevPage(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [typeFilter, abilityFilter, nameFilter]);

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

    //console.log(singlePokemon.filter((name) => name.name === nameForm));

    switch (true) {
      case typeFilter:
        setPokemons(
          singlePokemon.filter((type) =>
            type.types.find((el) => el.type.name === typeForm)
          )
        );
        break;
      case abilityFilter:
        setPokemons(
          singlePokemon.filter((ability) =>
            ability.abilities.find((el) => el.ability.name === abilityForm)
          )
        );
        break;
      case nameFilter:
        setPokemons(singlePokemon.filter((name) => name.name === nameForm));
        break;
      default:
        setPokemons(singlePokemon);
    }
  };

  return (
    <div className="wrapper">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="navigateButtons">
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

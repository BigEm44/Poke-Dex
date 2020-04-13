import React, { createContext, useState } from 'react';

export const PokemonFilterContext = createContext();

const PokemonFilterContextProvider = (props) => {
  const [menu, setMenuToggle] = useState(false);
  const menuToggle = () => {
    setMenuToggle(!menu);
    setTypeFilter(false);
    setAbilityFilter(false);
  };
  const pokemonTypes = [
    { name: 'choose', id: 0 },
    { name: 'normal', id: 1 },
    { name: 'fighting', id: 2 },
    { name: 'poison', id: 3 },
    { name: 'ground', id: 4 },
    { name: 'rock', id: 5 },
    { name: 'bug', id: 6 },
    { name: 'ghost', id: 7 },
    { name: 'steel', id: 8 },
    { name: 'fire', id: 9 },
    { name: 'water', id: 10 },
    { name: 'grass', id: 11 },
    { name: 'electric', id: 12 },
    { name: 'psychic', id: 13 },
    { name: 'ice', id: 14 },
    { name: 'dragon', id: 15 },
    { name: 'fairy', id: 16 },
    { name: 'dark', id: 17 },
  ];
  const [typeForm, setTypeForm] = useState('choose');
  const [typeFilter, setTypeFilter] = useState(false);
  const handleTypeChange = (e) => setTypeForm(e.target.value);
  const handleTypeSubmit = (e) => {
    e.preventDefault();
    setMenuToggle(false);
    setTypeFilter(true);
    if (typeForm === 'choose') return;
  };
  const pokemonAbilities = [
    { name: 'choose', id: 0 },
    { name: 'blaze', id: 1 },
    { name: 'chlorophyll', id: 2 },
    { name: 'clear-body', id: 3 },
    { name: 'damp', id: 4 },
    { name: 'flame-body', id: 5 },
    { name: 'flash-fire', id: 6 },
    { name: 'frisk', id: 7 },
    { name: 'gluttony', id: 8 },
    { name: 'guts', id: 9 },
    { name: 'hustle', id: 10 },
    { name: 'infiltrator', id: 11 },
    { name: 'inner-focus', id: 12 },
    { name: 'insomnia', id: 13 },
    { name: 'intimidate', id: 14 },
    { name: 'keen-eye', id: 15 },
    { name: 'leaf-guard', id: 16 },
    { name: 'oblivious', id: 17 },
    { name: 'overgrow', id: 18 },
    { name: 'run-away', id: 19 },
    { name: 'shell-armor', id: 20 },
    { name: 'sniper', id: 21 },
    { name: 'sturdy', id: 22 },
    { name: 'swift-swim', id: 23 },
    { name: 'torrent', id: 24 },
    { name: 'water-absorb', id: 25 },
  ];
  const [abilityForm, setAbilityForm] = useState('choose');
  const [abilityFilter, setAbilityFilter] = useState(false);
  const handleAbilityChange = (e) => setAbilityForm(e.target.value);
  const handleAbilitySubmit = (e) => {
    e.preventDefault();
    setMenuToggle(false);
    setAbilityFilter(true);
  };
  const [nameForm, setNameForm] = useState('');
  const [nameFilter, setNameFilter] = useState(false);
  const handleNameChange = (e) => setNameForm(e.target.value);
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setMenuToggle(false);
    setNameFilter(true);
  };

  return (
    <PokemonFilterContext.Provider
      value={{
        menu,
        pokemonTypes,
        typeForm,
        typeFilter,
        pokemonAbilities,
        abilityForm,
        abilityFilter,
        nameForm,
        nameFilter,
        setMenuToggle,
        menuToggle,
        setTypeFilter,
        setAbilityForm,
        setAbilityFilter,
        handleTypeChange,
        handleTypeSubmit,
        handleAbilityChange,
        handleAbilitySubmit,
        handleNameChange,
        handleNameSubmit,
      }}
    >
      {props.children}
    </PokemonFilterContext.Provider>
  );
};
export default PokemonFilterContextProvider;

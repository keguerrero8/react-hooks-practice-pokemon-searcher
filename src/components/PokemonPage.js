import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  //pokemon list to display exists here
  const [ pokemons, setPokemons ] = useState([])
  const [ searchValue, setSearchValue ] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(pokemonList => setPokemons(pokemonList))
  }, [])

  function handleSearch (event) {
    setSearchValue(event.target.value)
  }

  function addPokemon (newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }

  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchValue.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search handleSearch={handleSearch} searchValue={searchValue}/>
      <br />
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;

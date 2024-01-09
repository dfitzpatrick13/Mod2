import React, { useState, useEffect } from "react";

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  //calling api for search bar
  const fetchPokemonData = async (pokemonName) => {
    try {
      const response = await fetch(
        `https://pokemon-api3.p.rapidapi.com/pokemon?name=${pokemonName}`,
        {
          headers: {
            "x-rapidapi-key": "3558788312msh9e2a10b42f82567p197369jsn4412d29a977e",
            "x-rapidapi-host": "pokemon-api3.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //using api for the list 
  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonNames = [
        "bulbasaur","ivysaur","venusaur", "charmander","charmeleon ","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree",
       
      ];

      const pokemonDataList = await Promise.all(
        pokemonNames.map(async (name) => {
          return fetchPokemonData(name);
        })
      );

      setPokemonList(pokemonDataList);
    };

    fetchPokemonList();
  }, []);

  //handle search
  const handleSearch = async () => {
    if (!searchTerm) return;

    const data = await fetchPokemonData(searchTerm);
    setPokemonData(data);
  };
//evnt change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //handle click for the pokemon grid 
  const handlePokemonClick = async (pokemonName) => {
    const data = await fetchPokemonData(pokemonName);
    setPokemonData(data);
  };
  


  return (
    <div>
      <h1 className="title">Search Pokemon by Name</h1>

      <div className="search-container">

      <input className="search-input"
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleInputChange}
      />
      
      <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <br></br>

      {pokemonData && (
        <div className="pokemondata">
          <h2 className="pokemondata h2">{pokemonData.name}</h2>
          <img className="pokemondata img"
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <p className="pokemondata p">Height: {pokemonData.height}</p>
          <p className="pokemondata p">Weight: {pokemonData.weight}</p>
        </div>
      )}

<div className="pokemonGrid">
  {pokemonList.map((pokemon, index) => (
    <div className="pokemonCard"
      key={index}
      onClick={() => handlePokemonClick(pokemon.name)}
    >
      <img className="pokemon-image"
        
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p >{pokemon.name}</p>
    </div>
  ))}
</div>


      
    </div>
  );
};

export default Pokedex;

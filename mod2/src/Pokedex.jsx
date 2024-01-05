import React, { useState, useEffect } from "react";




const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://pokemon-api3.p.rapidapi.com/pokemon",
          {
            headers: {
              "x-rapidapi-key": "3558788312msh9e2a10b42f82567p197369jsn4412d29a977e",
              "x-rapidapi-host": "pokemon-api3.p.rapidapi.com",
            },
          }
        );

        const data = await response.json();
        setPokemonData(data.results.slice(0, 12)); //first 12 Pokémon
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://pokemon-api3.p.rapidapi.com/pokemon?name=${searchTerm.toLowerCase()}`,
        {
          headers: {
            "x-rapidapi-key": "3558788312msh9e2a10b42f82567p197369jsn4412d29a977e", 
            "x-rapidapi-host": "pokemon-api3.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setPokemonData([data]); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="pokemondata">
        {pokemonData &&
          pokemonData.map((pokemon, index) => (
            <div key={index}>
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <p>Evolutions:</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Abilities:</p>
              <ul>
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      {pokemonData && pokemonData.length === 12 && (
  <div className="pokemon-grid">
    {pokemonData.map((pokemon, index) => (
      <div key={index} className="pokemon-item">
        <img
          src={pokemon.sprites.front_default} // Ensure sprites exist in the data structure
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p> {/* Optionally display the Pokémon name */}
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default Pokedex;

import React, { useState } from "react";

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

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
      console.log(data); // Check the API response in the console
      setPokemonData(data);
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

      {pokemonData && (
        <div className="pokemondata">
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Abilities:</p>

          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
};

export default Pokedex;

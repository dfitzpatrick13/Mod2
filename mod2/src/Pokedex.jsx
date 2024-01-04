import React,{useState} from "react";

const Pokedex = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [pokemonData,setPokemonData] = useState(null)

    const handleSearch = async () => {
        try {
          const response = await fetch('https://pokeapi-stefan-skliarov-v1.p.rapidapi.com/pokemon?name=' + searchTerm.toLowerCase(), {
            headers: {
              'x-rapidapi-key': '3558788312msh9e2a10b42f82567p197369jsn4412d29a977e',
              'x-rapidapi-host': 'pokeapi-stefan-skliarov-v1.p.rapidapi.com',
            },
          });
    
          const data = await response.json();
          setPokemonData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
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
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          </div>
        )}
      </div>     );
}
 
export default Pokedex;
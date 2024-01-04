import Pokedex from "./Pokedex";



const NavBar = () => {

    return ( 
        <nav className="navbar">
            <h1>Pokemon info Site</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/pokedex">Pokedex</a>
                </div>
        </nav>


     );
}
 
export default NavBar;
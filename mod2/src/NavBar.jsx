import Pokeball from "./Pokeball-18.png"


const NavBar = () => {

    return ( 
        <nav className="navbar">
            <h1>Pokemon Information </h1>
            <div className="links">
                <a href="/">Home</a>
                </div>
            <img className="pokeball" src={Pokeball} />
        </nav>


     );
}
 
export default NavBar;
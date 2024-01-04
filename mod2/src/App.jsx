import './App.css'
import NavBar from './NavBar'
import Home from './home'
import Pokedex from "./Pokedex"

function App() {

  return (
    <div>
      <NavBar/>
      <br></br>
        <div className=" title of webstie">
         <h2> Search Information about your favorite pokemon </h2>
        </div>
        <br></br>
      <div className='content'>
        <Pokedex/>
      </div>
    </div>
    


   
  )
}

export default App

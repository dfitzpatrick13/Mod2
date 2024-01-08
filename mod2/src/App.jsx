import './App.css'
import NavBar from './NavBar'

import Pokedex from "./Pokedex"

function App() {

  return (
    <div>
      <NavBar/>
      <br></br>
        <div className=" title of webstie">
        </div>
        <br></br>
      <div className='content'>
        <Pokedex/>
      </div>
    </div>
    


   
  )
}

export default App

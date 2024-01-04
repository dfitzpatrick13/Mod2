import './App.css'
import NavBar from './NavBar'
import Home from './home'
import Pokedex from "./Pokedex"

function App() {

  return (
    <div>
      <NavBar/>
      <div className='content'>
        <Pokedex/>
      </div>
    </div>
    


   
  )
}

export default App

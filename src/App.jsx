import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { PlayGame } from './components/PlayGame'

function App() {

  const [isPlayGame, setPlayGame ] = useState(false);

  const PlayGameFun = ()=>{
    setPlayGame((prev) => !prev);
  }

  return (
    <>
      {isPlayGame ? <PlayGame/> : <Home toggle = {PlayGameFun}/>}
    </>
  )
}

export default App

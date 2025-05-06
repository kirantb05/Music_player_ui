
import './App.css'

import React, { useContext } from 'react'
import Sidebar from './component/Sidebar'
import Player from './component/Player'
import Display from './component/Display'
import {playerContext} from "./context/playerContext"

const App = () => {

  const {audioRef,track}=useContext(playerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
      </div>
      <div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
      
    </div>
  )
}

export default App





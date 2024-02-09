import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Boards from './components/Boards'
import Client from './services/api'
import Board from './components/Board'
import Nav from './components/Nav'
import Band from './components/Band'
import Music from './components/Music'
import Login from './components/Login'

function App() {
  const [boards, setBoards] = useState([])

  const getBoards = async () => {
    let res = await Client.get('/boards')
    console.log(res)
    setBoards(res.data)
  }
  useEffect(() => {
    getBoards()
  }, [])
 

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/boards' element={<Boards boards={boards} />} />
          <Route path='/boards/:id' element={<Board boards={boards} />} />
          <Route path='/band' element={<Band />} />
          <Route path='/music' element={<Music />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

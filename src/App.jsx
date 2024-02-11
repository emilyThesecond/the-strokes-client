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
import Register from './components/Register'
import AudioPlayer from './components/AudioPlayer'

function App() {
  const [boards, setBoards] = useState([])
  const [songs, setSongs] = useState([])
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token)  {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const getBoards = async () => {
    let res = await Client.get('/boards')
    console.log(res)
    setBoards(res.data)
  }
  const getSongs = async () => {
    let res = await Client.get('/songs')
    console.log(res)
    setSongs(res.data)
  }
  useEffect(() => {
    getBoards()
  }, [])

  useEffect(() => {
      getSongs();
  }, []);
 
  
 

  return (
    <div>
      <header>
        <Nav 
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/boards' element={<Boards boards={boards} />} />
          <Route path='/boards/:id' element={<Board boards={boards} />} />
          <Route path='/band' element={<Band />} />
          <Route path='/music' element={<Music songs={songs}/>} />
          <Route path='/login' element={<Login setUser={setUser}/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <AudioPlayer />
      </main>
      <footer></footer>
    </div>
  )
}

export default App

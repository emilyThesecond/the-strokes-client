import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Boards from './components/Boards'
import Client from './services/api'
import Board from './components/Board'
import Nav from './components/Nav'
import Band from './components/Band'
import Login from './components/Login'
import Register from './components/Register'
import Songs from './components/Songs'
import Shows from './components/Shows'
import PostForm from './components/PostForm'


function App() {
  const [boards, setBoards] = useState([])
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
  
  useEffect(() => {
    getBoards()
  }, [])

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
          <Route path='/boards/:id' element={<Board boards={boards} user={user}/>} />
          <Route path='/band' element={<Band />} />
          <Route path='/login' element={<Login setUser={setUser}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/posts' element={<PostForm />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

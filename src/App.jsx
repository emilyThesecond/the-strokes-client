import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Boards from './components/Boards'
import Client from './services/api'

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
      <header></header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/boards' element={<Boards boards={boards} />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

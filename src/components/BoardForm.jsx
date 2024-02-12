import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useState } from 'react'

const BoardForm = (props) => {
    let navigate = useNavigate()
  
    const [newBoard, setNewBoard] = useState({
        title: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await Client.post('/boards', newBoard)
        props.getBoards()
        navigate('/boards')
    }
    const handleChange = (e) => {
        setNewBoard({...newBoard, [e.target.name]: e.target.value })
    }


    return (
        <div>
          <h1>Add a Discussion Board</h1>
          <form onSubmit={handleSubmit}>
          <input type="text" value={newBoard.title} onChange={handleChange} name='title' placeholder='topic' />
          <button type="submit">Submit</button>
    
          </form>
        </div>
      )
}

export default BoardForm
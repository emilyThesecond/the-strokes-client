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
        setNewBoard({title: ''})
        navigate('/boards')
    }
    const handleChange = (e) => {
        setNewBoard({...newBoard, [e.target.name]: e.target.value })
    }


    return (
        <div >
          <h3>Add a Discussion Board</h3>
          <div className='board-form'>

          <form className='subscribe-form' onSubmit={handleSubmit}>
          <input className='subscribe-input' type="text" value={newBoard.title} onChange={handleChange} name='title' placeholder='topic' />
          <button className='subscribe-btn' type="submit">Submit</button>
    
          </form>
          </div>
        </div>
      )
}

export default BoardForm

import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useState } from 'react'

const ShowForm = (props) => {
    let navigate = useNavigate()
  
    const [newShow, setNewShow] = useState({
        venue: '',
        startTime: '',
        endTime: '',
        opener: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await Client.post('/shows', newShow)
        props.getShows()
        navigate('/shows')
    }
    const handleChange = (e) => {
        setNewShow({...newShow, [e.target.name]: e.target.value })
    }


    return (
        <div>
          <h1>Add a show</h1>
          <form onSubmit={handleSubmit}>
          <input type="text" value={newShow.venue} onChange={handleChange} name='venue' placeholder='venue' />
          <input type="text" value={newShow.startTime} onChange={handleChange} name='startTime' placeholder='startTime' />
          <input type="text" value={newShow.endTime} onChange={handleChange} name='endTime' placeholder='endTime' />
          <input type="text" value={newShow.opener} onChange={handleChange} name='opener' placeholder='opener' />
          <button type="submit">Submit</button>
    
          </form>
        </div>
      )
}

export default ShowForm

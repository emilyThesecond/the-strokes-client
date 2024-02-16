import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import SetForm from './SetForm'

const Show = ({shows}) => {
    let { id } = useParams()
    const [show, setShow] = useState('')

    const getShow = async () => {
     let res = await Client.get(`shows/${id}`)
     setShow(res.data)

    }
    useEffect(() => {
        getShow()
     }, [shows, id])

     const handleDeleteSet = async (setId) => {
        try {
            await Client.delete(`/sets/${setId}`)
            getShow()
        } catch (error) {
            console.error('Error deleting set:', error)
        }
    }



  return show ? (
    <div>
        <div>
            <h1>The Strokes At {show.venue}</h1>
           <h3>Start Time: {show.startTime}</h3>
           <h3>End Time: {show.endTime}</h3>
           <h3>Opener: {show.opener}</h3>
           <div>

           </div>
           <div className='paper-list'>
           <ul>
            <h1>SetList</h1>
           {show.set.map(set => (
               <li key={set._id}>{set.title}
                        <button onClick={() => handleDeleteSet(set._id)}>Delete</button>
                        </li>
                    ))}
           </ul>
            </div>
           <div>
            <SetForm show={show}  getShow={getShow}/>
           </div>
        </div>
       
      
    </div>
  ): null
}

export default Show

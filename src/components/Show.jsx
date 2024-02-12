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


  return show ? (
    <div>
        <div>
           <h1>{show.startTime}</h1>
           <h1>{show.endTime}</h1>
           <h1>{show.opener}</h1>
           <ul>
           {show.set.map(set => (
                        <li key={set._id}>{set.title}</li>
                    ))}
           </ul>
           <div>
            <SetForm show={show}  getShow={getShow}/>
           </div>
        </div>
       
      
    </div>
  ): null
}

export default Show

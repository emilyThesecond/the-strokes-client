import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import PostForm from './PostForm'

const Show = ({shows, user}) => {
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
           <h1>The Strokes at {show.Venue}</h1>
           <ul>
           {show.set.map(set => (
                        <li key={set._id}>{set.songs}</li>
                    ))}
           </ul>
           <div>
            <PostForm board={board} user={user} getBoard={getBoard}/>
           </div>
        </div>
       
      
    </div>
  ): null
}

export default Show

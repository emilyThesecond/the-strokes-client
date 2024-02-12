import React from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Shows = () => {
    const[shows, setShows ]  = useState([])
    const getShows = async () => {
        let res = await Client.get('/shows')
        console.log(res)
        setShows(res.data)
      }
      
      useEffect(() => {
        getShows()
      }, [])
    
  return (
    <div>
      <h1>shows</h1>
      {shows.map(show => (
        <div>
            <Link to={`${show._id}`}>
            <h3>The Strokes at {show.venue}</h3>
             </Link>
        </div>
      ))}
    </div>
  )
}

export default Shows

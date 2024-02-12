import React from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Shows = ({ shows }) => {

  return (
    <div>
      <h1>shows</h1>
      <div>

      {shows.map(show => (
        <div>
            <Link to={`${show._id}`}>
            <h3>The Strokes at {show.venue}</h3>
             </Link>
        </div>
      ))}
      </div>
      <h2>Dont see a show?</h2>
      <Link to='/add-show'>
      <h3>Add a Show</h3>
      </Link>
    </div>
  )
}

export default Shows

import React from 'react'
import { Link } from 'react-router-dom'

const Boards = ({boards}) => {
  return (
    <div>
      <h1>boards</h1>
      {boards.map(board => (
        <div>
            <Link to={`${board._id}`}>
            <h3>{board.title}</h3>
             </Link>
        </div>
      ))}
    </div>
  )
}

export default Boards

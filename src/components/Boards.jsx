import React from 'react'
import { Link } from 'react-router-dom'
import BoardForm from './BoardForm'

const Boards = ({boards, getBoards}) => {
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
      <div>
        <BoardForm getBoards={getBoards}/>
      </div>
    </div>
  )
}

export default Boards

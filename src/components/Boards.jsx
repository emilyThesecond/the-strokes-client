import React from 'react'
import { Link } from 'react-router-dom'
import BoardForm from './BoardForm'

const Boards = ({ boards, getBoards }) => {
    return (
        <div className='boards'>
            <h1 className='boards-heading'>Discussion Boards</h1>

            <div className='board'>
                {boards.map(board => (
                    <div>
                        <Link to={`${board._id}`}>
                            <h3>{board.title}</h3>
                        </Link>
                    </div>
                ))}

            </div>
            <div>
                <BoardForm getBoards={getBoards} />
            </div>
        </div>
    )
}

export default Boards

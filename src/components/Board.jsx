import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'


const Board = ({boards}) => {
    let { id } = useParams()
    const [board, setBoard] = useState('')
    useEffect(() => {
        const getBoard = async () => {
         let res = await Client.get(`boards/${id}`)
         setBoard(res.data)
 
        }
        getBoard()
     }, [boards, id])


  return board ? (
    <div>
        <div>
           <h1>{board.title}</h1>
           <ul>
           {board.posts.map(post => (
                        <li key={post._id}>{post.entry}</li>
                    ))}
           </ul>
        </div>
       
      
    </div>
  ): null
}

export default Board

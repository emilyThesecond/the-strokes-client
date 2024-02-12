import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import PostForm from './PostForm'

const Board = ({boards, user}) => {
    let { id } = useParams()
    const [board, setBoard] = useState('')
    const getBoard = async () => {
     let res = await Client.get(`boards/${id}`)
     setBoard(res.data)

    }
    useEffect(() => {
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
           <div>
            <PostForm board={board} user={user} getBoard={getBoard}/>
           </div>
        </div>
       
      
    </div>
  ): null
}

export default Board

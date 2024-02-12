import React, { useState } from 'react'
import Client from '../services/api';

const PostForm = ({ board,user,getBoard }) => { 
    const [entry, setEntry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        entry, 
        user: user.id,
    }
    try {
      await Client.post(`/boards/${board._id}/posts`, data)
      setEntry('')
      getBoard()
    } catch (error) {
      console.error('Error posting:', error)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your post..."
        required
      />
      <button type="submit">Post</button>
    </form>
  )
}

export default PostForm;
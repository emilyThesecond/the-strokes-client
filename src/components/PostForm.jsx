import React, { useState } from 'react';
import Client from '../services/api';
import { Link } from 'react-router-dom';

const PostForm = ({ board, user, getBoard }) => {
    const [entry, setEntry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            entry,
            user: user.id,
        };
        try {
            await Client.post(`/boards/${board._id}/posts`, data);
            setEntry('');
            getBoard();
        } catch (error) {
            console.error('Error posting:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Write your post..."
                required
            />
            {user ? ( // Check if user is logged in
                <button type="submit">Post</button>
            ) : (
                <Link to='/login' >
                <p className='login-notice'>Please log in to post</p>
                </Link>
            )}
        </form>
    );
};

export default PostForm;
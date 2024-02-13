import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../services/api';
import PostForm from './PostForm';

const Board = ({ boards, user }) => {
    let { id } = useParams();
    const [board, setBoard] = useState(null); // Initialized to null

    const getBoard = async () => {
        let res = await Client.get(`boards/${id}`);
        setBoard(res.data);
    };

    useEffect(() => {
        getBoard();
    }, [boards, id]);

    const handleDelete = async (boardId, postId) => {
        if (window.confirm('Are you sure you want to delete this post?')) { // Confirmation before deletion
            try {
                await Client.delete(`/boards/${boardId}/posts/${postId}`);
                getBoard(); // Refresh the board
            } catch (error) {
                console.error("Error deleting post:", error);
                // Optionally, inform the user of the failure
            }
        }
    };

    return board ? (
        <div>
            <h1>{board.title}</h1>
            <ul>
                {board.posts.map(post => (
                    <div key={post._id}> {/* Key should be here */}
                        <li>{post.entry}</li>
                        <button onClick={() => handleDelete(board._id, post._id)}>x</button>
                    </div>
                ))}
            </ul>
            <PostForm board={board} user={user} getBoard={getBoard} />
        </div>
    ) : null; // Handle case where board is null
};

export default Board;
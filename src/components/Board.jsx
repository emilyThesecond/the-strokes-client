import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../services/api';
import PostForm from './PostForm';
import Modal from './Modal';

const Board = ({ boards, user }) => {
    let { id } = useParams()
    const [board, setBoard] = useState(null)
    const [updatedEntry, setUpdatedEntry] = useState('')
    const [postIdToUpdate, setPostIdToUpdate] = useState(null);
    const [showModal, setShowModal] = useState(false) // State to toggle modal

    const getBoard = async () => {
        let res = await Client.get(`boards/${id}`)
        setBoard(res.data)
    }

    useEffect(() => {
        getBoard()
    }, [boards, id])

    const handleDelete = async (boardId, postId) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await Client.delete(`/boards/${boardId}/posts/${postId}`)
                getBoard();
            } catch (error) {
                console.error("Error deleting post:", error)
            }
        }
    };

    const handleUpdate = async (boardId, postId) => {
        try {
            await Client.put(`/boards/${boardId}/posts/${postId}`, { entry: updatedEntry })
            setPostIdToUpdate(null)
            getBoard()
            setShowModal(false)
        } catch (error) {
            console.error("Error updating post:", error)
        }
    }
    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return board ? (
        <div>
            <h1>{board.title}</h1>
            <ul>
                {board.posts.map(post => (
                    <div key={post._id}>
                        <li>{post.entry}</li>
                        <button onClick={() => handleDelete(board._id, post._id)}>Delete</button>
                        <button onClick={() => { setPostIdToUpdate(post._id); openModal() }}>Edit</button>
                    </div>
                ))}
            </ul>
            <PostForm board={board} user={user} getBoard={getBoard} />
            {showModal && (
                <Modal closeModal={closeModal}>
                    <textarea
                        value={updatedEntry}
                        onChange={(e) => setUpdatedEntry(e.target.value)}
                        placeholder="Edit your post..."
                        required
                    />
                    <button onClick={() => handleUpdate(board._id, postIdToUpdate)}>Save</button>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            )}
        </div>
    ) : null;
};

export default Board;

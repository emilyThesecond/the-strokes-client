import { useState } from 'react'
import Client from '../services/api'

const SetForm = ({ show, getShow }) => {
    const [set, setSet] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: set
        }
        try {
            await Client.post(`/shows/${show._id}/add-set`, data)
            setSet('')
            getShow()
        } catch (error) {
            console.error('Error posting:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={set}
                onChange={(e) => setSet(e.target.value)}
                placeholder="Add a song to setlist"
                required
            />
            <button type="submit">Post</button>
        </form>
    )
}
export default SetForm


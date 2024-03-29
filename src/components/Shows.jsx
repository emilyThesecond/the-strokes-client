import React from 'react'
import { Link } from 'react-router-dom'
import ShowForm from './ShowForm'

const Shows = ({ shows, getShows }) => {

    return (
        <div>
            <h1>Shows</h1>
            <div>

                {shows.map(show => (
                    <div>
                        <Link to={`${show._id}`}>
                            <h3>The Strokes at {show.venue}</h3>
                        </Link>
                    </div>
                ))}
            </div>
            <h2>Dont see a show?</h2>

            <ShowForm getShows={getShows} />
        </div>
    )
}

export default Shows

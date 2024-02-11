import React from 'react'

const DisplayTrack = ({ currentTrack }) => {
  return (
    <div>
      <h1>Display Track component</h1>
      <audio src={currentTrack.src} controls />
    </div>
  )
}

export default DisplayTrack

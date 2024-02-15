import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='the-strokes'>THE STROKES</h1>
      <div>
        {/* Welcome to The Strokes Fan Page. Listen to music, connect with the community, view and add set lists! */}
      {/* <div><iframe width="1043" height="587" src="https://www.youtube.com/embed/1-W6whvn8Bs" title="The Strokes - Selfless (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> */}
    {/* </div> */}
    {/* <div><iframe width="200vmin" height="70vmin" src="https://www.youtube.com/embed/pjmaj-wtAPs" title="The Strokes - I&#39;ll Try Anything Once (&quot;You Only Live Once&quot; demo) (Heart In a Cage B-side)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> */}
    {/* <div> */}
       <div >
        <img className='blog-post-image' src="https://media.bandsintown.com/300x300/16282043.webp" alt="chicago show poster" />
       <div>
        <h2>New Show In Chicago!</h2>
        <h4>March 15, 2024</h4>
        <Link to="https://go.seated.com/tour-events/2c6a5e7b-2a3a-4c84-8600-ed23cdfde27c">
        <button>Get Tickets</button>
        </Link>
       </div>
       </div>
    </div>
    </div>
    
  )
}

export default Home

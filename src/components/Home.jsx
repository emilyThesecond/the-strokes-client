import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='the-strokes'>THE STROKES</h1>
      <h3>News Board</h3>
      <div>
        {/* Welcome to The Strokes Fan Page. Listen to music, connect with the community, view and add set lists! */}
      {/* <div><iframe width="1043" height="587" src="https://www.youtube.com/embed/1-W6whvn8Bs" title="The Strokes - Selfless (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> */}
    {/* </div> */}
    {/* <div><iframe width="200vmin" height="70vmin" src="https://www.youtube.com/embed/pjmaj-wtAPs" title="The Strokes - I&#39;ll Try Anything Once (&quot;You Only Live Once&quot; demo) (Heart In a Cage B-side)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> */}
    {/* <div> */}
       <div className='blog-post'>
        <img className='blog-post-image' src="https://media.bandsintown.com/300x300/16282043.webp" alt="chicago show poster" />
       <div>
        <h2>New Show In Chicago!</h2>
        <h4>March 15, 2024</h4>
        <Link to="https://go.seated.com/tour-events/2c6a5e7b-2a3a-4c84-8600-ed23cdfde27c">
        <button>Get Tickets</button>
        </Link>
       </div>
       </div>
       <div className='blog-post'>
        <img className='blog-post-image' src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/385285815_18390896269011862_2663206980847649250_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=cRJvNwZ0W0YAX8kpBwf&_nc_ht=scontent-ord5-1.xx&oh=00_AfCqpNey-_Z1qxWM2YwOeWQmhCvbARDc5PQ4MhAQQEwkBg&oe=65D257A5" alt="new t-shirt" />
       <div>
        <div className='post-words'>
        <h2>New Shirt Drop!</h2>
        <h4>March 15, 2024</h4>
        <Link to="https://shop.thestrokes.com/collections/merch/products/the-strokes-s-tee?fbclid=IwAR1hti895NaS6NzsbASs5Deu06MqdOlq9yweM-SHfjeUFYfpomM0no4MTc0&variant=47886503018727">
        <button>Buy T-Shirt</button>
        </Link>
        </div>
       </div>
       </div>
    </div>
    </div>
    
  )
}

export default Home

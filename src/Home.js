import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
    <header className='home-header'>
        <h2>Home Page</h2>
    </header> 
        <div className='problem-1'>
        <h3>Problem 1</h3>
        <Link to = '/user/1' className='link'>User 1</Link>
        <Link to = '/user/2' className='link'>User 2</Link>
        <Link to = '/user/3' className='link'>User 3</Link>
        </div>

        <div className='problem-2'>
            <h3>Problem 2</h3>
            <Link to='/dashboard' className='link'>Dashboard</Link>
        </div>
    </div>
  )
}

export default Home
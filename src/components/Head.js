import React from 'react'
import { Link } from 'react-router-dom'
import './HeadStyles.css'

import space from '../assets/space.jpg'

const Head = () => {
    return (
        <div className='hero'>
            <img src={space} id='space' />
            <div className='content'>
                <h1>SPACE TRAVEL</h1>
                <p>A unique experience - An Eternal Memory</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn'>Launch</Link>
                </div>
            </div>
        </div>
    )
}

export default Head

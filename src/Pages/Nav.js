import React from 'react'

const Nav = () => {
    return (
        <div className='nav_wrapper'>
            <div className='container'>
                <nav className='nav_items'>
                    <div className='nav_logo'>
                        <h2><a href='/'>MyWebsite</a></h2>
                    </div>
                    <ul className='nav_links'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                    <div className='nav_buttons'>
                        <button><a href='/login'>Login</a></button>
                        <button><a href='/signup'>Sign Up</a></button>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Nav
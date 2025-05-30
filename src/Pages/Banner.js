import React from 'react'

const Banner = () => {
    return (
        <div className='banner_wrapper'>
            <div className='container'>
                <div className='banner'>
                    <div className='banner_content'>
                        <h1>Welcome to Our Website</h1>
                        <p>Discover amazing content and connect with us!</p>
                        <button className='banner_button'>Get Started</button>
                    </div>
                    <div className='banner_image'>
                        <img src='https://via.placeholder.com/600x400' alt='Banner' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
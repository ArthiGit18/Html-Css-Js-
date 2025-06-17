import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const AboutUs = () => {
    return (
        <>
            <Nav />
            <div className='AboutUs_wrapper'>
                <div className='About_myself'>
                    <div className='aboutus_img'>
                        {/* <img src="./assets/aboutUs/1.png" alt="My-image-as- anime" /> */}
                        <img src="./assets/aboutUs/5.png" alt="My-image-as- anime" />
                    </div>
                    <div className='abutous_my_content'>
                        <h2>About Myself</h2>
                        <p>Ipsum aliquip sit irure laborum consequat reprehenderit
                            proident nostrud. Fugiat sit magna quis dolor enim sunt
                            tempor nulla. Consectetur tempor ex sit ex anim laborum
                            consequat sunt. Aliquip consectetur est enim dolor quis
                            aliqua velit.</p>
                    </div>
                </div>

                <h2>Our Team</h2>
                <div className='aboutus_content'>
                    <div className='card1'>
                        <img src="./assets/aboutUs/2.png" alt="partner1" />
                        <div className='partner_content'>
                            <h2>Hellen</h2>
                            <p>Ea deserunt cupidatat elit deserunt nulla est in magna sunt sit laboris laboris tempor.</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <img src="./assets/aboutUs/3.png" alt="partner1" />
                        <div className='partner_content'>
                            <h2>Miller</h2>
                            <p>Ea deserunt cupidatat elit deserunt nulla est in magna sunt sit laboris laboris tempor.</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <img src="./assets/aboutUs/4.png" alt="partner1" />
                        <div className='partner_content'>
                            <h2>ARon</h2>
                            <p>Ea deserunt cupidatat elit deserunt nulla est in magna sunt sit laboris laboris tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs
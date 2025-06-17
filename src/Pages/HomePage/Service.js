import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Service = () => {
    return (
        <>
            <Nav />
            <div className='service_wrapper'>

                <div className='container'>
                    <h2>Our Services</h2>
                    <div className='cards'>
                        <div className='card'>
                            <a href="/html-tags"><div className='card_img'>
                                <img src='./assets/cards/1.png' alt='Service Icon' />
                            </div></a>
                            <h2>HTML - HyperText Markup Language</h2>
                            <p>
                                HTML is the standard markup language used to create the structure of web pages. It defines elements like headings, paragraphs, images, and links.
                            </p>
                        </div>
                        <div className='card'>
                            <a href="/css-tags"><div className='card_img'>
                                <img src='./assets/cards/2.png' alt='Service Icon' />
                            </div></a>
                            <h2>CSS - Cascading Style Sheets</h2>
                            <p>
                                CSS is used to style and layout web pages — for example, to change fonts, colors, spacing, and responsiveness.
                            </p>
                        </div>
                        <div className='card'>
                            <a href="/javascript-elements-functions">
                                <div className='card_img'>
                                    <img src='./assets/cards/1.png' alt='Service Icon' />
                                </div>
                            </a>
                            <h2>JavaScript</h2>
                            <p>
                                JavaScript is a programming language that adds interactivity to websites, such as form validations, button clicks, animations, and dynamic content.
                            </p>
                        </div>
                        <div className='card'>
                            <a href="/important-Faqs">
                                <div className='card_img'>
                                    <img src='./assets/cards/1.png' alt='Service Icon' />
                                </div>
                            </a>
                            <h2>FAQs</h2>
                            <p>
                                Important FAQs for HTML, CSS, JAVASCRIPT
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Service
import React, {useRef, useEffect} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { NavLink } from 'react-router-dom';

const Service = () => {

    const MAX_LENGTH = 60;

    const faqContainerRef = useRef(null);

    useEffect(() => {
        const paragraphs = faqContainerRef.current.querySelectorAll('p');
        paragraphs.forEach(p => {
            if (p.textContent.length > MAX_LENGTH) {
                p.textContent = p.textContent.slice(0, MAX_LENGTH) + '...';
            }
        });
    }, []);
    return (
        <>
            <Nav />
            <div className='service_wrapper'>

                <div className='container'>
                    <h2>Our Services</h2>
                    <div className='cards'  ref={faqContainerRef}>
                        <div className='card'>
                            <NavLink to="/html-tags"><div className='card_img'>
                                <img src=' ./assets/icons/html/1.png' alt='Service Icon' />
                            </div></NavLink>
                            <h2>HTML - HyperText Markup Language</h2>
                            <p>
                                HTML is the standard markup language used to create the structure of web pages. It defines elements like headings, paragraphs, images, and links.
                            </p>
                        </div>
                        <div className='card'>
                            <NavLink to="/css-tags"><div className='card_img'>
                                <img src=' ./assets/icons/html/2.png' alt='Service Icon' />
                            </div></NavLink>
                            <h2>CSS - Cascading Style Sheets</h2>
                            <p>
                                CSS is used to style and layout web pages — for example, to change fonts, colors, spacing, and responsiveness.
                            </p>
                        </div>
                        <div className='card'>
                            <NavLink to="/javascript-elements-functions">
                                <div className='card_img'>
                                    <img src=' ./assets/icons/html/3.png' alt='Service Icon' />
                                </div>
                            </NavLink>
                            <h2>JavaScript</h2>
                            <p>
                                JavaScript is a programming language that adds interactivity to websites, such as form validations, button clicks, animations, and dynamic content.
                            </p>
                        </div>
                        <div className='card'>
                            <NavLink to="/important-Faqs">
                                <div className='card_img'>
                                    <img src=' ./assets/icons/html/5.png' alt='Service Icon' />
                                </div>
                            </NavLink>
                            <h2>FAQs</h2>
                            <p>
                                Important FAQs for HTML, CSS, JAVASCRIPT, React JS
                            </p>
                        </div>
                        <div className='card'>
                            <NavLink to="/number-programming">
                                <div className='card_img'>
                                    <img src='./assets/icons/html/6.png' alt='Service Icon' />
                                </div>
                            </NavLink>
                            <h2>Number Programming</h2>
                            <p>
                                Important Concepts on Number Programming fro Javascript and Java
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
import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const MAX_LENGTH = 60;
const Cards = () => {
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
        <div className='cards_wrapper'>
            <div className='container'>
                <h2>Our Services</h2>
                <div className='cards' ref={faqContainerRef}>
                    <div className='card'>
                        <NavLink to="/html-tags">
                        <div className='card_img'>
                            <img src='./assets/icons/html/1.png' alt='Service Icon' />
                        </div>
                        </NavLink>
                        <h2>HTML - HyperText Markup Language</h2>
                        <p>
                            HTML is the standard markup language used to create the structure of web pages. It defines elements like headings, paragraphs, images, and links.
                        </p>
                    </div>
                    <div className='card'>
                        <NavLink to="/css-tags"><div className='card_img'>
                            <img src='./assets/icons/html/2.png' alt='Service Icon' />
                        </div></NavLink>
                        <h2>CSS - Cascading Style Sheets</h2>
                        <p>
                            CSS is used to style and layout web pages — for example, to change fonts, colors, spacing, and responsiveness.
                        </p>
                    </div>
                    <div className='card'>
                        <NavLink to="/javascript-elements-functions">
                            <div className='card_img'>
                                <img src='./assets/icons/html/3.png' alt='Service Icon' />
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
                                <img src='./assets/icons/html/5.png' alt='Service Icon' />
                            </div>
                        </NavLink>
                        <h2>FAQs</h2>
                        <p>
                            Important FAQs for HTML, CSS, JAVASCRIPT
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards 

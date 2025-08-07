import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useAuthModal } from '../../context/AuthModalContext';

const MAX_LENGTH = 60;

const Cards = () => {
    const faqContainerRef = useRef(null);
    const navigate = useNavigate();
    const [loginPromptOpen, setLoginPromptOpen] = useState(false);
    const { openSignup } = useAuthModal();


    useEffect(() => {
        const paragraphs = faqContainerRef.current.querySelectorAll('p');
        paragraphs.forEach(p => {
            if (p.textContent.length > MAX_LENGTH) {
                p.textContent = p.textContent.slice(0, MAX_LENGTH) + '...';
            }
        });
    }, []);

    


    const handleCardClick = (path) => {
        const user = localStorage.getItem("user");
        if (user) {
            navigate(path);
        } else {
            setLoginPromptOpen(true);
            openSignup();
        }
    };

    const handleLoginRedirect = () => {
        setLoginPromptOpen(false);
        // Redirect or open login dialog based on your Nav component
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='cards_wrapper'>
            <div className='container'>
                <h2>Our Services</h2>
                <div className='cards' ref={faqContainerRef}>
                    <div className='card' onClick={() => handleCardClick("/html-tags")}>
                        <div className='card_img'>
                            <img src='./assets/icons/html/1.png' alt='Service Icon' />
                        </div>
                        <h2>HTML - HyperText Markup Language</h2>
                        <p>HTML is the standard markup language used to create the structure of web pages...</p>
                    </div>

                    <div className='card' onClick={() => handleCardClick("/css-tags")}>
                        <div className='card_img'>
                            <img src='./assets/icons/html/2.png' alt='Service Icon' />
                        </div>
                        <h2>CSS - Cascading Style Sheets</h2>
                        <p>CSS is used to style and layout web pages...</p>
                    </div>

                    <div className='card' onClick={() => handleCardClick("/javascript-elements-functions")}>
                        <div className='card_img'>
                            <img src='./assets/icons/html/3.png' alt='Service Icon' />
                        </div>
                        <h2>JavaScript</h2>
                        <p>JavaScript is a programming language that adds interactivity to websites...</p>
                    </div>

                    <div className='card' onClick={() => handleCardClick("/important-Faqs")}>
                        <div className='card_img'>
                            <img src='./assets/icons/html/5.png' alt='Service Icon' />
                        </div>
                        <h2>FAQs</h2>
                        <p>Important FAQs for HTML, CSS, JAVASCRIPT</p>
                    </div>
                </div>
            </div>

            {/* Login Prompt Dialog */}
            <Dialog
                open={loginPromptOpen}
                onClose={() => setLoginPromptOpen(false)}
                className="custom_dialog"
                PaperProps={{
                    style: {
                        borderRadius: '16px',
                        padding: '20px',
                        maxWidth: '90%',
                        width: '400px',
                    },
                }}
            >
                <DialogTitle>Please login or sign up to continue</DialogTitle>
                <DialogActions>
                    <Button onClick={() => setLoginPromptOpen(false)}>Cancel</Button>
                    <Button onClick={handleLoginRedirect} autoFocus>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Cards;

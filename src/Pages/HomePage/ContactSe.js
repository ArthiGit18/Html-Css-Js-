import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const ContactSe = () => {
    return (
        <>
            <Nav />
            <div className='contact_wrapper'>
                <div className='container' style={{marginTop: "50px"}}>
                    <h2>Contact Us</h2>
                    <form className='contact_form'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' required />

                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' required />

                        <label htmlFor='message'>Message:</label>
                        <textarea id='message' name='message' rows='4' required></textarea>

                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactSe
import React from 'react'

const Footer = () => {
    return (
        <footer className="edu-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <img src="./eduTechB.png" at="logo" />
                    <h2>Edu<span>Tech</span></h2>
                    <p>Empowering learners with technology-driven education.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Courses</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Blogs</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                <div className='footer-links'>
                    <h3>Our Course</h3>
                    <ul>
                        <li><a href="/">HTML</a></li>
                        <li><a href="/">CSS</a></li>
                        <li><a href="/">JAVASCRIPT</a></li>
                        <li><a href="/">FAQS</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>📧 info@edutech.com</p>
                    <p>📍 Chennai, Tamil Nadu</p>
                    <p>📞 +91 98765 43210</p>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 EduTech. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
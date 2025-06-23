import React, {useState} from 'react'
import Javascriptfaqs from './FAQs/Javascriptfaqs'
import HTMLfaqs from './FAQs/HTMLfaqs'
import Nav from './HomePage/Nav'
import Footer from './HomePage/Footer'
import CSSfaqs from './FAQs/CSSfaqs'
import Reactfaqs from './FAQs/Reactfaqs'


const sections = [
    { title: "Javascript - Important FAQs", component: <Javascriptfaqs /> },
    { title: "HTML - Important FAQs", component: <HTMLfaqs /> },
    { title: "CSS - Important FAQs", component: <CSSfaqs /> },
    { title: "React - Important FAQs", component: <Reactfaqs /> },
]
const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
        <Nav />
            <div className="html-container" style={{marginTop:"100px"}}>


                {sections.map((section, index) => (
                    <div key={index} className="accordion">
                        <button
                            className="accordion-header"
                            onClick={() => toggleSection(index)}
                        >
                            {section.title}
                        </button>
                        {openIndex === index && (
                            <div className="accordion-content">
                                {section.component}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default FAQs
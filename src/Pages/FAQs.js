import React, {useState} from 'react'
import Javascriptfaqs from './FAQs/Javascriptfaqs'


const sections = [
    { title: "Javascript - Important FAQs", component: <Javascriptfaqs /> },
]
const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            {/* <Nav /> */}
            <div className="html-container">


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
        </>
    )
}

export default FAQs
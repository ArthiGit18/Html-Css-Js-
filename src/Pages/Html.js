import React, { useState } from 'react'
import Tags from './Html Tags/Tags'
import Nav from './HomePage/Nav';
import Footer from './HomePage/Footer';
import SemanticTags from './Html Tags/SemanticTags'
import FormattingTags from './Html Tags/FormattingTags'
import HtmlElements from './Html Tags/HtmlElements'
import FormTags from './Html Tags/FormTags'
import ImgVideo from './Html Tags/ImgVideo'
import TableTag from './Html Tags/TableTag'
import Inspiration from './Html Tags/Inspiration'
import List from './Html Tags/List'
import "./Html Tags/html.css"

const sections = [
    { title: "HTML Basic Tags", component: <Tags /> },
    { title: "Semantic Tags", component: <SemanticTags /> },
    { title: "Formatting Tags", component: <FormattingTags /> },
    { title: "HTML Elements (Inline, Block, Inline & Block)", component: <HtmlElements /> },
    { title: "Form Tags and Inputs", component: <FormTags /> },
    { title: "Table Tags", component: <TableTag /> },
    { title: "Image, Video, Audio, Marquee", component: <ImgVideo /> },
    { title: "List Tag & Types", component: <List /> },
]

const Html = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            <Nav />
            <div className="html-container" style={{ marginTop: "70px" }}>
                {/* <Nav /> */}
                <Inspiration />

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

export default Html

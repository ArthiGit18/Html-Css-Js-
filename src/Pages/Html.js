import React, { useState } from 'react'
import Tags from './Html Tags/Tags'
import SemanticTags from './Html Tags/SemanticTags'
import FormattingTags from './Html Tags/FormattingTags'
import HtmlElements from './Html Tags/HtmlElements'
import FormTags from './Html Tags/FormTags'
import ImgVideo from './Html Tags/ImgVideo'
import TableTag from './Html Tags/TableTag'
import Nav from './Nav'

const sections = [
    { title: "HTML Basic Tags", component: <Tags /> },
    { title: "Semantic Tags", component: <SemanticTags /> },
    { title: "Formatting Tags", component: <FormattingTags /> },
    { title: "HTML Elements (Inline, Block)", component: <HtmlElements /> },
    { title: "Form Tags and Inputs", component: <FormTags /> },
    { title: "Table Tags", component: <TableTag /> },
    { title: "Image, Video, Audio, Marquee", component: <ImgVideo /> },
]

const Html = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
        {/* <Nav /> */}
        <div className="html-container">
            {/* <Nav /> */}
            <section class="inspiration">
                <h2>🚀 To Learn HTML, Here Are a Few Things You Must Know</h2>
                <p>HTML is the foundation of every website. Whether you're building a simple page or a complex web app, mastering these concepts will set you on the right path:</p>
                <ul>
                    <li>🔤 Understanding Basic HTML Tags (like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>)</li>
                    <li>📐 Knowing the Structure of an HTML Document</li>
                    <li>🏷️ Semantic Tags for Meaningful Layout</li>
                    <li>🎨 Integrating CSS for Styling</li>
                    <li>🧠 Practicing with Forms, Images, and Tables</li>
                    <li>🔗 Linking Internal & External Resources</li>
                    <li>📱 Learning Responsive Design Basics</li>
                </ul>
                <p>With practice and consistency, you’ll be building modern, accessible websites in no time!</p>
            </section>

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

export default Html

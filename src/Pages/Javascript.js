import React, { useState } from 'react'
import Inspiration from './Javascript Folder/Inspiration'
import "./Javascript Folder/js.scss";
import Concepts from './Javascript Folder/Concepts';
import Variables from './Javascript Folder/Variables';
import Datatypes from './Javascript Folder/Datatypes';
import Operators from './Javascript Folder/Operators';
import ControlFlowstm from './Javascript Folder/ControlFlowstm';
import Functions from './Javascript Folder/Functions';
import Arrays from './Javascript Folder/Arrays';
import Objects from './Javascript Folder/Objects';
import DOM from './Javascript Folder/DOM';
import DOM2 from './Javascript Folder/DOM2';


const sections = [
    { title: "Key Concepts to Know in Javascript", component: <Concepts /> },
    { title: "Variables Javascript", component: <Variables /> },
    { title: "Datatypes Javascript", component: <Datatypes /> },
    { title: "Operators Javascript", component: <Operators /> },
    { title: "Control Flow Statement", component: <ControlFlowstm /> },
    { title: "Functions", component: <Functions /> },
    { title: "Arrays", component: <Arrays /> },
    { title: "Objects", component: <Objects /> },
    { title: "DOM", component: <DOM /> },
    { title: "DOM - part 2", component: <DOM2 /> },
]

const Javascript = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            {/* <Nav /> */}
            <div className="html-container">
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
        </>
    )
}

export default Javascript
import React, { useState } from 'react'
import Inspiration from './Css Tags/Inspiration'
import Selectors from './Css Tags/Selectors'
import './Css Tags/Css.scss'
import CssAdding from './Css Tags/CssAdding'
import Colors from './Css Tags/Colors'
import TextProperty from './Css Tags/TextProperty'
import Background from './Css Tags/Background'
import BackgroundImg from './Css Tags/BackgroundImg'
import Border from './Css Tags/Border'
import BoxShadow from './Css Tags/BoxShadow'
import BoxSizing from './Css Tags/BoxSizing'
import Transistion from './Css Tags/Transistion'
import Transform from './Css Tags/Transform'
import Overflow from './Css Tags/Overflow'
import DisplayProperty from './Css Tags/DisplayProperty'
import PositionProperty from './Css Tags/PositionProperty'


const sections = [
    { title: "Css Adding Methods", component: <CssAdding /> },
    { title: "Css Selectors and Its Types", component: <Selectors /> },
    { title: "Css Colors", component: <Colors /> },
    { title: "Text Property", component: <TextProperty /> },
    { title: "Background Property", component: <Background /> },
    { title: "Background Image Property", component: <BackgroundImg /> },
    { title: "Border Property", component: <Border /> },
    { title: "Box Shadow Property", component: <BoxShadow /> },
    { title: "Box Sizing Property", component: <BoxSizing /> },
    { title: "Transition Property", component: <Transistion /> },
    { title: "Transform Property", component: <Transform /> },
    { title: "Overflow Property", component: <Overflow /> },
    { title: "Display Property", component: <DisplayProperty /> },
    { title: "Position Property", component: <PositionProperty /> },
]

const Css = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div className="html-container">
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
    )
}

export default Css
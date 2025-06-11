import React from 'react'

const TextProperty = () => {
    return (
        <div class="css_text-container">
            <h1>🖋️ CSS Text Properties</h1>

            {/* <!-- Text Color --> */}
            <section class="css_text-box-text">
                <h2>🎨 Text Color: <code>color</code></h2>
                <p class="css_text-color">This text is red using <code>color: red;</code></p>
            </section>

            {/* <!-- Font Size --> */}
            <section class="css_text-box-text">
                <h2>🔠 Font Size: <code>font-size</code></h2>
                <p class="css_font-size">This text is 24px using <code>font-size: 24px;</code></p>
            </section>

            <section class="css_text-box-text">
                <h2>⚖️ Font Weight: <code>font-weight</code></h2>
                <p class="css_font-weight-bold">This is bold text using <code>font-weight: bold;</code></p>
                <p class="css_font-weight-700">This is 700 weight text using <code>font-weight: 700;</code></p>
                <p class="css_font-weight-normal">This is normal text using <code>font-weight: normal;</code></p>
            </section>

            {/* <!-- Text Shadow --> */}
            <section class="css_text-box-text">
                <h2>🌫️ Text Shadow: <code>text-shadow</code></h2>
                <p class="css_text-shadow">
                    This text has a shadow using: <br />
                    <code>text-shadow: 2px 2px 4px rgba(0,0,0,0.5);</code><br />
                    <ul>
                        <li><code>2px</code> &rarr; horizontal shadow</li>
                        <li><code>2px</code> &rarr; vertical shadow</li>
                        <li><code>4px</code> &rarr; blur radius</li>
                        <li><code>rgba(0,0,0,0.5)</code> &rarr; shadow color</li>
                    </ul>
                </p>
            </section>

            {/* <!-- Text Align --> */}
            <section class="css_text-box-text">
                <h2>📐 Text Align: <code>text-align</code></h2>
                <p class="css_text-align-center">This text is centered using <code>text-align: center;</code></p>
                <p class="css_text-align-right">This text is right-aligned using <code>text-align: right;</code></p>
                <p class="css_text-align-justify">This text is justified using <code>text-align: justify;</code></p>
                <p class="css_text-align-start">This text is start-aligned using <code>text-align: start;</code></p>
                <p class="css_text-align-end">This text is end-aligned using <code>text-align: end;</code></p>
            </section>

            {/* <!-- Text Transform --> */}
            <section class="css_text-box-text">
                <h2>🔠 Text Transform: <code>text-transform</code></h2>
                <p class="css_text-uppercase">This text is UPPERCASE using <code>text-transform: uppercase;</code></p>
                <p class="css_text-lowercase">THIS TEXT IS lowercase using <code>text-transform: lowercase;</code></p>
                <p class="css_text-capitalize">this text is Capitalized using <code>text-transform: capitalize;</code></p>
                <p class="css_text-none">Text remains unchanged using <code>text-transform: none;</code></p>
            </section>

            {/* <!-- Line Height --> */}
            <section class="css_text-box-text">
                <h2>📏 Line Height: <code>line-height</code></h2>
                <p class="css_line-height">
                    This is an example of paragraph with increased line height.<br />
                    The spacing between lines improves readability.
                </p>
            </section>
        </div>
    )
}

export default TextProperty
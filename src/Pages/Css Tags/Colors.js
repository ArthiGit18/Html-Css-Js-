import React from 'react'

const Colors = () => {
    return (
        <div>
            <h1 class="css_title">🎨 CSS Color Formats</h1>

            <section class="css_color-box css_named">
                <h2>1️⃣ Named Color</h2>
                <p>Color: <strong>tomato</strong></p>
                <div class="css_color-preview">This uses named color "tomato"</div>
            </section>

            <section class="css_color-box css_hex">
                <h2>2️⃣ Hex Color</h2>
                <p>Color: <strong>#3498db</strong></p>
                <div class="css_color-preview">This uses hex color #3498db</div>
            </section>

            <section class="css_color-box css_rgb">
                <h2>3️⃣ RGB Color</h2>
                <p>RGB stands for Red, Green, Blue. Values are integers from 0 to 255 for each channel.</p>
                <pre>
                    Example:
                    rgb(255, 0, 0) → Red
                    rgb(0, 255, 0) → Green
                    rgb(0, 0, 255) → Blue
                </pre>
                <p>Color: <strong>rgb(46, 204, 113)</strong></p>
                <div class="css_color-preview">This uses RGB color</div>
            </section>

            <section class="css_color-box css_rgba">
                <h2>4️⃣ RGBA Color</h2>
                <p>RGBA stands for Red, Green, Blue, Alpha (opacity). Values are integers from 0 to 255 for RGB and a float between 0 and 1 for Alpha.</p>
                <pre>
                    Example:
                    rgba(255, 0, 0, 1) → Opaque Red
                    rgba(0, 255, 0, 0.5) → Semi-transparent Green
                    rgba(0, 0, 255, 0) → Transparent Blue
                </pre>
                <p>Color: <strong>rgba(255, 99, 71, 0.5)</strong></p>
                <div class="css_color-preview">This uses RGBA with opacity</div>
            </section>

            <section class="css_color-box css_hsl">
                <h2>5️⃣ HSL Color (hue, saturation, lightness)</h2>
                <p>HSL stands for Hue, Saturation, Lightness. Values are:
                    <ul>
                        <li>Hue: 0 to 360 degrees (0° is red, 120° is green, 240° is blue)</li>
                        <li>Saturation: Percentage from 0% (gray) to 100% (full color)</li>
                        <li>Lightness: Percentage from 0% (black) to 100% (white)</li>
                    </ul>
                </p>
                <p>Color: <strong>hsl(120, 100%, 40%)</strong></p>
                <div class="css_color-preview">This uses HSL color</div>
            </section>

            <section class="css_color-box css_hsla">
                <h2>6️⃣ HSLA Color </h2>
                <p>HSLA stands for Hue, Saturation, Lightness, Alpha (opacity). Values are:
                    <ul>
                        <li>Hue: 0 to 360 degrees</li>
                        <li>Saturation: Percentage from 0% to 100%</li>
                        <li>Lightness: Percentage from 0% to 100%</li>
                        <li>Alpha: Float between 0 (transparent) and 1 (opaque)</li>
                    </ul>
                </p>
                <p>Color: <strong>hsla(200, 100%, 50%, 0.4)</strong></p>
                <div class="css_color-preview">This uses HSLA with opacity</div>
            </section>
        </div>
    )
}

export default Colors
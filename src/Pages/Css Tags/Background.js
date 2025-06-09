import React from 'react'

const Background = () => {
    return (
        <div class="css_background-container">
            <h1>🌈 CSS Background Properties</h1>
            <section class="bg_section">
                <h2>🎨 Background Color</h2>
                <p>Using <code>background-color: lightblue;</code> to apply a solid color.</p>
                <div class="css_text-box bg_color">Sample Box</div>
            </section>

            {/* <!-- Linear Gradient --> */}
            <section class="bg_section">
                <h2>🌈 Linear Gradient</h2>
                <p>Using <code>background: linear-gradient(to right, #ff7e5f, #feb47b);</code> to create a gradient from left to right.</p>
                <div class="css_text-box bg_linear">Sample Box</div>
            </section>

            {/* <!-- Radial Gradient --> */}
            <section class="bg_section">
                <h2>🎯 Radial Gradient</h2>
                <p>Using <code>background: radial-gradient(circle, #8e44ad, #3498db);</code> to create a circular gradient from the center.</p>
                <div class="css_text-box bg_radial">Sample Box</div>
            </section>

            {/* <!-- Conic Gradient --> */}
            <section class="bg_section">
                <h2>🌀 Conic Gradient</h2>
                <p>Using <code>background: conic-gradient(from 0deg, red, yellow, lime, cyan, blue, magenta, red);</code> to sweep colors in a circle.</p>
                <div class="css_text-box bg_conic">Sample Box</div>
            </section>

            {/* <!-- Background Image --> */}
            <section class="bg_section">
                <h2>🖼️ Background Image</h2>
                <p>Using <code>background-image: url('https://i.pinimg.com/736x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg');</code> to display an image.</p>
                <div class="css_text-box bg_image"></div>
            </section>

        </div>
    )
}

export default Background
import React from 'react'

const Border = () => {
    return (
        <div>
            <section class="border_property_reference">

                <h2>1. <code>border-width</code></h2>
                <p>Sets the thickness of the border.</p>
                <ul>
                    <li><code>thin</code> — Thin border</li>
                    <li><code>medium</code> — Default border thickness</li>
                    <li><code>thick</code> — Thick border</li>
                    <li><code>&lt;length&gt;</code> — Custom thickness (e.g., <code>2px</code>, <code>0.5em</code>)</li>
                </ul>
                <p><code>border-width: 3px;</code></p>
                <div class="box border-width-example">Border width 5px</div>

                <h2>2. <code>border-style</code></h2>
                <p>Defines the style of the border.</p>
                <ul>
                    <li><code>none</code> — No border</li>
                    <li><code>solid</code> — Solid line</li>
                    <li><code>dotted</code> — Dots</li>
                    <li><code>dashed</code> — Dashes</li>
                    <li><code>double</code> — Two solid lines</li>
                    <li><code>groove</code> — 3D grooved border</li>
                    <li><code>ridge</code> — 3D ridged border</li>
                    <li><code>inset</code> — 3D inset border</li>
                    <li><code>outset</code> — 3D outset border</li>
                </ul>
                <p><code>border-style: dashed;</code></p>
                <div class="box border-style-example">Dashed border style</div>

                <h2>3. <code>border-color</code></h2>
                <p>Sets the color of the border.</p>
                <p><code>border-color: #ff6600;</code></p>
                <div class="box border-color-example">Border color #ff6600</div>

                <h2>4. <code>border-radius</code></h2>
                <p>Rounds the corners of the border.</p>
                <ul>
                    <li><code>0</code> — Sharp corners (default)</li>
                    <li><code>&lt;length&gt;</code> — Radius size (e.g., <code>10px</code>, <code>50%</code>)</li>
                </ul>
                <p><code>border-radius: 10px;</code></p>
                <div class="box border-radius-example">Border radius 15px</div>

                <h2>5. Shorthand <code>border</code> property</h2>
                <p>Combines width, style, and color into one property.</p>
                <p><code>border: 2px solid #333;</code></p>
                <div class="box border-shorthand-example">2px solid #333</div>

            </section>
        </div>
    )
}

export default Border
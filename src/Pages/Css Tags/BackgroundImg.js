import React from 'react'

const BackgroundImg = () => {
    return (
        <div>
            <section class="bg_section">
                <h2>🖼️ Background Image</h2>
                <p>Using <code>background-image: url('https://via.placeholder.com/400');</code> to apply an image.</p>
                <div class="css_text-box bg_img-basic">Sample Box</div>
            </section>

            {/* 2. Background Color + Image */}
            <section class="bg_section">
                <h2>🎨 Background Color + Image</h2>
                <p>Combining <code>background-color</code> and <code>background-image</code>.</p>
                <div class="css_text-box bg_img-color">Sample Box</div>
            </section>

            {/* 3. Background Position */}
            <section class="bg_section">
                <h2>📍 Background Position</h2>
                <p>Using <code>background-position: top right;</code> to place image in the corner.</p>
                <div class="css_text-box bg_img-position">Sample Box</div>
            </section>

            {/* 4. Background Size */}
            <section class="bg_section">
                <h2>📏 Background Size</h2>
                <p>Using <code>background-size: contain;</code> to scale the image within the box.</p>
                <div class="css_text-box bg_img-size">Sample Box</div>
                <p>Different values for <code>background-size</code>:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Definition</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>auto</code></td>
                            <td>Default size; image keeps its original size</td>
                            <td><code>background-size: auto;</code></td>
                        </tr>
                        <tr>
                            <td><code>cover</code></td>
                            <td>Scale to cover the entire container, may crop</td>
                            <td><code>background-size: cover;</code></td>
                        </tr>
                        <tr>
                            <td><code>contain</code></td>
                            <td>Scale to fit entirely inside container, no crop</td>
                            <td><code>background-size: contain;</code></td>
                        </tr>
                        <tr>
                            <td><code>&lt;length&gt;</code></td>
                            <td>Exact width/height, e.g., <code>100px 50px</code></td>
                            <td><code>background-size: 100px 50px;</code></td>
                        </tr>
                        <tr>
                            <td><code>&lt;percentage&gt;</code></td>
                            <td>Percentage of container size, e.g., <code>50% 100%</code></td>
                            <td><code>background-size: 50% 100%;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* 5. Background Repeat */}
            <section class="bg_section">
                <h2>🔁 Background Repeat</h2>
                <p>Using <code>background-repeat: repeat;</code> to tile the image.</p>
                <div class="css_text-box bg_img-repeat">Sample Box</div>
                <p>Different values for <code>background-repeat</code>:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Definition</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>repeat</code></td>
                            <td>Tiles the image both horizontally and vertically</td>
                            <td><code>background-repeat: repeat;</code></td>
                        </tr>
                        <tr>
                            <td><code>no-repeat</code></td>
                            <td>Does not tile the image, shows it once</td>
                            <td><code>background-repeat: no-repeat;</code></td>
                        </tr>
                        <tr>
                            <td><code>repeat-x</code></td>
                            <td>Tiles the image horizontally only</td>
                            <td><code>background-repeat: repeat-x;</code></td>
                        </tr>
                        <tr>
                            <td><code>repeat-y</code></td>
                            <td>Tiles the image vertically only</td>
                            <td><code>background-repeat: repeat-y;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* 6. Background Origin */}
            <section class="bg_section">
                <h2>🎯 Background Origin</h2>
                <p>Using <code>background-origin: content-box;</code> so background starts inside padding.</p>
                <div class="css_text-box bg_img-origin">Sample Box</div>
                <p>Different values for <code>background-origin</code>:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Definition</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>border-box</code></td>
                            <td>Background starts at the border edge</td>
                            <td><code>background-origin: border-box;</code></td>
                        </tr>
                        <tr>
                            <td><code>padding-box</code></td>
                            <td>Background starts at the padding edge</td>
                            <td><code>background-origin: padding-box;</code></td>
                        </tr>
                        <tr>
                            <td><code>content-box</code></td>
                            <td>Background starts at the content edge</td>
                            <td><code>background-origin: content-box;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* 7. Background Clip */}
            <section class="bg_section">
                <h2>✂️ Background Clip</h2>
                <p>Using <code>background-clip: content-box;</code> to clip background inside content.</p>
                <div class="css_text-box bg_img-clip">Sample Box</div>
                <p>Different values for <code>background-clip</code>:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Definition</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>border-box</code></td>
                            <td>Background extends to the border edge</td>
                            <td><code>background-clip: border-box;</code></td>
                        </tr>
                        <tr>
                            <td><code>padding-box</code></td>
                            <td>Background extends to the padding edge</td>
                            <td><code>background-clip: padding-box;</code></td>
                        </tr>
                        <tr>
                            <td><code>content-box</code></td>
                            <td>Background extends to the content edge</td>
                            <td><code>background-clip: content-box;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* 8. Background Attachment */}
            <section class="bg_section">
                <h2>📌 Background Attachment</h2>
                <p>Using <code>background-attachment: fixed;</code> to fix the background image while scrolling.</p>
                <div class="css_text-box bg_img-attachment">Sample Box</div>
                <p>Different values for <code>background-attachment</code>:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Definition</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>scroll</code></td>
                            <td>Background scrolls with the content (default)</td>
                            <td><code>background-attachment: scroll;</code></td>
                        </tr>
                        <tr>
                            <td><code>fixed</code></td>
                            <td>Background is fixed in place, does not scroll</td>
                            <td><code>background-attachment: fixed;</code></td>
                        </tr>
                        <tr>
                            <td><code>local</code></td>
                            <td>Background scrolls with the element's content</td>
                            <td><code>background-attachment: local;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default BackgroundImg
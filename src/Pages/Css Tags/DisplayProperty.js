import React from 'react'

const DisplayProperty = () => {
    return (
        <div>
            <section class="display_info">
                <h2>✅ Display Property</h2>
                <p>The <code>display</code> property determines how an element is displayed in the layout.</p>
                <ul>

                </ul>

                <h3>🧪 Examples</h3>

                <div class="display-block-demo">
                    <h2>🧱 Display: Block Example</h2>
                    <p>The following boxes are block-level elements. Each starts on a new line and stretches the full width of its container by default.</p>

                    <div class="box block-example">Block Element 1</div>
                    <div class="box block-example">Block Element 2</div>

                    <pre><code>
                        .block-example &#123;
                        display: block;
                        width: 100%;
                        padding: 1rem;
                        background-color: #e3f2fd;
                        border: 2px solid #2196f3;
                        margin-bottom: 1rem;
                        &#125;
                    </code></pre>
                </div>

                <hr></hr>

                <div class="display-inline-demo">
                    <h2>✏️ Display: Inline Example</h2>
                    <ul></ul>
                    <p>These elements are inline. They sit side-by-side and don't start on a new line:</p>
                    <ul>
                        <li>Inline elements do not start on a new line.</li>
                        <li>They only take up as much width as necessary.</li>
                    </ul>

                    <span class="box inline-example">Inline 1</span>
                    <span class="box inline-example">Inline 2</span>
                    <span class="box inline-example">Inline 3</span>

                    <pre><code>
                        .inline-example &#123;
                        display: inline;
                        background-color: #ffe082;
                        padding: 0.5rem;
                        border: 1px solid #ff9800;
                        margin-right: 0.5rem;
                        &#125;
                    </code></pre>
                </div>

                <hr></hr>

                <div class="display-inline-block-demo">
                    <h2>📦 Display: Inline-block Example</h2>
                    <ul>
                        <li>inline-block behaves like inline (elements sit side-by-side).</li>
                        <li>But you can set width, height, padding, margin, etc., just like block.</li>
                    </ul>
                    <p>These boxes are <code>inline-block</code>, so they appear side-by-side and accept width and height settings:</p>

                    <div class="box inline-block-example">Box 1</div>
                    <div class="box inline-block-example">Box 2</div>
                    <div class="box inline-block-example">Box 3</div>

                    <pre><code>
                        .inline-block-example &#123;
                        display: inline-block;
                        width: 150px;
                        height: 100px;
                        background-color: #c8e6c9;
                        border: 2px solid #388e3c;
                        margin-right: 1rem;
                        text-align: center;
                        vertical-align: middle;
                        &#125;
                    </code></pre>
                </div>

                <hr></hr>

                <div class="display-flex-demo">
                    <h2>📐 Display: Flex Example</h2>
                    <p>This is a flex container with 3 boxes aligned in a row:</p>

                    <h3>📘 Definition</h3>
                    <p>
                        The <code>display: flex</code> property enables <strong>flexbox layout</strong>,
                        which allows you to align and distribute space among items in a container.
                    </p>
                    <p>
                        It’s a powerful layout model for building <strong>responsive</strong>, <strong>adaptive UIs</strong>.
                    </p>

                    <h3>💡 Key Features:</h3>
                    <ul>
                        <li>Align elements <strong>horizontally or vertically</strong></li>
                        <li>Control <strong>spacing</strong>, <strong>wrapping</strong>, <strong>order</strong></li>
                        <li>Works well for <strong>centering items</strong></li>
                    </ul>

                    <h3>⚙️ Flex Container vs Flex Items:</h3>
                    <ul>
                        <li>The element with <code>display: flex</code> is called the <strong>flex container</strong>.</li>
                        <li>Its children are <strong>flex items</strong>.</li>
                    </ul>
                    <div class="flex-container">
                        <div class="box">Item 1</div>
                        <div class="box">Item 2</div>
                        <div class="box">Item 3</div>
                    </div>

                    <pre><code>
                        .flex-container &#123;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 1rem;
                        &#125;
                    </code></pre>
                </div>

                <hr></hr>

                <div class="display-grid-demo">
                    <h2>🔲 Display: Grid Example</h2>
                    <p>This is a grid container with 3 columns and 2 rows:</p>

                    <h3>📘 Definition:</h3>
                    <p>The display: grid property enables the CSS Grid Layout, a powerful 2D system for laying out items in rows and columns.</p>
                    <p>Grid layout gives you precise control over both horizontal and vertical positioning.</p>

                    <h3>💡Key Features:</h3>
                    <ul>
                        <li>Layout in two dimensions (rows & columns)</li>
                        <li>Precise grid line placement</li>
                        <li>Control over gaps, spans, and alignment</li>
                        <li>Ideal for complex responsive layouts</li>
                    </ul>

                    <h3>⚙️ Grid Container vs Grid Items:</h3>
                    <ul>
                        <li>An element with display: grid is the grid container.</li>
                        <li>Its children are grid items, placed in defined rows and columns.</li>
                    </ul>

                    <div class="grid-container">
                        <div class="box">Item 1</div>
                        <div class="box">Item 2</div>
                        <div class="box">Item 3</div>
                        <div class="box">Item 4</div>
                        <div class="box">Item 5</div>
                        <div class="box">Item 6</div>
                    </div>

                    <pre><code>
                        .grid-container &#123;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1rem;
                        &#125;
                    </code></pre>
                </div>

            </section>

        </div>
    )
}

export default DisplayProperty
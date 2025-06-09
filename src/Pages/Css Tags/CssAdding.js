import React from 'react'

const CssAdding = () => {
    return (
        <>
            <header>
                <h1 >🎨 3 Types of CSS in HTML</h1>
                <p>Explore Inline, Internal, and External CSS with Examples</p>
            </header>

            <section>
                <h2 >1️⃣ Inline CSS</h2>

                <h3>💡 HTML Code:</h3>
                <pre>
                    <code>&lt;div style="color: #dc2626; font-size: 20px;"&gt;
                        This text is styled using inline CSS.
                        &lt;/div&gt;
                    </code>
                </pre>

                <h3>✅ Output:</h3>
                <div>
                    This text is styled using inline CSS.
                </div>

                <p>
                    <strong>Explanation:</strong> Inline CSS is written directly in the <code>style</code> attribute.
                </p>
            </section>

            {/* <!--2️⃣ Internal CSS-- > */}
            <section class="css_internal-section">
                <h2>2️⃣ Internal CSS</h2>

                <h3>💡 HTML Code:</h3>
                <pre>
                    <code>
                        &lt;style&gt;
                        .css_output-box &#123;
                        color: green;
                        font-size: 18px;
                        &#125;
                        &lt;/style&gt;

                        &lt;div class="css_output-box"&gt;
                        This text is styled using internal CSS.
                        &lt;/div&gt;
                    </code>
                </pre>

                <h3>✅ Output:</h3>
                <div class="css_output-box">
                    This text is styled using internal CSS.
                </div>

                <p>
                    <strong>Explanation:</strong> Internal CSS is written inside the <code>&lt;style&gt;</code> tag within the HTML file’s <code>&lt;head&gt;</code> section.
                </p>
            </section>

            {/* <!--3️⃣ External CSS-- > */}
            <section class="css_external-section">
                <h2>3️⃣ External CSS</h2>

                <h3>💡 HTML Code:</h3>
                <pre>
                    <code>
                        .css_external-output &#123;
                        font-size: 18px;
                        color: #1d4ed8;
                        background-color: #eff6ff;
                        padding: 10px;
                        border: 2px dashed #93c5fd;
                        &#125;
                    </code>
                </pre>

                <h3>✅ Output:</h3>
                <div class="css_external-output">
                    This text is styled using external CSS (SCSS compiled).
                </div>

                <p>
                    <strong>Explanation:</strong> External CSS is defined in a separate file and linked using the <code>&lt;link&gt;</code> tag.
                </p>
            </section>
        </>

    )
}

export default CssAdding
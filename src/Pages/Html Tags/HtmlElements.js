import React from 'react'

const HtmlElements = () => {
    return (

        <>

            <section class="intro">
                <h2>✅ HTML Elements: Inline, Block, and Inline-Block</h2>
                <p>HTML elements can be broadly categorized based on how they behave in layout:</p>
                <ul>
                    <li><strong>Inline Elements</strong> – Do not start on a new line, only take as much width as needed.</li>
                    <li><strong>Block Elements</strong> – Always start on a new line and take up the full width available.</li>
                    <li><strong>Inline-block Elements</strong> – Behave like inline (no line break) but can have width/height like block.</li>
                </ul>
            </section>

            <section class="examples">
                <h2>📌 Examples</h2>

                <h3>🔹 Inline Elements</h3>
                <p>This is <span class="highlight">inline</span> text with <a href="/">anchor</a> and <em>emphasis</em>.</p>

                <h3>🔹 Block Elements</h3>
                <div class="block-example">I am a div (block element)</div>
                <p class="block-example">I am a paragraph (block element)</p>

                <h3>🔹 Inline-Block Elements</h3>
                <div class="inline-block-example">Box 1</div>
                <div class="inline-block-example">Box 2</div>
                <div class="inline-block-example">Box 3</div>
            </section>

            <section class="table-display">
                <h2>📋 Summary Table of Common Display Types</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Display Type</th>
                            <th>Examples</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Inline</td>
                            <td>&lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;em&gt;</td>
                            <td>Does not start on new line; width/height cannot be set.</td>
                        </tr>
                        <tr>
                            <td>Block</td>
                            <td>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt; to &lt;h6&gt;, &lt;section&gt;</td>
                            <td>Starts on new line; fills width; accepts box styling.</td>
                        </tr>
                        <tr>
                            <td>Inline-Block</td>
                            <td>&lt;img&gt;, &lt;button&gt;, custom divs with display:inline-block</td>
                            <td>No line break, but supports width/height and margins.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default HtmlElements
import React, { useState, useRef, useEffect } from 'react'

const CSSfaqs = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const faqContainerRef = useRef(null);

    useEffect(() => {
        const items = faqContainerRef.current.querySelectorAll('.faq-item');
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm.toLowerCase()) ? 'block' : 'none';
        });
    }, [searchTerm]);

    return (
        <section className="faq-container">
            <h1>CSS Interview Questions</h1>
            <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='faqs_input'

            />
            <div ref={faqContainerRef}>

                <div class="faq-item">
                    <h2>1. How Many Ways Can We Write CSS? Who Has Higher Priority?</h2>

                    <p>There are <strong>3 main ways</strong> to write CSS in HTML:</p>

                    <ol>
                        <li>
                            <strong>&lt;style&gt; Internal CSS:</strong><br />
                            CSS is written inside a &lt;style&gt; tag in the &lt;head&gt; section of HTML.
                        </li>
                        <li>
                            <strong>External CSS:</strong><br />
                            CSS is written in a separate <code>.css</code> file and linked using &lt;link&gt; tag.
                        </li>
                        <li>
                            <strong>Inline CSS:</strong><br />
                            CSS is written directly inside an HTML tag using the <code>style</code> attribute.
                        </li>
                    </ol>

                    <p><strong>Priority (Highest to Lowest):</strong></p>

                    <ul>
                        <li><code>!important</code> – Highest Priority</li>
                        <li>Inline CSS</li>
                        <li>Internal CSS (&lt;style&gt;)</li>
                        <li>External CSS</li>
                        <li>Browser default styles – Lowest</li>
                    </ul>
                </div>

                <div class="faq-item">
                    <h2>2. What Are Selectors in CSS?</h2>

                    <p>Selectors in CSS are used to <strong>target HTML elements</strong> so that you can apply styles to them.</p>

                    <p>Common CSS Selectors:</p>

                    <ul>
                        <li>
                            <strong>Universal Selector:</strong> <code>*</code><br />
                            Targets all elements.<br />
                            <code>* &#123; margin: 0; padding: 0; &#125;</code>
                        </li>

                        <li>
                            <strong>Element Selector:</strong> <code>p</code>, <code>h1</code><br />
                            Targets specific HTML elements.<br />
                            <code>p &#123; color: blue; &#125;</code>
                        </li>

                        <li>
                            <strong>Class Selector:</strong> <code>.classname</code><br />
                            Targets elements with a specific class.<br />
                            <code>.box &#123; background: yellow; &#125;</code>
                        </li>

                        <li>
                            <strong>ID Selector:</strong> <code>#idname</code><br />
                            Targets element with a specific ID.<br />
                            <code>#main &#123; font-size: 18px; &#125;</code>
                        </li>

                        <li>
                            <strong>Group Selector:</strong> <code>h1, p</code><br />
                            Targets multiple elements at once.<br />
                            <code>h1, p &#123; font-family: sans-serif; &#125;</code>
                        </li>

                        <li>
                            <strong>Attribute Selector:</strong> <code>input[type="text"]</code><br />
                            Targets elements based on attributes.<br />
                            <code>input[type="text"] &#123; border: 1px solid #000; &#125;</code>
                        </li>

                        <li>
                            <strong>Descendant Selector:</strong> <code>div p</code><br />
                            Targets <code>&lt;p&gt;</code> inside <code>&lt;div&gt;</code>.<br />
                            <code>div p &#123; color: green; &#125;</code>
                        </li>
                    </ul>

                </div>

                <div class="faq-item">
                    <h2>3. What is Box Model in CSS?</h2>

                    <p>The <strong>CSS Box Model</strong> is a fundamental concept that describes how every HTML element is a box made up of:</p>

                    <ul>
                        <li><strong>Content</strong> – The actual text/image inside the element.</li>
                        <li><strong>Padding</strong> – Space between the content and the border.</li>
                        <li><strong>Border</strong> – The line surrounding the padding (optional).</li>
                        <li><strong>Margin</strong> – Space between the element and its neighbors.</li>
                    </ul>

                    <p><strong>Visual Structure:</strong></p>
                    <pre>
                        +-------------------------------+
                        |           Margin              |
                        |  +-------------------------+  |
                        |  |         Border          |  |
                        |  |  +-------------------+  |  |
                        |  |  |     Padding       |  |  |
                        |  |  |  +------------+   |  |  |
                        |  |  |  |  Content   |   |  |  |
                        |  |  |  +------------+   |  |  |
                        |  |  +-------------------+  |  |
                        |  +-------------------------+  |
                        +-------------------------------+
                    </pre>
                </div>

                <div class="faq-item">
                    <h2>4. What is Flex? Difference Between Flex and Grid</h2>

                    <p><strong>Flexbox</strong> (Flexible Box) is a 1-dimensional layout method in CSS used to align items <strong>horizontally or vertically</strong> in a container.</p>

                    <p><strong>Grid</strong> is a 2-dimensional layout system that allows you to arrange elements in <strong>rows and columns</strong>.</p>

                    <h3>📊 Key Differences Between Flex and Grid:</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Flexbox</th>
                                <th>Grid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Layout Direction</td>
                                <td>One dimension (row or column)</td>
                                <td>Two dimensions (row &amp; column)</td>
                            </tr>
                            <tr>
                                <td>Best For</td>
                                <td>Aligning items in a row or column</td>
                                <td>Building full-page layouts and grids</td>
                            </tr>
                            <tr>
                                <td>Parent Tag</td>
                                <td><code>display: flex;</code></td>
                                <td><code>display: grid;</code></td>
                            </tr>
                            <tr>
                                <td>Control</td>
                                <td>Works best for content-first design</td>
                                <td>Works best for layout-first design</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Example:</h3>

                    <p><strong>Flexbox Syntax:</strong></p>
                    <pre>
                        .container &#123;
                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                        &#125;
                    </pre>

                    <p><strong>Grid Syntax:</strong></p>
                    <pre>
                        .container &#123;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 1rem;
                        &#125;
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>5. Difference Between All CSS Position Values</h2>

                    <p>The <strong>position</strong> property in CSS determines how an element is positioned in the document flow.</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Position Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>static</code></td>
                                <td>Default position. Element follows normal document flow.</td>
                            </tr>
                            <tr>
                                <td><code>relative</code></td>
                                <td>Positioned relative to its normal position. Offsets using <code>top</code>, <code>left</code>, etc.</td>
                            </tr>
                            <tr>
                                <td><code>absolute</code></td>
                                <td>Positioned relative to the nearest <strong>positioned ancestor</strong> (not static). Removed from document flow.</td>
                            </tr>
                            <tr>
                                <td><code>fixed</code></td>
                                <td>Positioned relative to the <strong>viewport</strong>. Stays in place when scrolling.</td>
                            </tr>
                            <tr>
                                <td><code>sticky</code></td>
                                <td>Behaves like <code>relative</code> until a scroll threshold is met, then becomes <code>fixed</code>.</td>
                            </tr>
                        </tbody>
                    </table>

                    <p><strong>Example:</strong></p>
                    <pre>
                        .element &#123;
                        position: absolute;
                        top: 20px;
                        left: 50px;
                        &#125;
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>6. What is <code>object-fit</code> in CSS?</h2>

                    <p>The <code>object-fit</code> property defines how an &lt;img&gt; or &lt;video&gt; should be resized to fit its container.</p>

                    <p><strong>Common Values:</strong></p>
                    <ul>
                        <li><code>fill</code> – Default. Stretch to fill container (may distort).</li>
                        <li><code>contain</code> – Scales to fit inside container <em>without</em> cropping.</li>
                        <li><code>cover</code> – Scales to cover container <em>completely</em>, cropping if needed.</li>
                        <li><code>none</code> – Keeps original size, may overflow.</li>
                        <li><code>scale-down</code> – Chooses the smaller between <code>none</code> and <code>contain</code>.</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <pre>
                        img &#123;
                        width: 300px;
                        height: 200px;
                        object-fit: cover;
                        &#125;
                    </pre>
                </div>
                <div className='faq-item'>
                    <h2>7. What is <code>overflow</code> in CSS?</h2>

                    <p>The <code>overflow</code> property in CSS controls what happens when the content of a box exceeds its defined size.</p>

                    <p><strong>Possible Values:</strong></p>
                    <ul>
                        <li><code>visible</code> – Default value. Content spills out of the box.</li>
                        <li><code>hidden</code> – Content that overflows is cut off (invisible).</li>
                        <li><code>scroll</code> – Adds scrollbars (always visible), even if not needed.</li>
                        <li><code>auto</code> – Adds scrollbars only if content overflows.</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <pre>
                        .box &#123;
                        width: 200px;
                        height: 100px;
                        overflow: auto;
                        &#125;
                    </pre>
                </div>
                <div className='faq-item'>

                    <h2>8. What is <code>float</code> and <code>clear</code> in CSS?</h2>

                    <p><strong>Float:</strong> The <code>float</code> property is used to place elements to the left or right side of their container, allowing text and inline elements to wrap around them.</p>

                    <p><strong>Common Values:</strong></p>
                    <ul>
                        <li><code>left</code> – Floats the element to the left.</li>
                        <li><code>right</code> – Floats the element to the right.</li>
                        <li><code>none</code> – Default; no float applied.</li>
                    </ul>

                    <p><strong>Example of Float:</strong></p>
                    <pre>
                        img &#123;
                        float: left;
                        margin-right: 10px;
                        &#125;
                    </pre>

                    <p><strong>Clear:</strong> The <code>clear</code> property prevents elements from being affected by floated elements.</p>

                    <p><strong>Common Values:</strong></p>
                    <ul>
                        <li><code>left</code> – Clears left floats.</li>
                        <li><code>right</code> – Clears right floats.</li>
                        <li><code>both</code> – Clears both left and right floats.</li>
                        <li><code>none</code> – Default; no clearing.</li>
                    </ul>

                    <p><strong>Example of Clear:</strong></p>
                    <pre>
                        .clearfix &#123;
                        clear: both;
                        &#125;
                    </pre>
                </div>
                <div className='faq-item'>
                    <h2>9. What is a Responsive Webpage?</h2>

                    <p>A <strong>responsive webpage</strong> is a website that adjusts its layout and content to look good on all screen sizes — from desktops to mobile devices.</p>

                    <p><strong>Key Techniques to Make a Page Responsive:</strong></p>

                    <ul>
                        <li><strong>Viewport meta tag:</strong><br />
                            Add this inside the &lt;head&gt; tag:<br />
                            <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
                        </li>

                        <li><strong>Media Queries:</strong><br />
                            Use CSS breakpoints to apply different styles:<br />
                            <pre>
                                @media (max-width: 768px) &#123;
                                .container &#123; flex-direction: column; &#125;
                                &#125;
                            </pre>
                        </li>

                        <li><strong>Flexible Layouts:</strong><br />
                            Use relative units like <code>%</code>, <code>em</code>, <code>vh</code>, <code>vw</code>, and <code>fr</code> instead of fixed pixels.
                        </li>

                        <li><strong>Responsive Images:</strong><br />
                            Use <code>max-width: 100%;</code> and <code>height: auto;</code> to scale images automatically.
                        </li>
                    </ul>
                </div>
                <div className='faq-item'>

                    <h2>10. How to Create Animation in CSS?</h2>

                    <p>CSS allows you to animate HTML elements using the <code>@keyframes</code> rule and the <code>animation</code> property.</p>

                    <p><strong>Steps to Create a CSS Animation:</strong></p>

                    <ol>
                        <li>Define the animation using <code>@keyframes</code>.</li>
                        <li>Apply the animation to an element using the <code>animation</code> property.</li>
                    </ol>

                    <p><strong>Example:</strong></p>
                    <pre>
                        @keyframes slideIn &#123;
                        from &#123; transform: translateX(-100%); &#125;
                        to &#123; transform: translateX(0); &#125;
                        &#125;

                        .box &#123;
                        animation: slideIn 1s ease-in-out forwards;
                        &#125;
                    </pre>

                    <p><strong>Animation Properties:</strong></p>

                    <ul>
                        <li><code>animation-name</code> – Name of the <code>@keyframes</code> to use</li>
                        <li><code>animation-duration</code> – Time the animation takes (e.g., 2s)</li>
                        <li><code>animation-timing-function</code> – Speed curve (e.g., ease, linear)</li>
                        <li><code>animation-delay</code> – Delay before starting</li>
                        <li><code>animation-iteration-count</code> – Number of times the animation repeats</li>
                        <li><code>animation-direction</code> – Direction (e.g., alternate, reverse)</li>
                    </ul>
                </div>
                <div className='faq-item'></div>


            </div>
        </section>

    )
}

export default CSSfaqs
import React, { useState, useRef, useEffect } from 'react'

const HTMLfaqs = () => {

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
            <h1>HTML Interview Questions</h1>
            <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='faqs_input'
            
            />
            <div ref={faqContainerRef}>
                <div className="faq-item">
                    <h2>1. What is HTML?</h2>
                    <p>HTML stands for <strong>HyperText Markup Language</strong>. It is the standard language used to create and structure web pages and applications.</p>
                </div>

                <div className="faq-item">
                    <h2>2. Why it is called Hypertext and Markup Language?</h2>
                    <p>
                        <strong>HyperText</strong> refers to the way in which web pages link to each other using hyperlinks.<br></br>
                        <strong>Markup Language</strong> means HTML uses tags to "mark up" content to define its structure and formatting.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>3. Image Tag Attributes</h2>
                    <ul>
                        <li><code>src</code> – specifies the image path</li>
                        <li><code>alt</code> – alternative text for the image</li>
                        <li><code>width</code> – width of the image</li>
                        <li><code>height</code> – height of the image</li>
                        <li><code>title</code> – tooltip shown on hover</li>
                    </ul>
                </div>

                <div className="faq-item">
                    <h2>4. Video Tag Attributes</h2>
                    <ul>
                        <li><code>src</code> – path to the video file</li>
                        <li><code>controls</code> – shows video controls</li>
                        <li><code>autoplay</code> – plays video automatically</li>
                        <li><code>loop</code> – loops the video</li>
                        <li><code>muted</code> – mutes the video by default</li>
                        <li><code>poster</code> – thumbnail image before play</li>
                    </ul>
                </div>

                <div className="faq-item">
                    <h2>5. How to add a thumbnail to Video?</h2>
                    <p>Use the <code>poster</code> attribute in the &lt;video&gt; tag:</p>
                    <pre><code>&lt;video src="movie.mp4" poster="thumbnail.jpg" controls&gt;&lt;/video&gt;</code></pre>
                </div>

                <div className="faq-item">
                    <h2>6. What are Inline Elements?</h2>
                    <p>Inline elements do not start on a new line and only take up as much width as necessary. They flow with the content.</p>
                    <p><strong>Examples:</strong> <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code></p>
                </div>

                <div className="faq-item">
                    <h2>7. What are Block Elements?</h2>
                    <p>Block elements start on a new line and take up the full width of the parent container.</p>
                    <p><strong>Examples:</strong> <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code></p>
                </div>

                <div className="faq-item">
                    <h2>8. Formatting Tags</h2>
                    <p>Formatting tags are used to style text directly.</p>
                    <ul>
                        <li><code>&lt;b&gt;</code> – Bold text</li>
                        <li><code>&lt;i&gt;</code> – Italic text</li>
                        <li><code>&lt;u&gt;</code> – Underlined text</li>
                        <li><code>&lt;strong&gt;</code> – Important text (bold with meaning)</li>
                        <li><code>&lt;em&gt;</code> – Emphasized text (italic with meaning)</li>
                        <li><code>&lt;mark&gt;</code> – Highlighted text</li>
                    </ul>
                </div>

                <div className="faq-item">
                    <h2>9. Semantic Tags</h2>
                    <p>Semantic tags clearly define the meaning of the content they enclose. They help with SEO and accessibility.</p>
                    <ul>
                        <li><code>&lt;header&gt;</code> – Defines the page header</li>
                        <li><code>&lt;nav&gt;</code> – Contains navigation links</li>
                        <li><code>&lt;main&gt;</code> – Main content of the page</li>
                        <li><code>&lt;section&gt;</code> – A section of the document</li>
                        <li><code>&lt;article&gt;</code> – A self-contained piece of content</li>
                        <li><code>&lt;footer&gt;</code> – Page footer</li>
                    </ul>
                </div>

                <div class="faq-item">
                    <h2>10.&lt;b&gt; vs &lt;strong&gt; Tag</h2>

                    <p><b>This is bold text using &lt;b&gt;</b> — used only for visual styling.</p>

                    <p><strong>This is bold text using &lt;strong&gt;</strong> — used to give strong importance semantically.</p>
                    <p>Always prefer &lt;strong&gt; over &lt;b&gt; when conveying meaning. Screen readers and SEO tools recognize &lt;strong&gt;, but not &lt;b&gt;.</p>
                </div>
                <div class="faq-item">
                    <h2>11.&lt;form&gt; Tag Inner Elements</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&lt;input&gt;</td>
                                <td>To accept user input (text, email, etc.)</td>
                            </tr>
                            <tr>
                                <td>&lt;label&gt;</td>
                                <td>Describes the input field</td>
                            </tr>
                            <tr>
                                <td>&lt;textarea&gt;</td>
                                <td>Multiline input</td>
                            </tr>
                            <tr>
                                <td>&lt;select&gt;</td>
                                <td>Dropdown options</td>
                            </tr>
                            <tr>
                                <td>&lt;option&gt;</td>
                                <td>Options inside &lt;select&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;button&gt;</td>
                                <td>To submit or reset the form</td>
                            </tr>
                            <tr>
                                <td>&lt;fieldset&gt;</td>
                                <td>Groups related form elements</td>
                            </tr>
                            <tr>
                                <td>&lt;legend&gt;</td>
                                <td>Caption for &lt;fieldset&gt;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="faq-item">
                    <h2>12.Commonly Used Attributes in &lt;input&gt; Tag</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>type</td>
                                <td>Specifies the type of input (e.g., text, email, password, etc.)</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>Assigns a name to the input for form data submission</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>Gives the input a unique identifier (used with label's <code>for</code>)</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>Sets the initial value of the input field</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>Shows temporary text inside the input field</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>Makes the field mandatory to fill before form submission</td>
                            </tr>
                            <tr>
                                <td>readonly</td>
                                <td>Makes the input read-only (user cannot change its value)</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>Disables the input so it's uneditable and not submitted</td>
                            </tr>
                            <tr>
                                <td>maxlength</td>
                                <td>Specifies the maximum number of characters allowed</td>
                            </tr>
                            <tr>
                                <td>min / max</td>
                                <td>Defines min and max values for number/date inputs</td>
                            </tr>
                            <tr>
                                <td>pattern</td>
                                <td>Validates input against a regular expression</td>
                            </tr>
                            <tr>
                                <td>autocomplete</td>
                                <td>Suggests previously entered values (on/off)</td>
                            </tr>
                            <tr>
                                <td>autofocus</td>
                                <td>Focuses on the input automatically on page load</td>
                            </tr>
                            <tr>
                                <td>step</td>
                                <td>Specifies interval for numeric or date input types</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="faq-item">
                    <h2>13.&lt;div&gt; vs &lt;span&gt; Tag</h2>

                    <div class="box">
                        This is a &lt;div&gt; element — it's a block-level element.
                    </div>

                    <p>
                        This is a paragraph with a <span class="highlight">&lt;span&gt; tag</span>
                        used to highlight part of a sentence.
                    </p>

                    <ul>
                        <li>Use <code>&lt;div&gt;</code> when grouping larger blocks like <strong>sections</strong>, <strong>forms</strong>, <strong>cards</strong>, etc.</li>
                        <li>Use <code>&lt;span&gt;</code> for inline elements like <strong>highlighting words</strong> or <strong>styling part of a sentence</strong>.</li>
                        <li>Think of <code>&lt;div&gt;</code> as a <em>container</em> and <code>&lt;span&gt;</code> as an <em>inline wrapper</em>.</li>
                    </ul>
                </div>

                <div class="faq-item">
                    <h2>14.Types of List Tags in HTML</h2>

                    <p>A list in HTML is used to group related items together. HTML provides different types of lists for ordered, unordered, and descriptive content.</p>

                    <ul>
                        <li><code>&lt;ul&gt;</code> – Unordered List (bulleted)</li>
                        <li><code>&lt;ol&gt;</code> – Ordered List (numbered)</li>
                        <li><code>&lt;dl&gt;</code> – Description List (term-description pair)</li>
                    </ul>

                    <h3>Examples:</h3>

                    <p><strong>1. &lt;ul&gt; - Unordered List</strong></p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>

                    <p><strong>2. &lt;ol&gt; - Ordered List</strong></p>
                    <ol>
                        <li>Wake up</li>
                        <li>Code</li>
                        <li>Sleep</li>
                    </ol>

                    <p><strong>3. &lt;dl&gt; - Description List</strong></p>
                    <dl>
                        <dt>HTML</dt>
                        <dd>Standard markup language for web pages.</dd>
                        <dt>CSS</dt>
                        <dd>Style sheet language used for describing the look of a document.</dd>
                    </dl>
                </div>

            </div>

        </section>
    )
}

export default HTMLfaqs
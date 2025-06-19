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
                // style={{
                //     padding: '8px 12px',
                //     marginBottom: '20px',
                //     width: '100%',
                //     maxWidth: '400px',
                //     borderRadius: '4px',
                //     border: '1px solid #ccc'
                // }}
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
            </div>

        </section>
    )
}

export default HTMLfaqs
import React from 'react'

const SemanticTags = () => {
  return (
    <>
     <section class="semantic-intro">
                    <h2>✅ 1. What are Semantic Tags in HTML?</h2>
                    <p><strong>Semantic tags</strong> are HTML5 tags that clearly describe their meaning both to the browser and the developer. These tags enhance accessibility and improve SEO by giving structure to the content.</p>

                    <p>📌 <strong>Example:</strong></p>
                    <pre><code>&lt;nav&gt;
                        &lt;a href="#home"&gt;Home&lt;/a&gt;
                        &lt;a href="#about"&gt;About&lt;/a&gt;
                        &lt;a href="#contact"&gt;Contact&lt;/a&gt;
                        &lt;/nav&gt;
                    </code></pre>
                </section>

                <section class="semantic-tags">
                    <h2>📘 Semantic HTML Tags</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&lt;header&gt;</td>
                                <td>Defines the top section or intro of a page</td>
                                <td>&lt;header&gt;Site Title&lt;/header&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;nav&gt;</td>
                                <td>Defines navigation links</td>
                                <td>&lt;nav&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/nav&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;main&gt;</td>
                                <td>Main content of the document</td>
                                <td>&lt;main&gt;Content here&lt;/main&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;section&gt;</td>
                                <td>Groups related content in a section</td>
                                <td>&lt;section&gt;&lt;h2&gt;About&lt;/h2&gt;&lt;/section&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;article&gt;</td>
                                <td>Independent, self-contained content</td>
                                <td>&lt;article&gt;Blog Post&lt;/article&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;aside&gt;</td>
                                <td>Content indirectly related to main content (e.g., sidebar)</td>
                                <td>&lt;aside&gt;Related links&lt;/aside&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;footer&gt;</td>
                                <td>Defines footer for section or page</td>
                                <td>&lt;footer&gt;Copyright 2025&lt;/footer&gt;</td>
                            </tr>
                            <tr>
                                <td>&lt;figure&gt; &lt;figcaption&gt;</td>
                                <td>For media like images and their captions</td>
                                <td>&lt;figure&gt;&lt;img src="img.jpg"&gt;&lt;figcaption&gt;Caption&lt;/figcaption&gt;&lt;/figure&gt;</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
    </>
  )
}

export default SemanticTags
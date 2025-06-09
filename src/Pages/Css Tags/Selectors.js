import React from 'react'

const Selectors = () => {
    return (
        <div>
            <h1 id="main-title">🎓 Learn CSS Selectors</h1>

            {/* Simple Selectors */}
            <section className="CSS_simple">
                <h2>1️⃣ Simple Selectors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Selector Type</th>
                            <th>Usage</th>
                            <th>Syntax</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Element</td>
                            <td>Selects all elements by tag name</td>
                            <td><code>element</code></td>
                            <td><p>This is a paragraph.</p></td>
                        </tr>
                        <tr>
                            <td>Class</td>
                            <td>Selects elements with specific class</td>
                            <td><code>.class</code></td>
                            <td><p className="highlight">This is a highlighted paragraph.</p></td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>Selects one unique element</td>
                            <td><code>#id</code></td>
                            <td><p id="unique">This is a unique paragraph.</p></td>
                        </tr>
                        <tr>
                            <td>Universal</td>
                            <td>Applies to all elements</td>
                            <td><code>*</code></td>
                            <td><span>This is a span element.</span></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Combinator Selectors */}
            <section className="CSS_combinator">
                <h2>2️⃣ Combinator Selectors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Combinator</th>
                            <th>Usage</th>
                            <th>Syntax</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Descendant</td>
                            <td>Selects all matching descendants</td>
                            <td><code>div p</code></td>
                            <td>
                                <div>
                                    <p>This is inside a div.</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Child</td>
                            <td>Selects direct children</td>
                            <td><code>div &gt; p</code></td>
                            <td>
                                <div className="CSS_direct-child">
                                    <p>Direct child paragraph</p>
                                    <span><p>Not direct</p></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Adjacent Sibling</td>
                            <td>First sibling after element</td>
                            <td><code>h3 + p</code></td>
                            <td>
                                <h3>Heading</h3>
                                <p>Paragraph after heading</p>
                            </td>
                        </tr>
                        <tr>
                            <td>General Sibling</td>
                            <td>All matching siblings</td>
                            <td><code>h3 ~ p</code></td>
                            <td>
                                <h3>Another Heading</h3>
                                <p>General sibling 1</p>
                                <p>General sibling 2</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Pseudo-Class Selectors */}
            <section className="CSS_pseudo-class">
                <h2>3️⃣ Pseudo-Class Selectors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Pseudo-Class</th>
                            <th>Usage</th>
                            <th>Syntax</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>:hover</td>
                            <td>Style on mouse hover</td>
                            <td><code>a:hover</code></td>
                            <td><a href="/">Hover over me</a></td>
                        </tr>
                        <tr>
                            <td>:first-child</td>
                            <td>First element of a parent</td>
                            <td><code>li:first-child</code></td>
                            <td>
                                <ul  className="CSS_first-child">
                                    <li>First</li>
                                    <li>Second</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>:nth-child(2)</td>
                            <td>Selects the 2nd child</td>
                            <td><code>li:nth-child(2)</code></td>
                            <td>
                                <ul  className="CSS_first-child">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Pseudo-Element Selectors */}
            <section className="CSS_pseudo-element">
                <h2>4️⃣ Pseudo-Element Selectors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Pseudo-Element</th>
                            <th>Usage</th>
                            <th>Syntax</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>::first-letter</td>
                            <td>Styles the first letter</td>
                            <td><code>p::first-letter</code></td>
                            <td><p>This paragraph uses ::first-letter.</p></td>
                        </tr>
                        <tr>
                            <td>::after</td>
                            <td>Adds content after</td>
                            <td><code>p::after</code></td>
                            <td><p>This paragraph uses ::after</p></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Attribute Selectors */}
            <section className="CSS_attribute">
                <h2>5️⃣ Attribute Selectors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute Selector</th>
                            <th>Usage</th>
                            <th>Syntax</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>[type="text"]</td>
                            <td>Targets input text fields</td>
                            <td><code>input[type="text"]</code></td>
                            <td><input type="text" placeholder="Text Field" /></td>
                        </tr>
                        <tr>
                            <td>[type="submit"]</td>
                            <td>Targets submit buttons</td>
                            <td><code>input[type="submit"]</code></td>
                            <td><input type="submit" value="Submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Selectors

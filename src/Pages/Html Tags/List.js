import React from 'react'

const List = () => {
    return (
        <>

            <h2>📘 HTML List Attributes</h2>

            <table>
                <tr>
                    <th>Attribute</th>
                    <th>Tag</th>
                    <th>Description</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><code>type</code></td>
                    <td><code>&lt;ol&gt;</code></td>
                    <td>Specifies the numbering style (1, A, a, I, i)</td>
                    <td><code>&lt;ol type="A"&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;</code></td>
                </tr>
                <tr>
                    <td><code>start</code></td>
                    <td><code>&lt;ol&gt;</code></td>
                    <td>Defines the starting number of the list</td>
                    <td><code>&lt;ol start="5"&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;</code></td>
                </tr>
                <tr>
                    <td><code>reversed</code></td>
                    <td><code>&lt;ol&gt;</code></td>
                    <td>Displays the list in descending order</td>
                    <td><code>&lt;ol reversed&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;</code></td>
                </tr>
            </table>

            <section>
                <h3>🔧 Ordered List Example:</h3>
                <ol>
                    <li>Learn HTML</li>
                    <li>Practice CSS</li>
                    <li>Master JavaScript</li>
                </ol>
            </section>

            <section>
                <h3>🔧 Unordered List Example:</h3>
                <ul>
                    <li>Milk</li>
                    <li>Eggs</li>
                    <li>Bread</li>
                </ul>
            </section>

            <section>
                <h3>🔧 Description List Example:</h3>
                <dl>
                    <dt>HTML</dt>
                    <dd>HyperText Markup Language</dd>
                    <dt>CSS</dt>
                    <dd>Cascading Style Sheets</dd>
                </dl>
            </section>

              <h3>🔍 Live Examples:</h3>

            <div class="example">
                <strong>1. Ordered List with Type A</strong>
                <ol type="A">
                    <li>Alpha</li>
                    <li>Beta</li>
                    <li>Gamma</li>
                </ol>
            </div>

            <div class="example">
                <strong>2. Ordered List Starting from 5</strong>
                <ol start="5">
                    <li>Fifth</li>
                    <li>Sixth</li>
                    <li>Seventh</li>
                </ol>
            </div>

            <div class="example">
                <strong>3. Ordered List in Reverse</strong>
                <ol reversed>
                    <li>Last Step</li>
                    <li>Mid Step</li>
                    <li>First Step</li>
                </ol>
            </div>
        </>
    )
}

export default List
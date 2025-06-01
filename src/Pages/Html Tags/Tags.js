import React from 'react'

const Tags = () => {
    return (
        <>
            <header>
                <h1>📘 HTML Basic Tags – Description & Example</h1>
            </header>

            <section class="tags-table-section">
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
                            <td>&lt;html&gt;</td>
                            <td>Root element of an HTML document</td>
                            <td>&lt;html&gt; ... &lt;/html&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;head&gt;</td>
                            <td>Container for metadata like title, CSS links, etc.</td>
                            <td>&lt;head&gt;&lt;title&gt;Page&lt;/title&gt;&lt;/head&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;body&gt;</td>
                            <td>Main content of the web page</td>
                            <td>&lt;body&gt;Hello World&lt;/body&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;h1&gt; to &lt;h6&gt;</td>
                            <td>Headings, where h1 is the largest and h6 is the smallest</td>
                            <td>&lt;h1&gt;Welcome&lt;/h1&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;p&gt;</td>
                            <td>Paragraph tag for text blocks</td>
                            <td>&lt;p&gt;This is a paragraph.&lt;/p&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;a&gt;</td>
                            <td>Defines a hyperlink</td>
                            <td>&lt;a href="https://example.com"&gt;Visit&lt;/a&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;img&gt;</td>
                            <td>Embeds an image</td>
                            <td>&lt;img src="image.jpg" alt="My Image"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</td>
                            <td>Unordered/Ordered lists with list items</td>
                            <td>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;div&gt;</td>
                            <td>Defines a section or container</td>
                            <td>&lt;div&gt;Group content&lt;/div&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;span&gt;</td>
                            <td>Inline container for styling</td>
                            <td>&lt;span&gt;Inline text&lt;/span&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;br&gt;</td>
                            <td>Line break</td>
                            <td>Line 1&lt;br&gt;Line 2</td>
                        </tr>
                        <tr>
                            <td>&lt;strong&gt;, &lt;b&gt;</td>
                            <td>Bold text (semantic vs. visual)</td>
                            <td>&lt;strong&gt;Important&lt;/strong&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;em&gt;, &lt;i&gt;</td>
                            <td>Italic text (semantic vs. visual)</td>
                            <td>&lt;em&gt;Emphasis&lt;/em&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;input&gt;</td>
                            <td>User input field</td>
                            <td>&lt;input type="text"&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;button&gt;</td>
                            <td>Clickable button</td>
                            <td>&lt;button&gt;Click Me&lt;/button&gt;</td>
                        </tr>
                    </tbody>
                </table>
            </section></>
    )
}

export default Tags
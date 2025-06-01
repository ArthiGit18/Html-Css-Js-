import React from 'react'

const FormattingTags = () => {
    return (
        <>
            <section class="formatting-intro">
                <h2>✅ 2. What are Formatting Tags in HTML?</h2>
                <p><strong>Formatting tags</strong> in HTML are used to style and highlight text with bold, italic, underline, and other visual effects. They help make the content readable, meaningful, and visually appealing.</p>

                <p>💡 <strong>Example:</strong></p>
                <pre><code>
                    &lt;p&gt;This is &lt;b&gt;bold&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt; text.&lt;/p&gt;
                </code></pre>
            </section>

            <section class="formatting-tags">
                <h2>📋 Common Formatting Tags in HTML</h2>
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
                            <td>&lt;b&gt;</td>
                            <td>Makes text bold (non-semantic)</td>
                            <td>&lt;b&gt;Bold Text&lt;/b&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;strong&gt;</td>
                            <td>Indicates important text (semantic bold)</td>
                            <td>&lt;strong&gt;Important!&lt;/strong&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;i&gt;</td>
                            <td>Italicizes text (non-semantic)</td>
                            <td>&lt;i&gt;Italic Text&lt;/i&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;em&gt;</td>
                            <td>Emphasized text (semantic italic)</td>
                            <td>&lt;em&gt;Emphasized&lt;/em&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;u&gt;</td>
                            <td>Underlines text</td>
                            <td>&lt;u&gt;Underline&lt;/u&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;mark&gt;</td>
                            <td>Highlights text</td>
                            <td>&lt;mark&gt;Highlighted&lt;/mark&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;small&gt;</td>
                            <td>Smaller text</td>
                            <td>&lt;small&gt;Small Text&lt;/small&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;del&gt;</td>
                            <td>Strikethrough/deleted text</td>
                            <td>&lt;del&gt;Deleted&lt;/del&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;ins&gt;</td>
                            <td>Inserted/underlined text</td>
                            <td>&lt;ins&gt;Inserted&lt;/ins&gt;</td>
                        </tr>
                        <tr>
                            <td>&lt;sub&gt;</td>
                            <td>Subscript text</td>
                            <td>H&lt;sub&gt;2&lt;/sub&gt;O</td>
                        </tr>
                        <tr>
                            <td>&lt;sup&gt;</td>
                            <td>Superscript text</td>
                            <td>x&lt;sup&gt;2&lt;/sup&gt;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default FormattingTags
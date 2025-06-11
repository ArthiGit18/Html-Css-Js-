import React from 'react'

const BoxSizing = () => {
    return (
        <div>
            <section class="box-sizing-info">
                <h2>✅ Definition</h2>
                <p>
                    The <code>box-sizing</code> CSS property defines how the total width and height of an element is calculated:
                </p>
                <p>
                    It affects whether <strong>padding and border</strong> are included within the element’s width and height.
                </p>

                <h2>📦 Common Values of <code>box-sizing</code>:</h2>
                <table border="1" cellpadding="10" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>content-box</code></td>
                            <td>Default. Width/height includes <strong>only content</strong>, padding and border are added outside.</td>
                        </tr>
                        <tr>
                            <td><code>border-box</code></td>
                            <td>Width/height includes <strong>content, padding, and border</strong>.</td>
                        </tr>
                    </tbody>
                </table>

                <div class="box_sizing_examples">
                    <h2>1. box-sizing: content-box (default)</h2>
                    <pre><code>
                        .box &#123;
                        width: 200px;
                        height: 100px;
                        margin-top: 0.5rem;
                        padding: 20px;
                        border: 5px solid #000;
                        background-color: #f2f2f2;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                        &#125;

                        /* 1. Default behavior */
                        .box-content-box &#123;
                        box-sizing: content-box;
                        &#125;


                    </code></pre>
                    <div class="box box-content-box">Content Box</div>

                    <h2>2. box-sizing: border-box</h2>
                    <pre><code>
                        .box &#123;
                        width: 200px;
                        height: 100px;
                        margin-top: 0.5rem;
                        padding: 20px;
                        border: 5px solid #000;
                        background-color: #f2f2f2;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                        &#125;



                        /* 2. Border-box behavior */
                        .box-border-box &#123;
                        box-sizing: border-box;
                        &#125;
                    </code></pre>
                    <div class="box box-border-box">Border Box</div>
                </div>
            </section>

        </div>
    )
}

export default BoxSizing
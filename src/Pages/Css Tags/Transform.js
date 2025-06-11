import React from 'react'

const Transform = () => {
    return (
        <div>
            <section class="transform_info">
                <h2>✅ Transform Property</h2>
                <p>
                    The <code>transform</code> property allows 2D or 3D transformation of elements such as <strong>rotate, scale, translate,</strong> and <strong>skew</strong>.
                </p>

                <h2>🧠 Common Transform Functions</h2>
                <table border="1" cellpadding="10" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Function</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><code>translate(x, y)</code></td><td>Move element on X and Y axes</td></tr>
                        <tr><td><code>scale(x, y)</code></td><td>Resize element (1 = 100%, 2 = 200%)</td></tr>
                        <tr><td><code>rotate(deg)</code></td><td>Rotate clockwise by degrees</td></tr>
                        <tr><td><code>skew(x, y)</code></td><td>Skew element diagonally</td></tr>
                    </tbody>
                </table>
<h2>🧪 Examples</h2>
                <div class="box transform-translate">translate</div>
                <pre><code>
                    .transform-translate:hover &#123;
                    transform: translate(20px, 20px);
                    &#125;
                </code></pre>

                <div class="box transform-scale">scale</div>
                <pre><code>
                    .transform-scale:hover &#123;
                    transform: scale(1.2);
                    &#125;
                </code></pre>

                <div class="box transform-rotate">rotate</div>
                <pre><code>
                    .transform-rotate:hover &#123;
                    transform: rotate(20deg);
                    &#125;
                </code></pre>

                <div class="box transform-skew">skew</div>
                <pre><code>
                    .transform-skew:hover &#123;
                    transform: skew(15deg, 10deg);
                    &#125;
                </code></pre>
            </section>
        </div>
    )
}

export default Transform
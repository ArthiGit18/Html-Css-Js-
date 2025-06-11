import React from 'react'

const Transistion = () => {
    return (
        <div>
            <section class="transition_info">

                <h2>✅ Transition Property</h2>
                <p>
                    The <code>transition</code> property allows smooth animation between CSS property values.
                    It is a shorthand for:
                </p>
                <ul>
                    <li><code>transition-property</code> – the CSS property to animate</li>
                    <li><code>transition-duration</code> – how long the animation runs</li>
                    <li><code>transition-timing-function</code> – easing curve</li>
                    <li><code>transition-delay</code> – when it should start</li>
                </ul>

                <h2>🎯 Syntax</h2>
                <pre><code>transition: [property] [duration] [timing-function] [delay];</code></pre>

                <h2>📦 Common timing-function values</h2>
                <table border="1" cellpadding="10" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><code>ease</code></td><td>Starts slow, speeds up, then slows down (default)</td></tr>
                        <tr><td><code>linear</code></td><td>Same speed from start to end</td></tr>
                        <tr><td><code>ease-in</code></td><td>Starts slow, then speeds up</td></tr>
                        <tr><td><code>ease-out</code></td><td>Starts fast, then slows down</td></tr>
                        <tr><td><code>ease-in-out</code></td><td>Slow start and end</td></tr>
                        <tr><td><code>cubic-bezier(n,n,n,n)</code></td><td>Custom speed curve</td></tr>
                    </tbody>
                </table>

                <h2>🧪 Transition Examples</h2>

                <div class="box transition-ease">ease</div>
                <pre><code>
                    .transition-ease &#123;
                    transition-timing-function: ease;
                    &#125;
                </code></pre>

                <div class="box transition-linear">linear</div>
                <pre><code>
                    .transition-linear &#123;
                    transition-timing-function: linear;
                    &#125;
                </code></pre>

                <div class="box transition-ease-in">ease-in</div>
                <pre><code>
                    .transition-ease-in &#123;
                    transition-timing-function: ease-in;
                    &#125;
                </code></pre>

                <div class="box transition-ease-out">ease-out</div>
                <pre><code>
                    .transition-ease-out &#123;
                    transition-timing-function: ease-out;
                    &#125;
                </code></pre>

                <div class="box transition-ease-in-out">ease-in-out</div>
                <pre><code>
                    .transition-ease-in-out &#123;
                    transition-timing-function: ease-in-out;
                    &#125;
                </code></pre>

            </section>
        </div>
    )
}

export default Transistion
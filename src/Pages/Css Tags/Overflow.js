import React from 'react'

const Overflow = () => {
    return (
        <div>
            <section class="overflow_info">
                <h2>✅ Overflow Property</h2>
                <p>The <code>overflow</code> property controls how content that is too large for an element to fit is handled.</p>

                <h3>🧪 Examples</h3>

                <div class="box overflow-visible">visible</div>
                <pre><code>
                    .overflow-visible &#123;
                    overflow: visible;
                    &#125;
                </code></pre>

                <div class="box overflow-hidden">hidden</div>
                <pre><code>
                    .overflow-hidden &#123;
                    overflow: hidden;
                    &#125;
                </code></pre>

                <div class="box overflow-scroll">scroll</div>
                <pre><code>
                    .overflow-scroll &#123;
                    overflow: scroll;
                    &#125;
                </code></pre>

                <div class="box overflow-auto">auto</div>
                <pre><code>
                    .overflow-auto &#123;
                    overflow: auto;
                    &#125;
                </code></pre>
            </section>
        </div>
    )
}

export default Overflow
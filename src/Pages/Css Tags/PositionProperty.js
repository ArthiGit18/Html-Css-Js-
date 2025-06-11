import React from 'react'

const PositionProperty = () => {
    return (
        <div>
            <section class="position-explanation">
                <h2>🧭 CSS <code>position</code> Property – Full Explanation</h2>
                <p>The <code>position</code> property specifies how an element is positioned in a document. The <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> properties determine the final location of the positioned element.</p>

                <h3>📋 Position Values:</h3>
                <table class="info-table">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>static</code></td>
                            <td>Default. Positioned according to the normal flow (not affected by top/right/bottom/left).</td>
                        </tr>
                        <tr>
                            <td><code>relative</code></td>
                            <td>Positioned relative to its <strong>normal position</strong>.</td>
                        </tr>
                        <tr>
                            <td><code>absolute</code></td>
                            <td>Positioned relative to the <strong>nearest positioned ancestor</strong> (not static).</td>
                        </tr>
                        <tr>
                            <td><code>fixed</code></td>
                            <td>Positioned relative to the <strong>viewport</strong>, stays fixed even when scrolling.</td>
                        </tr>
                        <tr>
                            <td><code>sticky</code></td>
                            <td>A mix of <code>relative</code> and <code>fixed</code>. Sticks based on scroll position.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>💡 Additional Properties Used with <code>position</code></h3>
                <table class="info-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>top</code></td>
                            <td>Sets the top edge offset</td>
                        </tr>
                        <tr>
                            <td><code>right</code></td>
                            <td>Sets the right edge offset</td>
                        </tr>
                        <tr>
                            <td><code>bottom</code></td>
                            <td>Sets the bottom edge offset</td>
                        </tr>
                        <tr>
                            <td><code>left</code></td>
                            <td>Sets the left edge offset</td>
                        </tr>
                        <tr>
                            <td><code>z-index</code></td>
                            <td>Controls stacking order of overlapping elements</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div class="container-position">
                <div class="box static">Static</div>
                <div class="box relative">Relative</div>
                <div class="box absolute">Absolute</div>
                <div class="box fixed">Fixed</div>
                <div class="box sticky">Sticky</div>
            </div>
            {/* <div style="height: 200px"></div> */}
        </div>
    )
}

export default PositionProperty
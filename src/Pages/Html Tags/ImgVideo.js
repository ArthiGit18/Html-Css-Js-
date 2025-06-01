import React from 'react'

const ImgVideo = () => {
    return (
        <>

            <h1>📸 Multimedia & Marquee Tags in HTML</h1>
            <section>
                <h2>🖼️ &lt;img&gt; Tag</h2>
                <p>The <code>&lt;img&gt;</code> tag is used to embed images in an HTML page.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>src</code></td>
                            <td>Specifies the image source (URL or path)</td>
                            <td><code>&lt;img src="image.jpg"&gt;</code></td>
                        </tr>
                        <tr>
                            <td><code>alt</code></td>
                            <td>Alternative text for image if it fails to load</td>
                            <td><code>alt="Nature photo"</code></td>
                        </tr>
                        <tr>
                            <td><code>width / height</code></td>
                            <td>Sets the dimensions of the image</td>
                            <td><code>width="300"</code></td>
                        </tr>
                    </tbody>
                </table>
                <img src="https://via.placeholder.com/300" alt="Example image" width="300" />
            </section>

            <section>
                <h2>🎥 &lt;video&gt; Tag</h2>
                <p>The <code>&lt;video&gt;</code> tag is used to embed video content in a webpage.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>src</code></td>
                            <td>Specifies the video file</td>
                            <td><code>src="video.mp4"</code></td>
                        </tr>
                        <tr>
                            <td><code>controls</code></td>
                            <td>Displays video player controls</td>
                            <td><code>controls</code></td>
                        </tr>
                        <tr>
                            <td><code>poster</code></td>
                            <td>Displays an image before the video plays (thumbnail)</td>
                            <td><code>poster="thumb.jpg"</code></td>
                        </tr>
                        <tr>
                            <td><code>autoplay / loop / muted</code></td>
                            <td>Optional playback controls</td>
                            <td><code>autoplay loop muted</code></td>
                        </tr>
                    </tbody>
                </table>
                <video width="400" controls poster="https://via.placeholder.com/400x200?text=Video+Thumbnail">
                    <source src="sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </section>
            <section>

                <h2>🎵 &lt;audio&gt; Tag</h2>
                <p>The <code>&lt;audio&gt;</code> tag is used to embed sound content in a webpage.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>src</code></td>
                            <td>Specifies the audio file</td>
                            <td><code>src="music.mp3"</code></td>
                        </tr>
                        <tr>
                            <td><code>controls</code></td>
                            <td>Displays playback controls</td>
                            <td><code>controls</code></td>
                        </tr>
                        <tr>
                            <td><code>autoplay / loop / muted</code></td>
                            <td>Optional playback controls</td>
                            <td><code>autoplay muted</code></td>
                        </tr>
                    </tbody>
                </table>
                <audio controls>
                    <source src="sample.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>

            </section>

            <section>

                <h2>📢 &lt;marquee&gt; Tag (Deprecated)</h2>
                <p>The <code>&lt;marquee&gt;</code> tag is used to scroll text or images across a web page. <strong>Note:</strong> This tag is deprecated and not recommended for modern websites.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>direction</code></td>
                            <td>Scroll direction (left, right, up, down)</td>
                            <td><code>direction="left"</code></td>
                        </tr>
                        <tr>
                            <td><code>scrollamount</code></td>
                            <td>Speed of the scroll</td>
                            <td><code>scrollamount="6"</code></td>
                        </tr>
                        <tr>
                            <td><code>behavior</code></td>
                            <td>Loop type (scroll, slide, alternate)</td>
                            <td><code>behavior="alternate"</code></td>
                        </tr>
                    </tbody>
                </table>
                <marquee behavior="alternate" direction="right" scrollamount="6" style={{ color: "blue", fontWeight: "bold" }}>
                    🔔 Welcome to Our Learning Website!
                </marquee>

            </section>


        </>
    )
}

export default ImgVideo
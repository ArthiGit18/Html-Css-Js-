import React, { useRef } from 'react'

const DOM = () => {
    const messageRef = useRef(null);

    const changeText = () => {
        if (messageRef.current) {
            messageRef.current.innerText = 'Text changed using DOM!';
        }
    };


    const handleIdClick = () => {
        const el = document.getElementById("by-id");
        console.log("🎯 getElementById →", el);
    };

    const handleClassClick = () => {
        const el = document.getElementsByClassName("by-class");
        console.log("🎯 getElementsByClassName →", el);
    };

    const handleTagClick = () => {
        const el = document.getElementsByTagName("li");
        console.log("🎯 getElementsByTagName →", el);
    };

    const handleQueryClick = () => {
        const el = document.querySelector(".query");
        console.log("🎯 querySelector →", el);
    };

    const handleQueryAllClick = () => {
        const el = document.querySelectorAll(".query-all");
        console.log("🎯 querySelectorAll →", el);
    };
    return (
        <div>
            <section className="container">
                <h1>📚 JavaScript <span>DOM</span> Explained</h1>

                <div className="card">
                    <h2>🌐 What is the DOM?</h2>
                    <p>The DOM represents the page content as a tree structure where each HTML element is a node.</p>
                    <pre><code>
                        HTML Page:<br></br> <br></br>
                        &lt;div id="greeting"&gt;Hello!&lt;/div&gt;<br></br> <br></br>

                        JS Access:<br></br><br></br>
                        document.getElementById("greeting").innerText = "Hi, Arthi!";
                    </code></pre>
                </div>

                <div className="card">
                    <h2>⚙️ DOM Manipulation Example</h2>
                    <div className="demo">
                        <p ref={messageRef}>Click the button to change this text.</p>
                        <button onClick={changeText}>Click Me</button>
                    </div>
                    <pre><code>
                        function changeText() {'{'}<br></br>
                        document.getElementById("message").innerText = "Text changed using DOM!";
                        {'}'}
                    </code></pre>
                </div>

                <h1>🖱️ DOM <span>Selectors</span> with Console Actions</h1>

                <div className="card">
                    <h2>🔍 Target by ID</h2>
                    <h3>🔹 ID Selector - <code>getElementById()</code></h3>
                    <p>
                        <strong>Definition:</strong> Selects **one** element by its unique <code>id</code> attribute.
                    </p>
                    <p>
                        <strong>Returns:</strong> A single DOM element (or <code>null</code> if not found).
                    </p>
                    <pre><code>document.getElementById(&quot;myId&quot;)</code></pre>
                    <p id="by-id">Selected by <code>getElementById</code>.</p>
                    <button onClick={handleIdClick}>Run getElementById</button>
                    <pre><code>document.getElementById(&quot;by-id&quot;)</code></pre>
                </div>

                <div className="card">
                    <h2>🎨 Target by Class</h2>
                    <h3>🔸 Class Selector - <code>getElementsByClassName()</code></h3>
                    <p>
                        <strong>Definition:</strong> Selects **all elements** that have the specified class name.
                    </p>
                    <p>
                        <strong>Returns:</strong> An <code>HTMLCollection</code> (live collection of elements).
                    </p>
                    <pre><code>document.getElementsByClassName(&quot;myClass&quot;)</code></pre>
                    <p className="by-class">Selected by <code>getElementsByClassName</code>.</p>
                    <button onClick={handleClassClick}>Run getElementsByClassName</button>
                    <pre><code>document.getElementsByClassName(&quot;by-class&quot;)</code></pre>
                </div>

                <div className="card">
                    <h2>📑 Target by Tag</h2>
                    <h3>🔹 Tag Selector - <code>getElementsByTagName()</code></h3>
                    <p>
                        <strong>Definition:</strong> Selects **all elements** with the specified tag name (e.g., <code>div</code>, <code>p</code>, <code>li</code>).
                    </p>
                    <p>
                        <strong>Returns:</strong> An <code>HTMLCollection</code>.
                    </p>
                    <pre><code>document.getElementsByTagName(&quot;div&quot;)</code></pre>
                    <ul>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ul>
                    <button onClick={handleTagClick}>Run getElementsByTagName</button>
                    <pre><code>document.getElementsByTagName(&quot;li&quot;)</code></pre>
                </div>

                <div className="card">
                    <h2>🎯 querySelector</h2>
                    <h3>🔸 Query Selector - <code>querySelector()</code></h3>
                    <p>
                        <strong>Definition:</strong> Returns the **first element** that matches the specified CSS selector.
                    </p>
                    <p>
                        <strong>Returns:</strong> A single DOM element (or <code>null</code> if not found).
                    </p>
                    <pre><code>document.querySelector(&quot;.myClass&quot;)</code></pre>
                    <p className="query">Selected by <code>querySelector</code>.</p>
                    <button onClick={handleQueryClick}>Run querySelector</button>
                    <pre><code>document.querySelector(&quot;.query&quot;)</code></pre>
                </div>

                <div className="card">
                    <h2>📚 querySelectorAll</h2>
                    <h3>🔹 Query Selector All - <code>querySelectorAll()</code></h3>
                    <p>
                        <strong>Definition:</strong> Returns **all elements** that match the specified CSS selector.
                    </p>
                    <p>
                        <strong>Returns:</strong> A <code>NodeList</code> (static list of nodes).
                    </p>
                    <pre><code>document.querySelectorAll(&quot;.myClass&quot;)</code></pre>
                    <p className="query-all">Item A</p>
                    <p className="query-all">Item B</p>
                    <button onClick={handleQueryAllClick}>Run querySelectorAll</button>
                    <pre><code>document.querySelectorAll(&quot;.query-all&quot;)</code></pre>
                </div>
            </section>
        </div>
    );
};
export default DOM
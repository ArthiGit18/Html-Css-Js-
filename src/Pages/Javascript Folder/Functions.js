import React from 'react'

const Functions = () => {
    return (
        <div>
            <section class="container">
                <h1>🔧 JavaScript <span>Functions</span></h1>

                <div class="card">
                    <h2>📌 What is a Function?</h2>
                    <p>A function is a reusable block of code designed to perform a specific task.</p>
                </div>

                <div class="card">
                    <h2>✅ Why Use Functions?</h2>
                    <ul>
                        <li>Code Reusability</li>
                        <li>Modular and Clean Code</li>
                        <li>Improves Readability</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>🧱 Function Declaration</h2>
                    <p>A named function defined using the function keyword. It can be called before it's declared in the code due to hoisting.

                    </p>
                    <h3>🧠 Key Features:</h3>
                    <ul>
                        <li>Has a name</li>
                        <li>Hoisted (you can call it before its declaration)</li>
                    </ul>



                    <pre><code>
                        function greet(name) {
                            console.log("Hello, ")
                        }
                        greet("Arthi"); // Output: Hello, Arthi
                    </code></pre>
                </div>

                <div class="card">
                    <h2>🧱 Function Expression</h2>
                    <p>A function stored inside a variable. It can be named or anonymous, and it's not hoisted.</p>

                    <h3>🧠 Key Features:</h3>
                    <ul>
                        <li>Can be named or anonymous</li>
                        <li>Not hoisted (must be defined before use)</li>
                    </ul>
                    <pre><code>{`const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // Output: 8`}</code></pre>
                </div>

                <div class="card">
                    <h2>⚡ Arrow Function</h2>
                    <p>A shorter syntax for writing functions using the =&gt; arrow. Introduced in ES6.</p>
                    <h3>🧠 Key Features:</h3>
                    <ul>
                        <li>Concise syntax</li>
                        <li>Does not have its own this</li>
                        <li>Cannot be used as a constructor</li>
                    </ul>
                    <pre><code>{`const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20`}</code></pre>
                </div>

                <div class="card">
                    <h2>🙈 Anonymous Function</h2>
                    <p>A function without a name. Usually used as arguments in other functions (like callbacks or timers).</p>

                    <h3>🧠 Key Features:</h3>
                    <ul>
                        <li>Common in callbacks and inline usage</li>
                        <li>No name</li>
                    </ul>
                    <pre><code>{`setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);`}</code></pre>
                </div>

                <div class="card">
                    <h2>🔁 Callback Function</h2>
                    <p>A function passed as an argument to another function, which will be called after the outer function completes.</p>
                    <h3>🧠 Key Features:</h3>
                    <ul>
                        <li>Enables asynchronous programming</li>
                        <li>Used in DOM events, API calls, etc.</li>
                    </ul>
                    <pre><code>
                        function process(callback) &#123;
                        console.log(&quot;Processing...&quot;);
                        callback();
                        &#125;

                        process(function() &#123;
                        console.log(&quot;Callback executed!&quot;);
                        &#125;);
                    </code></pre>
                </div>
            </section>
        </div>
    )
}

export default Functions
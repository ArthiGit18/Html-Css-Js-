import React from 'react'

const Variables = () => {
    return (
        <div>
            <section class="container">
                <h1>💡 JavaScript <span>Variables</span></h1>

                <div class="js_card">
                    <h2>📌 What is a Variable?</h2>
                    <p>A variable is a container for storing data values. In JavaScript, we declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
                </div>

                <div class="js_card">
                    <h2>🆚 var vs let vs const</h2>
                    <ul>
                        <li><code>var</code> – function-scoped (older, avoid using now)</li>
                        <li><code>let</code> – block-scoped, can be reassigned</li>
                        <li><code>const</code> – block-scoped, <strong>cannot</strong> be reassigned</li>
                    </ul>
                </div>

                <div class="js_card">
                    <h2>✅ Variable Naming Rules</h2>
                    <ul>
                        <li>Must begin with a letter, <code>$</code>, or <code>_</code></li>
                        <li>Case-sensitive</li>
                        <li>No spaces or reserved keywords</li>
                    </ul>
                </div>

                <div class="js_card">
                    <h2>🧪 Example:</h2>
                    <pre>
                        <code>
// Declaring variables <br></br> <br></br>
                            let name = "Arthi";<br></br>
                            const age = 25;<br></br>
                            var isStudent = true; <br></br> <br></br> <br></br>

                            // Output to console <br></br> <br></br>
                            console.log(name);       // Arthi<br></br>
                            console.log(age);        // 25<br></br>
                            console.log(isStudent);  // true<br></br>
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

export default Variables
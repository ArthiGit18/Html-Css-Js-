import React from 'react'

const Operators = () => {
    return (
        <div>
            <section class="container">
                <h1>🔣 JavaScript <span>Operators</span></h1>

                <div class="card">
                    <h2>📌 What are Operators?</h2>
                    <p>Operators are used to perform operations on variables and values in JavaScript.</p>
                </div>

                <div class="card">
                    <h2>⚙️ Types of Operators</h2>
                    <ul>
                        <li><strong>Arithmetic:</strong> +, -, *, /, %, ++, --</li>
                        <li><strong>Assignment:</strong> =, +=, -=, *=, /=, %=</li>
                        <li><strong>Comparison:</strong> ==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</li>
                        <li><strong>Logical:</strong> &&, ||, !</li>
                        <li><strong>Ternary:</strong> condition ? true : false</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>🧪 Example:</h2>
                    <pre>
                        <code>
                            let a = 10;<br></br>
                            let b = 5;<br></br> <br></br>

                            console.log(a + b);     // 15 (Arithmetic) <br></br>
                            console.log(a &gt; b);     // true (Comparison) <br></br>
                            console.log(a == 10);   // true (Comparison) <br></br>
                            console.log(a !== b);   // true (Strict Not Equal) <br></br>
                            console.log(a && b);    // 5 (Logical AND) <br></br>
                            console.log(a &gt; b ? "A is greater" : "B is greater"); // Ternary <br></br>
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

export default Operators
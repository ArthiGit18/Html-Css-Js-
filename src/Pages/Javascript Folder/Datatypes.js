import React from 'react'

const Datatypes = () => {
    return (
        <div>
            <section class="container">
                <h1>📦 JavaScript <span>Data Types</span></h1>

                <div class="card">
                    <h2>📌 What are Data Types?</h2>
                    <p>Data types define the kind of value a variable can hold. JavaScript has two main categories:</p>
                    <ul>
                        <li><strong>Primitive:</strong> String, Number, Boolean, Null, Undefined, Symbol, BigInt</li>
                        <li><strong>Non-Primitive:</strong> Object, Array, Function</li>
                    </ul>
                </div>

                <div class="card">
                    <h2>📋 Example Values</h2>
                    <ul>
                        <li><code>let name = "Arthi";</code> → <em>String</em></li>
                        <li><code>let age = 25;</code> → <em>Number</em></li>
                        <li><code>let isStudent = true;</code> → <em>Boolean</em></li>
                        <li><code>let empty = null;</code> → <em>Null</em></li>
                        <li><code>let notDefined;</code> → <em>Undefined</em></li>
                        <li><code>let person = &#123;name: &quot;Arthi&quot;, age: 25 &#125;;</code> → <em>Object</em></li>
                        <li><code>let colors = ["red", "green", "blue"];</code> → <em>Array</em></li>
                    </ul>
                </div>

                <div class="card">
                    <h2>🧪 Output Example:</h2>
                    <pre>
                        <code>
                            let name = "Arthi"; <br></br>
                            let age = 25;<br></br>
                            let isStudent = true;<br></br>
                            let empty = null;<br></br>
                            let notDefined;<br></br>
                            let person = &#123;name: &quot;Arthi&quot;, age: 25 &#125;;<br></br>
                            let colors = [ &quot;red&quot;, &quot;green&quot;, &quot;blue&quot; ];<br></br> <br></br>

                            console.log(typeof name);       // string  <br></br>
                            console.log(typeof age);        // number  <br></br>
                            console.log(typeof isStudent);  // boolean  <br></br>
                            console.log(typeof empty);      // object (special case)  <br></br>
                            console.log(typeof notDefined); // undefined  <br></br>
                            console.log(typeof person);     // object  <br></br>
                            console.log(typeof colors);     // object (arrays are objects)  <br></br>
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

export default Datatypes
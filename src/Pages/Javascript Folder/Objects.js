import React from 'react'

const Objects = () => {
    return (
        <div>
            <section class="container">
                <h1>🧱 JavaScript <span>Objects</span></h1>

                <div class="card">
                    <h2>🔹 What is an Object?</h2>
                    <p>Objects are key-value pairs used to store multiple values under a single name.</p>
                    <pre><code>{`let person = {
    name: "Arthi",
    age: 25,
    city: "Chennai"
};
console.log(person.name); // Output: Arthi`
                    }</code></pre>
                </div>

                <div class="card">
                    <h2>📦 Common Object Methods</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                                <th>Example</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>Object.keys()</code></td>
                                <td>Returns an array of keys</td>
                                <td><code>Object.keys(person)</code></td>
                                <td><code>["name", "age", "city"]</code></td>
                            </tr>
                            <tr>
                                <td><code>Object.values()</code></td>
                                <td>Returns an array of values</td>
                                <td><code>Object.values(person)</code></td>
                                <td><code>["Arthi", 25, "Chennai"]</code></td>
                            </tr>
                            <tr>
                                <td><code>Object.entries()</code></td>
                                <td>Returns key-value pairs as array</td>
                                <td><code>Object.entries(person)</code></td>
                                <td><code>[["name", "Arthi"], ["age", 25], ["city", "Chennai"]]</code></td>
                            </tr>
                            <tr>
                                <td><code>hasOwnProperty()</code></td>
                                <td>Checks if key exists</td>
                                <td><code>person.hasOwnProperty("age")</code></td>
                                <td><code>true</code></td>
                            </tr>
                            <tr>
                                <td><code>delete</code></td>
                                <td>Removes a key-value pair</td>
                                <td><code>delete person.city</code></td>
                                <td><code>{'{name: "Arthi", age: 25 }'}</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* <h1>🚀 JavaScript <span>Object.assign & Higher-Order Functions</span></h1> */}

                <div class="card">
                    <h2>🧱 Object.assign()</h2>
                    <p>Used to copy the values of all enumerable properties from one or more source objects to a target object.</p>
                    <pre><code>{`const target = {a: 1 };
                    const source = {b: 2 };
                    const merged = Object.assign(target, source);
                    
                    console.log(merged); // {a: 1, b: 2 }`
                    }</code></pre>
                </div>

                <div class="card">
                    <h2>🔁 Higher-Order Functions</h2>
                    <p>A function that takes another function as an argument or returns a function.</p>
                    <pre><code>{`function greet(name) {
  return "Hello " + name;
}

function processUser(callback) {
  console.log(callback("Arthi"));
}

processUser(greet); // Output: Hello Arthi`
                    }</code></pre>
                </div>

                <div class="card">
                    <h2>🧮 Array Methods</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                                <th>Example</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>map()</code></td>
                                <td>Returns a new array with function applied to each element</td>
                                <td><code>[1, 2, 3].map(x =&gt; x * 2)</code></td>
                                <td><code>[2, 4, 6]</code></td>
                            </tr>
                            <tr>
                                <td><code>filter()</code></td>
                                <td>Filters elements based on a condition</td>
                                <td><code>[1, 2, 3].filter(x =&gt; x &gt; 1)</code></td>
                                <td><code>[2, 3]</code></td>
                            </tr>
                            <tr>
                                <td><code>forEach()</code></td>
                                <td>Runs a function on each element (no return)</td>
                                <td>
                                    <code>
                                        [1, 2, 3].forEach(x =&gt; console.log(x));
                                    </code>
                                </td>
                                <td><code>1 2 3 (in console)</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        </div>

    )
}

export default Objects
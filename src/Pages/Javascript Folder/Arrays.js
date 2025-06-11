import React from 'react'

const Arrays = () => {
    return (
        <div>
            <section class="container">
                <h1>📚 JavaScript <span>Arrays</span></h1>

                <div class="card">
                    <h2>🔹 What is an Array?</h2>
                    <p>An array is a data structure that holds multiple values in a single variable.</p>
                    <pre><code>
                        let fruits = ["apple", "banana", "cherry"];
                        console.log(fruits[0]); // Output: apple
                    </code></pre>
                </div>

                <div class="card">
                    <h2>🔧 Common Array Methods</h2>
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
                                <td><code>push()</code></td>
                                <td>Adds an item to the end</td>
                                <td><code>fruits.push("orange")</code></td>
                                <td><code>["apple", "banana", "cherry", "orange"]</code></td>
                            </tr>
                            <tr>
                                <td><code>pop()</code></td>
                                <td>Removes the last item</td>
                                <td><code>fruits.pop()</code></td>
                                <td><code>["apple", "banana", "cherry"]</code></td>
                            </tr>
                            <tr>
                                <td><code>shift()</code></td>
                                <td>Removes the first item</td>
                                <td><code>fruits.shift()</code></td>
                                <td><code>["banana", "cherry"]</code></td>
                            </tr>
                            <tr>
                                <td><code>unshift()</code></td>
                                <td>Adds item to the beginning</td>
                                <td><code>fruits.unshift("mango")</code></td>
                                <td><code>["mango", "apple", "banana", "cherry"]</code></td>
                            </tr>
                            <tr>
                                <td><code>includes()</code></td>
                                <td>Checks if value exists</td>
                                <td><code>fruits.includes("apple")</code></td>
                                <td><code>true</code></td>
                            </tr>
                            <tr>
                                <td><code>indexOf()</code></td>
                                <td>Returns index of value</td>
                                <td><code>fruits.indexOf("banana")</code></td>
                                <td><code>1</code></td>
                            </tr>
                            <tr>
                                <td><code>join()</code></td>
                                <td>Joins array into string</td>
                                <td><code>fruits.join(", ")</code></td>
                                <td><code>"apple, banana, cherry"</code></td>
                            </tr>
                            <tr>
                                <td><code>slice()</code></td>
                                <td>Returns a portion</td>
                                <td><code>fruits.slice(0, 2)</code></td>
                                <td><code>["apple", "banana"]</code></td>
                            </tr>
                            <tr>
                                <td><code>splice()</code></td>
                                <td>Add/Remove elements</td>
                                <td><code>fruits.splice(1, 1)</code></td>
                                <td><code>["apple", "cherry"]</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Arrays
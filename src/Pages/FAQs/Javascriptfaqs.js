import React from 'react'

const Javascriptfaqs = () => {

    return (
        <section className="faq-container">
            <h1>JavaScript Interview Questions</h1>

            <div className="faq-item">
                <h2>1. What is JavaScript?</h2>
                <p>JavaScript is a high-level, interpreted programming language used to make dynamic and interactive web pages. It can be used for client-side and server-side development.</p>
                <h3>Characteristics :</h3>
                <ul>
                    <li style={{ listStyleType: "square", fontWeight: "700" }}> Interpreted Language</li>
                    <li style={{ listStyleType: "none", textIndent: "2em" }}> -code is executed line by line by browser's JS Engine</li>
                    <li style={{ listStyleType: "none", textIndent: "2em" }}> -no need compilation before running code</li>
                    <li style={{ listStyleType: "square", fontWeight: "700" }}> Dynamically Typed</li>
                    <li style={{ listStyleType: "none", textIndent: "2em" }}> -no need to declare variable type explicitly, it determined at runtime</li>
                    <li style={{ listStyleType: "square", fontWeight: "700" }}> Multi Paradigm</li>
                    <li style={{ listStyleType: "none", textIndent: "2em" }}> -supports object oriented, functional and procedural programming</li>
                    <li style={{ listStyleType: "square", fontWeight: "700" }}> Asynchronous</li>
                    <li style={{ listStyleType: "none", textIndent: "2em" }}> -supports asynchronous programming with callbacks, promises , async / await</li>
                    <li style={{ listStyleType: "square", fontWeight: "700" }}> Weakly / Loosely Typed</li>
                    <li style={{ listStyleType: "none", textIndent: "2em" }}> -can perform operations between different types string + number leads to implicit type coercion</li>
                    <li style={{ listStyleType: "square", fontWeight: "700" }}> Platform Independent</li>
                    <li style={{ listStyleType: "none", textIndent: "2em" }}> -runs on any browser</li>
                </ul>
            </div>

            <div className="faq-item">
                <h2>2. What are the data types in JavaScript?</h2>
                <p>JavaScript supports the following data types:</p>
                <ul>
                    <li><strong>Primitive Types:</strong> Number, String, Boolean, Undefined, Null, Symbol, BigInt</li>
                    <li><strong>Non-Primitive Types:</strong> Object, Array, Function</li>
                </ul>
            </div>

            <div className="faq-item">
                <h2>3. What is the difference between var, let, and const?</h2>
                <p><strong>var:</strong> Function scoped, hoisted, can be redeclared and updated.</p><br />
                <p><strong>let:</strong> Block scoped, cannot be redeclared in the same scope, but can be updated.</p><br />
                <p><strong>const:</strong> Block scoped, cannot be redeclared or updated (for primitives).</p><br />
            </div>

            <div className="faq-item">
                <h2>4. What are template literals in JavaScript?</h2>
                <p>Template literals are enclosed by backticks (<code>&#96;</code>) and allow embedded expressions using <code>&#123;expression&#125;</code>. They are useful for string interpolation and multi-line strings.</p>
                <p><strong>Advantages of Template Literals:</strong></p>
                <ul>
                    <li><strong>String Interpolation:</strong> Easily embed variables and expressions inside strings using <code>&#36;&#123;...&#125;</code>.</li>
                    <li><strong>Multi-line Strings:</strong> Allows you to create strings over multiple lines without escape characters.</li>
                    <li><strong>Improved Readability:</strong> Code becomes cleaner and easier to understand.</li>
                    <li><strong>Expression Evaluation:</strong> You can embed JavaScript expressions and calculations directly in strings.</li>
                    <li><strong>Tagged Templates:</strong> Advanced feature for custom string processing functions.</li>
                </ul>
            </div>

            <div className="faq-item">
                <h2>5. What are functions in JavaScript? (All types)</h2>
                <p>Functions are blocks of code designed to perform a task. Types include:</p>





                <ul>
                    <li>
                        <strong>Function Declaration:</strong>
                        A named function defined with the <code>function</code> keyword.
                        <br></br>
                        <code>function greet() &#123; &#125;</code>
                        <br></br>
                        ✅ Hoisted (can be used before it is declared).
                    </li>

                    <li>
                        <strong>Function Expression:</strong>
                        A function assigned to a variable.
                        <br></br>
                        <code>const greet = function() &#123; &#125;</code>
                        <br></br>
                        ✅ Not hoisted (must be defined before use).
                    </li>

                    <li>
                        <strong>Arrow Function:</strong>
                        A concise way to write functions using the <code>=&gt;</code> syntax.
                        <br></br>
                        <code>const greet = () =&gt; &#123; &#125;</code>
                        <br></br>
                        ✅ Does not have its own <code>this</code>, <code>arguments</code>, or <code>super</code>.
                    </li>

                    <li>
                        <strong>Anonymous Function:</strong>
                        A function without a name, often used as callbacks.
                        <br></br>
                        <code>setTimeout(function() &#123; &#125;, 1000);</code>
                        <br></br>
                        ✅ Useful for short-term use, especially in event handling or timeouts.
                    </li>

                    <li>
                        <strong>Immediately Invoked Function Expression (IIFE):</strong>
                        A function that runs as soon as it is defined.
                        <br></br>
                        <code>(function() &#123; &#125;)();</code>
                        <br></br>
                        ✅ Used to create a private scope or avoid polluting global variables.
                    </li>
                </ul>



            </div>

            <div class="faq-item">
                <h2>6. What is the DOM in JavaScript?</h2>
                <p>
                    DOM stands for <strong>Document Object Model</strong>. It is a browser-provided programming interface that represents the structure of an HTML or XML document as a tree of objects (nodes). Each element, attribute, and piece of text becomes a node in this tree.
                </p>
                <p>
                    JavaScript interacts with the DOM to dynamically update the content, structure, and style of a web page.
                </p>

                <p><strong>Example:</strong></p>
                <code>document.getElementById("title").textContent = "Updated Title";</code>

                <p><strong>Types of DOM:</strong></p>
                <ul>
                    <li>
                        <strong>1. Core DOM:</strong>
                        <br></br>
                        The standard model for any structured document (HTML or XML). Defines a document as a tree of nodes.
                    </li>
                    <li>
                        <strong>2. XML DOM:</strong>
                        <br></br>
                        A standard for accessing and manipulating XML documents. Follows the same tree structure but specifically for XML.
                    </li>
                    <li>
                        <strong>3. HTML DOM:</strong>
                        <br></br>
                        A standard for accessing and manipulating HTML documents. All HTML elements are defined as objects, and JavaScript can use this model to dynamically interact with the page.
                    </li>
                </ul>

                <p><strong>Common DOM Methods:</strong></p>
                <ul>
                    <li><code>document.getElementById()</code></li>
                    <li><code>document.querySelector()</code></li>
                    <li><code>document.createElement()</code></li>
                    <li><code>element.appendChild()</code></li>
                    <li><code>element.remove()</code></li>
                </ul>
            </div>
            <div class="faq-item">
                <h2>7. How do you select an element using JavaScript?</h2>
                <p>
                    In JavaScript, you can select elements from the DOM (Document Object Model) using various DOM selector methods. These methods allow you to access and manipulate HTML elements dynamically.
                </p>

                <p><strong>Common methods to select elements:</strong></p>
                <ul>
                    <li>
                        <code>document.getElementById("id")</code> – Selects an element by its <code>id</code>.
                    </li>
                    <li>
                        <code>document.getElementsByClassName("class")</code> – Selects all elements with a given class name (returns an HTMLCollection).
                    </li>
                    <li>
                        <code>document.getElementsByTagName("tag")</code> – Selects all elements with a specific tag name.
                    </li>
                    <li>
                        <code>document.querySelector("selector")</code> – Selects the first element that matches a CSS selector.
                    </li>
                    <li>
                        <code>document.querySelectorAll("selector")</code> – Selects all elements that match a CSS selector (returns a NodeList).
                    </li>
                </ul>

                <p><strong>Example:</strong></p>
                <code>const heading = document.getElementById("main-heading");</code>
            </div>
            <div class="faq-item">
                <h2>8. How do you change the content of an element in JavaScript?</h2>
                <p>
                    You can change the content of an HTML element in JavaScript using properties like:
                    <code>innerHTML</code>, <code>textContent</code>, and <code>innerText</code>.
                </p>

                <p><strong>Common ways to change content:</strong></p>
                <ul>
                    <li>
                        <code>element.innerHTML = "New content";</code> – Sets or returns the HTML inside an element.
                    </li>
                    <li>
                        <code>element.textContent = "New content";</code> – Sets or returns just the text content (ignores HTML).
                    </li>
                    <li>
                        <code>element.innerText = "New content";</code> – Similar to <code>textContent</code>, but considers styling and layout.
                    </li>
                </ul>

                <p><strong>Example:</strong></p>
                <code>document.getElementById("message").innerHTML = "Welcome to JavaScript!";</code>

                <p><strong>Tip:</strong> Use <code>innerHTML</code> if you want to insert HTML tags, and <code>textContent</code> if you want plain text only.</p>
            </div>

            <div class="faq-item">
                <h2>9. What is an event in JavaScript? (Event Handler, Event Listener)</h2>
                <p>
                    An <strong>event</strong> in JavaScript is an action or occurrence that happens in the browser, like a user clicking a button, hovering over an element, submitting a form, or pressing a key.
                </p>

                <p><strong>Event Handler:</strong> A function that runs when an event occurs.</p>
                <code>element.onclick = function() &#123; alert("Clicked!"); &#125;;</code>

                <p><strong>Event Listener:</strong> A modern way to handle events using <code>addEventListener()</code>, which allows multiple handlers.</p>
                <code>element.addEventListener("click", function() &#123; alert("Clicked!"); &#125;);</code>

                <p><strong>Advantages of Event Listeners:</strong></p>
                <ul>
                    <li>Can attach multiple listeners to the same event</li>
                    <li>Allows better separation of HTML and JS logic</li>
                    <li>Supports event removal using <code>removeEventListener()</code></li>
                </ul>
            </div>

            <div class="faq-item">
                <h2>10. What is the difference between <code>==</code> and <code>===</code>?</h2>
                <p>
                    In JavaScript, both <code>==</code> and <code>===</code> are comparison operators, but they behave differently.
                </p>

                <ul>
                    <li>
                        <strong><code>==</code> (Equality Operator):</strong> Compares two values for equality <em>after converting them to a common type</em> (type coercion).
                        <br></br>
                        <code>"5" == 5</code> ➝ <code>true</code>
                    </li>
                    <li>
                        <strong><code>===</code> (Strict Equality Operator):</strong> Compares both value and type. No type conversion is performed.
                        <br></br>
                        <code>"5" === 5</code> ➝ <code>false</code>
                    </li>
                </ul>

                <p><strong>Best Practice:</strong> Always use <code>===</code> to avoid unexpected type coercion.</p>
            </div>

            <div class="faq-item">
                <h2>11. What is the difference between <code>null</code> and <code>undefined</code>?</h2>
                <p>
                    In JavaScript, both <code>null</code> and <code>undefined</code> represent absence of a value, but they are used in different contexts.
                </p>

                <ul>
                    <li>
                        <strong><code>undefined</code>:</strong> A variable that has been declared but not assigned a value.
                        <br></br>
                        <code>let x; console.log(x); // undefined</code>
                    </li>
                    <li>
                        <strong><code>null</code>:</strong> A special value that represents "no value" or "empty", assigned explicitly by the programmer.
                        <br></br>
                        <code>let y = null;</code>
                    </li>
                </ul>

                <p><strong>Type Check:</strong></p>
                <ul>
                    <li><code>typeof undefined</code> ➝ <code>"undefined"</code></li>
                    <li><code>typeof null</code> ➝ <code>"object"</code> (this is a known quirk in JavaScript)</li>
                </ul>

                <p><strong>Summary:</strong> Use <code>null</code> for intentional empty values and <code>undefined</code> for uninitialized variables.</p>
            </div>

            <div class="faq-item">
                <h2>12. What is an array in JavaScript? What are its methods?</h2>
                <p>
                    An <strong>array</strong> in JavaScript is a special variable used to store multiple values in a single variable. Arrays are ordered and indexed starting from 0.
                </p>

                <p><strong>Example:</strong></p>
                <code>let fruits = ["apple", "banana", "cherry"];</code>

                <p><strong>Common Array Methods:</strong></p>
                <ul>
                    <li><code>push()</code> – Adds an element to the end</li>
                    <li><code>pop()</code> – Removes the last element</li>
                    <li><code>shift()</code> – Removes the first element</li>
                    <li><code>unshift()</code> – Adds an element to the beginning</li>
                    <li><code>splice()</code> – Adds/removes elements at a specific index</li>
                    <li><code>slice()</code> – Returns a shallow copy of a portion of an array</li>
                    <li><code>concat()</code> – Combines two or more arrays</li>
                    <li><code>indexOf()</code> – Finds the index of an element</li>
                    <li><code>forEach()</code> – Executes a function for each array element</li>
                    <li><code>map()</code> – Creates a new array by transforming each element</li>
                    <li><code>filter()</code> – Returns a new array with elements that pass a test</li>
                    <li><code>reduce()</code> – Reduces the array to a single value</li>
                </ul>

                <p><strong>Note:</strong> Arrays are dynamic in JavaScript, so you can change their size and contents easily.</p>
            </div>

            <div class="faq-item">
                <h2>13. What are objects in JavaScript and its methods?</h2>
                <p>
                    An <strong>object</strong> in JavaScript is a collection of key-value pairs where each key (also called a property) maps to a value. Objects can also contain functions, called methods.
                </p>

                <p><strong>Example:</strong></p>
                <code>
                    const person = &#123;<br></br>
                    &nbsp;&nbsp;name: "John",<br></br>
                    &nbsp;&nbsp;age: 30,<br></br>
                    &nbsp;&nbsp;greet: function() &#123; return "Hello!"; &#125;<br></br>
                    &#125;;
                </code>

                <p><strong>Common Object Methods:</strong></p>
                <ul>
                    <li><code>Object.keys(obj)</code> – Returns an array of property names</li>
                    <li><code>Object.values(obj)</code> – Returns an array of property values</li>
                    <li><code>Object.entries(obj)</code> – Returns an array of key-value pairs</li>
                    <li><code>Object.assign(target, source)</code> – Copies properties from one object to another</li>
                    <li><code>delete obj.prop</code> – Removes a property from an object</li>
                    <li><code>obj.hasOwnProperty("key")</code> – Checks if a property exists in the object</li>
                </ul>

                <p><strong>Accessing Properties:</strong></p>
                <code>person.name</code> or <code>person["name"]</code>
            </div>

            <div class="faq-item">
                <h2>14. What is the difference between <code>slice()</code> and <code>splice()</code>?</h2>
                <p>
                    Both <code>slice()</code> and <code>splice()</code> are array methods used to extract or modify elements, but they work differently:
                </p>

                <ul>
                    <li>
                        <strong><code>slice(start, end)</code>:</strong><br></br>
                        Returns a shallow copy of a portion of an array into a new array without modifying the original.<br></br>
                        <code>let newArr = arr.slice(1, 3);</code>
                    </li>

                    <li>
                        <strong><code>splice(start, deleteCount, item1, item2, ...)</code>:</strong><br></br>
                        Changes the original array by removing or replacing elements.<br></br>
                        <code>arr.splice(1, 2, "newItem");</code>
                    </li>
                </ul>

                <p><strong>Key Difference:</strong></p>
                <ul>
                    <li><code>slice()</code> does not modify the original array.</li>
                    <li><code>splice()</code> modifies the original array directly.</li>
                </ul>
            </div>

            <div class="faq-item">
                <h2>15. What are the ES6 features in JavaScript?</h2>
                <p>
                    ES6 (ECMAScript 2015) introduced several new features to make JavaScript more powerful and developer-friendly.
                </p>

                <p><strong>Common ES6 Features:</strong></p>
                <ul>
                    <li><strong>let and const</strong> – Block-scoped variable declarations</li>
                    <li><strong>Arrow Functions</strong> – Shorter syntax for writing functions</li>
                    <li><strong>Template Literals</strong> – Multiline strings and expression interpolation</li>
                    <li><strong>Default Parameters</strong> – Set default values for function parameters</li>
                    <li><strong>Destructuring</strong> – Extract values from arrays or objects</li>
                    <li><strong>Spread and Rest Operators</strong> – Expand or collect multiple elements</li>
                    <li><strong>Classes</strong> – Simplified syntax for object-oriented programming</li>
                    <li><strong>Modules (import/export)</strong> – Split code into reusable files</li>
                    <li><strong>Promises</strong> – Handle asynchronous operations more cleanly</li>
                    <li><strong>Enhanced Object Literals</strong> – Shorthand syntax for defining objects</li>
                </ul>

                <p><strong>Example:</strong></p>
                <code>const greet = (name = "Guest") =&gt; `Hello, ${ }!`;</code>
            </div>

            <div class="faq-item">
                <h2>16. What is a Promise in JavaScript?</h2>
                <p>
                    A <strong>Promise</strong> is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
                </p>

                <p><strong>States of a Promise:</strong></p>
                <ul>
                    <li><strong>Pending</strong> – Initial state, neither fulfilled nor rejected</li>
                    <li><strong>Fulfilled</strong> – Operation completed successfully (calls <code>resolve()</code>)</li>
                    <li><strong>Rejected</strong> – Operation failed (calls <code>reject()</code>)</li>
                </ul>

                <p><strong>Creating a Promise:</strong></p>
                <code>
                    const promise = new Promise((resolve, reject) =&gt; &#123;<br />
                    &nbsp;&nbsp;const success = true;<br />
                    &nbsp;&nbsp;if (success) &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;resolve("Operation Successful");<br />
                    &nbsp;&nbsp;&#125; else &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;reject("Operation Failed");<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;);
                </code>

                <p><strong>Handling a Promise:</strong></p>
                <code>
                    promise<br />
                    &nbsp;&nbsp;.then(result =&gt; console.log("Resolved:", result))<br />
                    &nbsp;&nbsp;.catch(error =&gt; console.error("Rejected:", error))<br />
                    &nbsp;&nbsp;.finally(() =&gt; console.log("Promise complete"));
                </code>

                <p><strong>Key Methods:</strong></p>
                <ul>
                    <li><code>.then()</code> – Runs when the promise is resolved</li>
                    <li><code>.catch()</code> – Runs when the promise is rejected</li>
                    <li><code>.finally()</code> – Runs after either <code>then</code> or <code>catch</code> completes</li>
                </ul>

                <p><strong>Use Cases:</strong> Handling API requests, asynchronous file reads, timers, etc.</p>
            </div>

            <div class="faq-item">
                <h2>17. What is <code>async/await</code> in JavaScript?</h2>
                <p>
                    <code>async</code> and <code>await</code> are ES8 features used to simplify working with Promises and asynchronous code.
                </p>

                <p><strong><code>async</code>:</strong> Declares a function as asynchronous, which means it returns a Promise.</p>
                <p><strong><code>await</code>:</strong> Pauses the execution of the async function until the Promise is resolved or rejected.</p>

                <p><strong>Example:</strong></p>
                <code>
                    async function fetchData() &#123;<br />
                    &nbsp;&nbsp;try &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch("https://api.example.com");<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);<br />
                    &nbsp;&nbsp;&#125; catch (error) &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.error(error);<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;
                </code>

                <p><strong>Benefits:</strong></p>
                <ul>
                    <li>Cleaner and more readable asynchronous code</li>
                    <li>Handles Promises like synchronous code</li>
                    <li>Great for chaining multiple asynchronous calls</li>
                </ul>
            </div>

            <div class="faq-item">
                <h2>18. What is hoisting in JavaScript?</h2>
                <p>
                    <strong>Hoisting</strong> is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.
                </p>

                <p>This means variables and function declarations can be used before they are defined.</p>

                <p><strong>Example:</strong></p>
                <code>
                    console.log(x); // undefined<br />
                    var x = 5;
                </code>

                <p>Here, <code>var x</code> is hoisted to the top, but only the declaration, not the assignment.</p>

                <p><strong>Function Declarations:</strong> Entire functions are hoisted.</p>
                <code>
                    greet(); // "Hello"<br />
                    function greet() &#123; console.log("Hello"); &#125;
                </code>

                <p><strong>let & const:</strong> Variables declared with <code>let</code> and <code>const</code> are hoisted but not initialized, leading to a <em>Temporal Dead Zone</em> error if accessed before declaration.</p>

                <p><strong>Tip:</strong> Always declare variables at the top to avoid confusion caused by hoisting.</p>
            </div>

            <div class="faq-item">
                <h2>20. What are <code>map</code>, <code>filter</code>, and <code>reduce</code> methods?</h2>
                <p>
                    These are powerful array methods in JavaScript used for transforming and processing data.
                </p>

                <ul>
                    <li>
                        <strong><code>map()</code>:</strong> Creates a new array by applying a function to each element.
                        <br />
                        <code>[1, 2, 3].map(x =&gt; x * 2); // [2, 4, 6]</code>
                    </li>
                    <li>
                        <strong><code>filter()</code>:</strong> Returns a new array containing elements that pass a test.
                        <br />
                        <code>[1, 2, 3, 4].filter(x =&gt; x % 2 === 0); // [2, 4]</code>
                    </li>
                    <li>
                        <strong><code>reduce()</code>:</strong> Reduces the array to a single value using an accumulator function.
                        <br />
                        <code>[1, 2, 3, 4].reduce((acc, val) = acc + val, 0); // 10</code>
                    </li>
                </ul>

                <p><strong>Use Case:</strong> Ideal for processing or transforming arrays efficiently in a functional style.</p>
            </div>

            <div class="faq-item">
                <h2>21. What is JSON in JavaScript?</h2>
                <p>
                    <strong>JSON</strong> (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data, especially between a server and a web application.
                </p>

                <p><strong>Format:</strong> JSON is text-based and uses key-value pairs, similar to JavaScript objects, but with double quotes.</p>

                <p><strong>Example:</strong></p>
                <code>
                    {/* const jsonData = '{ "name": "Alice", "age": 25 }'; */}
                </code>

                <p><strong>Common Methods:</strong></p>
                <ul>
                    <li><code>JSON.parse()</code> – Converts a JSON string to a JavaScript object</li>
                    <li><code>JSON.stringify()</code> – Converts a JavaScript object to a JSON string</li>
                </ul>

                <p><strong>Use Case:</strong> Widely used in APIs and data exchange between frontend and backend.</p>
            </div>

            <div class="faq-item">
                <h2>22. What is destructuring in JavaScript?</h2>
                <p>
                    <strong>Destructuring</strong> is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables.
                </p>

                <p><strong>Array Destructuring:</strong></p>
                <code>
                    const colors = ["red", "green", "blue"];<br />
                    const [first, second] = colors;<br />
                    console.log(first); // "red"
                </code>

                <p><strong>Object Destructuring:</strong></p>
                <code>
                    const person = &#123; name: "Alice", age: 25 &#125;;<br />
                    const &#123; name, age &#125; = person;<br />
                    console.log(name); // "Alice"
                </code>

                <p><strong>Default Values:</strong></p>
                <code>
                    const &#123; city = "Unknown" &#125; = person;
                </code>

                <p><strong>Use Cases:</strong></p>
                <ul>
                    <li>Simplifies variable assignment</li>
                    <li>Makes code cleaner and easier to read</li>
                    <li>Useful in function arguments and React props</li>
                </ul>
            </div>

            <div class="faq-item">
                <h2>23. What is the spread operator in JavaScript?</h2>
                <p>
                    The <strong>spread operator</strong> (<code>...</code>) is used to expand or "spread" elements of an iterable (like an array or object) into individual elements.
                </p>

                <p><strong>Use in Arrays:</strong></p>
                <code>
                    const arr1 = [1, 2];<br />
                    const arr2 = [...arr1, 3, 4];<br />
                    console.log(arr2); // [1, 2, 3, 4]
                </code>

                <p><strong>Use in Objects:</strong></p>
                <code>
                    const obj1 = &#123; name: "Alice" &#125;;<br />
                    const obj2 = &#123; ...obj1, age: 25 &#125;;<br />
                    console.log(obj2); // &#123; name: "Alice", age: 25 &#125;
                </code>

                <p><strong>Common Use Cases:</strong></p>
                <ul>
                    <li>Merging arrays or objects</li>
                    <li>Copying arrays or objects</li>
                    <li>Passing elements as arguments in function calls</li>
                </ul>

                <p><strong>Example (Function Argument):</strong></p>
                <code>
                    const nums = [1, 2, 3];<br />
                    Math.max(...nums); // 3
                </code>
            </div>

            <div class="faq-item">
                <h2>23. What is the rest operator in JavaScript?</h2>
                <p>
                    The <strong>rest operator</strong> (<code>...</code>) is used to collect multiple elements into a single array or object. It is the opposite of the <strong>spread operator</strong>.
                </p>

                <p><strong>Use in Function Parameters:</strong></p>
                <code>
                    function sum(...numbers) &#123;<br />
                    &nbsp;&nbsp;return numbers.reduce((acc, val) =&gt; acc + val, 0);<br />
                    &#125;<br />
                    sum(1, 2, 3); // 6
                </code>

                <p><strong>Use in Destructuring:</strong></p>
                <code>
                    const [first, ...rest] = [10, 20, 30, 40];<br />
                    console.log(first); // 10<br />
                    console.log(rest); // [20, 30, 40]
                </code>

                <p><strong>In Objects:</strong></p>
                <code>
                    const &#123; name, ...info &#125; = &#123; name: "Alice", age: 25, city: "Paris" &#125;;<br />
                    console.log(info); // &#123; age: 25, city: "Paris" &#125;
                </code>

                <p><strong>Use Cases:</strong></p>
                <ul>
                    <li>Handling an indefinite number of arguments in functions</li>
                    <li>Extracting parts of arrays or objects</li>
                    <li>Grouping remaining items</li>
                </ul>
            </div>

            <div class="faq-item">
                <h2>25. What is the <code>fetch</code> method in JavaScript?</h2>
                <p>
                    The <strong><code>fetch()</code></strong> method is used to make HTTP requests in JavaScript. It returns a Promise that resolves to the response of the request.
                </p>

                <p><strong>Basic Usage:</strong></p>
                <code>
                    fetch("https://api.example.com/data")<br />
                    &nbsp;&nbsp;.then(response =&gt; response.json())<br />
                    &nbsp;&nbsp;.then(data =&gt; console.log(data))<br />
                    &nbsp;&nbsp;.catch(error =&gt; console.error("Error:", error));
                </code>

                <p><strong>Features:</strong></p>
                <ul>
                    <li>Based on Promises</li>
                    <li>Supports all HTTP methods (GET, POST, PUT, DELETE, etc.)</li>
                    <li>Built-in in modern browsers, no library needed</li>
                </ul>

                <p><strong>Note:</strong> Use <code>async/await</code> for cleaner asynchronous code with fetch.</p>
            </div>

            <div class="faq-item">
                <h2>26. What are the falsy values in JavaScript?</h2>
                <p>
                    <strong>Falsy values</strong> are values that are considered <code>false</code> when encountered in a Boolean context (like an <code>if</code> statement).
                </p>

                <p><strong>List of falsy values:</strong></p>
                <ul>
                    <li><code>false</code> – The Boolean value false</li>
                    <li><code>0</code> – The number zero</li>
                    <li><code>-0</code> – Negative zero</li>
                    <li><code>0n</code> – BigInt zero</li>
                    <li><code>""</code> or <code>''</code> – Empty string</li>
                    <li><code>null</code> – Null value</li>
                    <li><code>undefined</code> – Undefined value</li>
                    <li><code>NaN</code> – Not a Number</li>
                </ul>

                <p><strong>Example:</strong></p>
                <code>
                    if (!0) &#123; console.log("Falsy"); &#125; // Output: "Falsy"
                </code>

                <p><strong>All other values are truthy</strong> (like non-zero numbers, non-empty strings, objects, arrays, etc.).</p>
            </div>





        </section>
    )
}

export default Javascriptfaqs
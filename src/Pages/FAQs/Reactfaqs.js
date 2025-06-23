import React, { useState, useRef, useEffect } from 'react'

const Reactfaqs = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const faqContainerRef = useRef(null);

    useEffect(() => {
        const items = faqContainerRef.current.querySelectorAll('.faq-item');
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm.toLowerCase()) ? 'block' : 'none';
        });
    }, [searchTerm]);

    return (
        <section className="faq-container">
            <h1>CSS Interview Questions</h1>
            <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='faqs_input'

            />
            <div ref={faqContainerRef}>

                <div className='faq-item'>
                    <h2>1. What is React? Why Is It Used?</h2>

                    <p><strong>React</strong> (also called React.js or ReactJS) is a <strong>JavaScript library</strong> developed by Facebook for building <strong>user interfaces</strong>, especially single-page applications.</p>

                    <p><strong>Why React is Used:</strong></p>

                    <ul>
                        <li>🔁 <strong>Reusable Components</strong> – Build UI using reusable, independent pieces called components.</li>
                        <li>⚡ <strong>Fast Updates</strong> – Uses Virtual DOM for efficient UI rendering and updates.</li>
                        <li>🔄 <strong>One-Way Data Flow</strong> – Makes debugging and managing data easier.</li>
                        <li>🌐 <strong>SPA Support</strong> – Ideal for single-page applications that update content dynamically.</li>
                        <li>📦 <strong>Rich Ecosystem</strong> – Integrates easily with libraries like Redux, React Router, etc.</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <pre>
                        import React from 'react';

                        function App() &#123;
                        return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
                        &#125;
                    </pre>

                </div>

                <div className='faq-item'>
                    <h2>2. What is a Component in React?</h2>

                    <p>A <strong>component</strong> in React is a <strong>reusable piece of UI</strong> that acts like a JavaScript function — it accepts input (called <code>props</code>) and returns JSX to display on the screen.</p>

                    <p><strong>Types of Components:</strong></p>
                    <ul>
                        <li><strong>Functional Components</strong> – Created using JavaScript functions</li>
                        <li><strong>Class Components</strong> – Created using ES6 classes (less commonly used now)</li>
                    </ul>

                    <p><strong>Functional Component Example:</strong></p>
                    <pre>
                        function Welcome(props) &#123;
                        return &lt;h2&gt;Hello, &#123;props.name&#125;!&lt;/h2&gt;;
                        &#125;
                    </pre>

                    <p><strong>Usage:</strong></p>
                    <pre>
                        &lt;Welcome name="Arthi" /&gt;
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>3. What is JSX and Why Is It Used?</h2>

                    <p><strong>JSX</strong> stands for <em>JavaScript XML</em>. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside JavaScript.</p>

                    <p>JSX is used in React to <strong>describe what the UI should look like</strong> in a readable and declarative way.</p>

                    <p><strong>Why JSX is Used:</strong></p>
                    <ul>
                        <li>👁️ More readable and intuitive UI code</li>
                        <li>🔧 Easy to mix HTML and JavaScript logic</li>
                        <li>💡 Helps visualize the component structure</li>
                        <li>⚙️ Compiles to <code>React.createElement()</code> under the hood</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <pre>
                        const element = &lt;h1&gt;Welcome to JSX!&lt;/h1&gt;;
                    </pre>

                    <p><strong>Equivalent Without JSX:</strong></p>
                    <pre>
                        const element = React.createElement('h1', null, 'Welcome to JSX!');
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>4. What Are Hooks in React?</h2>

                    <p><strong>Hooks</strong> are special functions in React that let you <strong>use state and other React features</strong> in functional components.</p>

                    <p>Before Hooks, only class components could use state and lifecycle methods. Hooks bring those features to functional components.</p>

                    <p><strong>Common React Hooks:</strong></p>
                    <ul>
                        <li><code>useState()</code> – Adds local state to a functional component</li>
                        <li><code>useEffect()</code> – Runs side effects like data fetching or DOM updates</li>
                        <li><code>useContext()</code> – Access values from React Context</li>
                        <li><code>useRef()</code> – Access DOM elements or store mutable values</li>
                        <li><code>useMemo()</code> and <code>useCallback()</code> – Optimize performance</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <pre>
                        import React, &#123; useState &#125; from 'react';

                        function Counter() &#123;
                        const [count, setCount] = useState(0);

                        return (
                        &lt;div&gt;
                        &lt;p&gt;You clicked &#123;count&#125; times&lt;/p&gt;
                        &lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;Click Me&lt;/button&gt;
                        &lt;/div&gt;
                        );
                        &#125;
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>5. What Is the Difference Between <code>props</code> and <code>state</code> in React?</h2>

                    <p><strong>props</strong> and <strong>state</strong> are both plain JavaScript objects used to control data in React components — but they serve different purposes.</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th><code>props</code></th>
                                <th><code>state</code></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Definition</td>
                                <td>Data passed <strong>from parent</strong> to child component</td>
                                <td>Data that is <strong>local</strong> and managed inside a component</td>
                            </tr>
                            <tr>
                                <td>Mutability</td>
                                <td><strong>Immutable</strong> – cannot be changed by child</td>
                                <td><strong>Mutable</strong> – can be changed using <code>setState</code> or <code>useState</code></td>
                            </tr>
                            <tr>
                                <td>Used For</td>
                                <td>Configuration and passing data</td>
                                <td>Tracking dynamic changes (e.g. form input, counters)</td>
                            </tr>
                        </tbody>
                    </table>

                    <p><strong>props Example:</strong></p>
                    <pre>
                        function Welcome(props) &#123;
                        return &lt;h1&gt;Hello, &#123;props.name&#125;!&lt;/h1&gt;;
                        &#125;
                    </pre>

                    <p><strong>state Example:</strong></p>
                    <pre>
                        const [count, setCount] = useState(0);
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>6. What Are Lifecycle Methods in React?</h2>

                    <p><strong>Lifecycle methods</strong> are special methods in <code>class</code> components that allow you to run code at specific points in a component’s life (mounting, updating, unmounting).</p>

                    <p><strong>Main Phases:</strong></p>
                    <ul>
                        <li><strong>Mounting</strong> – When the component is being created and inserted into the DOM</li>
                        <li><strong>Updating</strong> – When the component is re-rendered due to changes in <code>state</code> or <code>props</code></li>
                        <li><strong>Unmounting</strong> – When the component is removed from the DOM</li>
                    </ul>

                    <p><strong>Common Lifecycle Methods:</strong></p>
                    <ul>
                        <li><code>componentDidMount()</code> – Called once after the component is mounted</li>
                        <li><code>componentDidUpdate()</code> – Called after component updates</li>
                        <li><code>componentWillUnmount()</code> – Called just before component is removed</li>
                    </ul>

                    <p><strong>Example:</strong></p>
                    <pre>
                        class MyComponent extends React.Component &#123;
                        componentDidMount() &#123;
                        console.log("Mounted!");
                        &#125;

                        render() &#123;
                        return &lt;p&gt;Hello from lifecycle&lt;/p&gt;;
                        &#125;
                        &#125;
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>7. What is <code>useState</code> in React?</h2>

                    <p><code>useState</code> is a React Hook that allows you to add <strong>state</strong> to functional components.</p>

                    <p>It returns an array with two values:</p>
                    <ul>
                        <li>The current state value</li>
                        <li>A function to update that value</li>
                    </ul>

                    <p><strong>Syntax:</strong></p>
                    <pre>
                        const [state, setState] = useState(initialValue);
                    </pre>

                    <p><strong>Example:</strong></p>
                    <pre>
                        import React, &#123; useState &#125; from 'react';

                        function Counter() &#123;
                        const [count, setCount] = useState(0);

                        return (
                        &lt;div&gt;
                        &lt;p&gt;You clicked &#123;count&#125; times&lt;/p&gt;
                        &lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;Click Me&lt;/button&gt;
                        &lt;/div&gt;
                        );
                        &#125;
                    </pre>

                    <p><strong>Notes:</strong></p>
                    <ul>
                        <li>Each call to <code>useState()</code> creates a separate piece of state.</li>
                        <li>Changing state triggers a re-render of the component.</li>
                    </ul>
                </div>

                <div className='faq-item'>
                    <h2>8. What is <code>useEffect</code> in React?</h2>

                    <p><code>useEffect</code> is a Hook that allows you to perform <strong>side effects</strong> in functional components, such as:</p>

                    <ul>
                        <li>Fetching data from an API</li>
                        <li>Setting up subscriptions or timers</li>
                        <li>Directly manipulating the DOM</li>
                    </ul>

                    <p><strong>Syntax:</strong></p>
                    <pre>
                        useEffect(() =&gt; &#123;
                        return () =&gt; &#123;
                        &#125;;
                        &#125;, [dependencies]);
                    </pre>

                    <p><strong>Example: Log on mount</strong></p>
                    <pre>
                        import React, &#123; useEffect &#125; from 'react';

                        function App() &#123;
                        useEffect(() =&gt; &#123;
                        console.log('Component mounted!');
                        &#125;, []); // Runs only once

                        return &lt;h1&gt;Welcome!&lt;/h1&gt;;
                        &#125;
                    </pre>

                    <p><strong>Dependency Array:</strong></p>
                    <ul>
                        <li><code>[]</code> – Runs only on mount (like <code>componentDidMount</code>)</li>
                        <li><code>[count]</code> – Runs when <code>count</code> changes</li>
                        <li>No array – Runs after every render</li>
                    </ul>
                </div>

                <div className='faq-item'>
                    <h2>9. What is <code>useRef</code> in React?</h2>

                    <p><code>useRef</code> is a React Hook that allows you to:</p>

                    <ul>
                        <li>Access and manipulate DOM elements directly</li>
                        <li>Persist values across renders <strong>without</strong> triggering re-renders</li>
                    </ul>

                    <p><strong>Syntax:</strong></p>
                    <pre>
                        const refName = useRef(initialValue);
                    </pre>

                    <p><strong>Example 1: Accessing DOM Element</strong></p>
                    <pre>
                        import React, &#123; useRef &#125; from 'react';

                        function InputFocus() &#123;
                        const inputRef = useRef(null);

                        const focusInput = () =&gt; &#123;
                        inputRef.current.focus();
                        &#125;;

                        return (
                        &lt;div&gt;
                        &lt;input ref=&#123;inputRef&#125; type="text" /&gt;
                        &lt;button onClick=&#123;focusInput&#125;&gt;Focus Input&lt;/button&gt;
                        &lt;/div&gt;
                        );
                        &#125;
                    </pre>

                    <p><strong>Example 2: Storing Mutable Value</strong></p>
                    <pre>
                        const countRef = useRef(0);
                        countRef.current += 1; // Does not cause re-render
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>10. What is <code>useContext</code> in React?</h2>

                    <p><code>useContext</code> is a Hook that lets you access values from <strong>React Context</strong> directly, without needing to pass props through many levels.</p>

                    <p><strong>Why use <code>useContext</code>:</strong></p>
                    <ul>
                        <li>Reduces prop drilling</li>
                        <li>Makes shared data (like theme or user) accessible anywhere in the app</li>
                    </ul>

                    <p><strong>Steps to Use:</strong></p>
                    <ol>
                        <li>Create context using <code>React.createContext()</code></li>
                        <li>Wrap your components with <code>&lt;Context.Provider&gt;</code></li>
                        <li>Access context value using <code>useContext(Context)</code></li>
                    </ol>

                    <p><strong>Example:</strong></p>
                    <pre>
                        import React, &#123; createContext, useContext &#125; from 'react';

                        const ThemeContext = createContext('light');

                        function ThemedButton() &#123;
                        const theme = useContext(ThemeContext);
                        return &lt;button&gt;Current Theme: &#123;theme&#125;&lt;/button&gt;;
                        &#125;

                        function App() &#123;
                        return (
                        &lt;ThemeContext.Provider value="dark"&gt;
                        &lt;ThemedButton /&gt;
                        &lt;/ThemeContext.Provider&gt;
                        );
                        &#125;
                    </pre>
                </div>

                <div className='faq-item'>
                    <h2>11. 🔀 What is React Router?</h2>

                    <p><strong>React Router</strong> is a standard library used in React applications to handle routing. It allows developers to create <strong>Single Page Applications (SPA)</strong> with multiple views using different URLs — without reloading the page.</p>

                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>📄 Enables client-side routing in React</li>
                        <li>🔗 Switches between pages using URL paths</li>
                        <li>📦 Supports nested routes, dynamic routes, and route protection</li>
                    </ul>

                    <p><strong>Installation:</strong></p>
                    <pre>
                        npm install react-router-dom
                    </pre>

                    <p><strong>Basic Usage:</strong></p>
                    <pre>
                        import &#123; BrowserRouter, Routes, Route, Link &#125; from 'react-router-dom';

                        function App() &#123;
                        return (
                        &lt;BrowserRouter&gt;
                        &lt;nav&gt;
                        &lt;Link to="/"&gt;Home&lt;/Link&gt;
                        &lt;Link to="/about"&gt;About&lt;/Link&gt;
                        &lt;/nav&gt;

                        &lt;Routes&gt;
                        &lt;Route path="/" element=&#123;&lt;Home /&gt;&#125; /&gt;
                        &lt;Route path="/about" element=&#123;&lt;About /&gt;&#125; /&gt;
                        &lt;/Routes&gt;
                        &lt;/BrowserRouter&gt;
                        );
                        &#125;
                    </pre>

                    <p><strong>Note:</strong> React Router handles navigation without refreshing the entire page, keeping the SPA performance intact.</p>
                </div>

                <div className='faq-item'>
                    <h2>12. 📦 Redux vs Context API in React</h2>

                    <p>Both <strong>Redux</strong> and <strong>Context API</strong> are used for state management in React apps. Here's how they differ:</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Redux</th>
                                <th>Context API</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Use Case</td>
                                <td>Large-scale apps with complex state logic</td>
                                <td>Small to medium apps or simple global states</td>
                            </tr>
                            <tr>
                                <td>Architecture</td>
                                <td>Uses store, reducers, and actions</td>
                                <td>Uses <code>createContext</code> and <code>useContext</code></td>
                            </tr>
                            <tr>
                                <td>Boilerplate</td>
                                <td>More setup and configuration</td>
                                <td>Less code and easier to implement</td>
                            </tr>
                            <tr>
                                <td>DevTools</td>
                                <td>Yes, with Redux DevTools</td>
                                <td>No built-in DevTools</td>
                            </tr>
                            <tr>
                                <td>Performance</td>
                                <td>Efficient with middleware &amp; async logic</td>
                                <td>May cause unnecessary re-renders if not optimized</td>
                            </tr>
                        </tbody>
                    </table>

                    <p><strong>When to Use:</strong></p>
                    <ul>
                        <li>Use <strong>Context API</strong> for simple themes, user auth, or language toggles.</li>
                        <li>Use <strong>Redux</strong> when managing large, shared, or deeply nested state.</li>
                    </ul>

                    <p><strong>Context Example:</strong></p>
                    <pre>
                        const ThemeContext = createContext();
                        const theme = useContext(ThemeContext);
                    </pre>

                    <p><strong>Redux Example:</strong></p>
                    <pre>
                        dispatch(&#123; type: 'INCREMENT' &#125;);
                        const count = useSelector(state =&gt; state.count);
                    </pre>
                </div>

            </div>
        </section>
    )
}

export default Reactfaqs
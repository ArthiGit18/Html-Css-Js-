import React from 'react'

const FormTags = () => {
    return (
        <section>
            <h2>📌 HTML <code>&lt;form&gt;</code> Tag Description & Example</h2>

            <h2>✅ What is the <code>&lt;form&gt;</code> Tag?</h2>
            <p>The <code>&lt;form&gt;</code> tag is used to create an HTML form for user input. It acts as a container for different types of input elements like text fields, checkboxes, radio buttons, submit buttons, etc.</p>

            <h2>🔍 Form Tag Attributes and Descriptions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Description</th>
                        <th>Example Usage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>action</code></td>
                        <td>URL where the form data will be submitted</td>
                        <td><code>action="/submit.php"</code></td>
                    </tr>
                    <tr>
                        <td><code>method</code></td>
                        <td>Specifies the HTTP method to use (GET or POST)</td>
                        <td><code>method="POST"</code></td>
                    </tr>
                    <tr>
                        <td><code>target</code></td>
                        <td>Specifies where to display the response (e.g., _blank)</td>
                        <td><code>target="_blank"</code></td>
                    </tr>
                    <tr>
                        <td><code>autocomplete</code></td>
                        <td>Specifies whether the form should have autocomplete on</td>
                        <td><code>autocomplete="on"</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>📋 Common Form Input Elements</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Purpose</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>&lt;input type="text"&gt;</code></td>
                        <td>Text input</td>
                        <td><code>&lt;input type="text" name="name"&gt;</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;input type="email"&gt;</code></td>
                        <td>Email input</td>
                        <td><code>&lt;input type="email" name="email"&gt;</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;input type="password"&gt;</code></td>
                        <td>Password input</td>
                        <td><code>&lt;input type="password" name="pass"&gt;</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;textarea&gt;</code></td>
                        <td>Multi-line text area</td>
                        <td><code>&lt;textarea name="msg"&gt;&lt;/textarea&gt;</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;select&gt;</code></td>
                        <td>Dropdown selection</td>
                        <td><code>&lt;select&gt;&lt;option&gt;&lt;/option&gt;&lt;/select&gt;</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;button&gt;</code></td>
                        <td>Form button</td>
                        <td><code>&lt;button type="submit"&gt;Submit&lt;/button&gt;</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="form-example">
                <h2>💡 Example: Basic Registration Form</h2>
                <form action="/submit" method="POST" class="html_form">
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" name="fullname" placeholder="Enter your name" required />

                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" required />

                    <label for="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <label for="bio">Your Bio:</label>
                    <textarea id="bio" name="bio" rows="4" placeholder="Write something about yourself..."></textarea>
                    <div class="html-form-checkbox">
                        <input type="checkbox" id="terms" name="terms" required />
                        <label for="terms">I agree to the terms and conditions</label>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>


    );
};
export default FormTags;
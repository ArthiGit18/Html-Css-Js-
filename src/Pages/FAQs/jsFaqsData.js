export const jsFaqs = [
    {
        question: "1. What is JavaScript?",
        answer: `JavaScript is a high-level, interpreted programming language used to make dynamic and interactive web pages. It can be used for client-side and server-side development.

Characteristics:
- Interpreted Language
  - code is executed line by line by browser's JS Engine
  - no need compilation before running code
- Dynamically Typed
  - no need to declare variable type explicitly, it is determined at runtime
- Multi Paradigm
  - supports object oriented, functional and procedural programming
- Asynchronous
  - supports asynchronous programming with callbacks, promises, async / await
- Weakly / Loosely Typed
  - can perform operations between different types; string + number leads to implicit type coercion
- Platform Independent
  - runs on any browser`
    },

    {
        question: "2. What are the data types in JavaScript?",
        answer: `JavaScript supports the following data types:

Primitive Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
Non-Primitive Types: Object, Array, Function`
    },

    {
        question: "3. What is a variable in JavaScript?",
        answer: `A variable is a named container used to store data that can be referenced and manipulated later in a program. Variables allow you to reuse and manage data dynamically.

How to Declare Variables:
- var – Function scoped, can be re-declared and updated
- let – Block scoped, can be updated but not re-declared in the same scope
- const – Block scoped, cannot be re-assigned after initialization

Examples:
var name = "Arthi";       // using var
let age = 25;             // using let
const country = "India";  // using const

Types of Data Stored in Variables:
- String – Text data ("Hello", 'World')
- Number – Numeric data (42, 3.14)
- Boolean – True or false (true, false)
- Array – Collection of values ([1, 2, 3])
- Object – Key-value pairs ({ name: "Arthi" })
- Null – Empty or no value
- Undefined – Declared but not assigned
- Symbol – Unique identifiers
- BigInt – Large integers

Note: JavaScript is dynamically typed, so the type of data a variable holds can change during runtime (except for const).`
    },
    {
        question: "4. What is the difference between var, let, and const?",
        answer: `var: Function scoped, hoisted, can be redeclared and updated.

let: Block scoped, cannot be redeclared in the same scope, but can be updated.

const: Block scoped, cannot be redeclared or updated (for primitives).`
    },
    {
        question: "5. What are template literals in JavaScript?",
        answer: `Template literals are enclosed by backticks (\`) and allow embedded expressions using \${expression}. They are useful for string interpolation and multi-line strings.

Advantages of Template Literals:
- String Interpolation: Easily embed variables and expressions inside strings using \${...}.
- Multi-line Strings: Allows you to create strings over multiple lines without escape characters.
- Improved Readability: Code becomes cleaner and easier to understand.
- Expression Evaluation: You can embed JavaScript expressions and calculations directly in strings.
- Tagged Templates: Advanced feature for custom string processing functions.`
    },
    {
        question: "6. What are functions in JavaScript? (All types)",
        answer: `Functions are blocks of code designed to perform a task.

Types of Functions:
- Function Declaration:
  function greet() { }
  ✅ Hoisted (can be used before it is declared).

- Function Expression:
  const greet = function() { }
  ✅ Not hoisted (must be defined before use).

- Arrow Function:
  const greet = () => { }
  ✅ Does not have its own this, arguments, or super.

- Anonymous Function:
  setTimeout(function() { }, 1000);
  ✅ Used for callbacks and short-term usage.

- Immediately Invoked Function Expression (IIFE):
  (function() { })();
  ✅ Used to create a private scope or avoid polluting global variables.`
    },
     {
    question: "7. What is the DOM in JavaScript?",
    answer: `DOM stands for Document Object Model. It is a browser-provided programming interface that represents the structure of an HTML or XML document as a tree of objects (nodes).

JavaScript interacts with the DOM to dynamically update the content, structure, and style of a web page.

Example:
document.getElementById("title").textContent = "Updated Title";

Types of DOM:
1. Core DOM:
   The standard model for any structured document (HTML or XML). Defines a document as a tree of nodes.
2. XML DOM:
   A standard for accessing and manipulating XML documents.
3. HTML DOM:
   A standard for accessing and manipulating HTML documents. All HTML elements are defined as objects.

Common DOM Methods:
- document.getElementById()
- document.querySelector()
- document.createElement()
- element.appendChild()
- element.remove()`
  },
  {
    question: "8. How do you select an element using JavaScript?",
    answer: `You can select elements from the DOM using various DOM selector methods.

Common methods to select elements:
- document.getElementById("id") – Selects an element by ID.
- document.getElementsByClassName("class") – Selects all elements with a given class name.
- document.getElementsByTagName("tag") – Selects all elements with a specific tag name.
- document.querySelector("selector") – Selects the first matching CSS selector.
- document.querySelectorAll("selector") – Selects all elements that match the CSS selector.

Example:
const heading = document.getElementById("main-heading");`
  },
  {
    question: "9. How do you change the content of an element in JavaScript?",
    answer: `You can change the content of an HTML element using:
- innerHTML: Sets/returns HTML inside an element.
- textContent: Sets/returns plain text.
- innerText: Similar to textContent, but respects styling.

Common Examples:
- element.innerHTML = "New content";
- element.textContent = "New content";
- element.innerText = "New content";

Example:
document.getElementById("message").innerHTML = "Welcome to JavaScript!";

Tip: Use innerHTML for HTML tags, and textContent for plain text.`
  },
  {
    question: "10. What is an event in JavaScript? (Event Handler, Event Listener)",
    answer: `An event in JavaScript is an action or occurrence that happens in the browser, like a user clicking a button, hovering over an element, submitting a form, or pressing a key.

Event Handler: A function that runs when an event occurs.
Example:
element.onclick = function() { alert("Clicked!"); };

Event Listener: A modern way to handle events using addEventListener(), which allows multiple handlers.
Example:
element.addEventListener("click", function() { alert("Clicked!"); });

Advantages of Event Listeners:
- Can attach multiple listeners to the same event
- Allows better separation of HTML and JS logic
- Supports event removal using removeEventListener()`
  },
  {
    question: "11. What is an Event Listener in JavaScript?",
    answer: `An event listener is a method used to wait for user interaction (clicks, input, etc.) and then execute a callback function.

Syntax:
element.addEventListener("event", callbackFunction);

Example:
document.getElementById("btn").addEventListener("click", function() {
  alert("Button Clicked!");
});

Common Event Types:
Mouse Events: click, dblclick, mouseover, mouseout, contextmenu
Keyboard Events: keydown, keyup, keypress
Form Events: submit, change, focus, blur
Window Events: load, resize, scroll, unload

Event Listener Properties:
- type – The type of event (e.g., "click")
- target – The element that triggered the event
- currentTarget – The element the listener is attached to
- eventPhase – Phase of event flow (capturing, target, bubbling)
- defaultPrevented – True if preventDefault() was called`
  },
  {
    question: "12. Event Handler vs Event Listener in JavaScript",
    answer: `🔸 Event Handler:
An event handler is a property assigned directly to a DOM element.

Example:
<button onclick="showAlert()">Click Me</button>
function showAlert() {
  alert("Hello from handler");
}

🔸 Event Listener:
An event listener uses addEventListener() to attach multiple listeners.

Example:
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  alert("Hello from listener");
});

🧠 Key Differences:
- Event Handlers overwrite previous handlers.
- Event Listeners allow multiple listeners on the same element.
- addEventListener gives more control (capturing phase, removal).

📚 Common Event Types:
Mouse: click, dblclick, mouseover, mouseout
Keyboard: keydown, keyup
Form: submit, change, focus, blur
Window: load, resize, scroll`
  },
  {
    question: "13. What is the difference between == and ===?",
    answer: `In JavaScript, both == and === are comparison operators.

- == (Equality Operator): Compares values after type conversion.
  Example: "5" == 5 ➝ true

- === (Strict Equality Operator): Compares value and type, no conversion.
  Example: "5" === 5 ➝ false

Best Practice: Always use === to avoid unexpected type coercion.`
  },
  {
    question: "14. What is the difference between null and undefined?",
    answer: `Both represent absence of value but differ in usage.

- undefined: A variable declared but not assigned a value.
  Example: let x; console.log(x); // undefined

- null: Assigned by a programmer to represent "no value".
  Example: let y = null;

Type Check:
- typeof undefined ➝ "undefined"
- typeof null ➝ "object" (a known JavaScript quirk)

Summary: Use null for intentional emptiness and undefined for uninitialized variables.`
  },
  {
    question: "15. What is an array in JavaScript? What are its methods?",
    answer: `An array is a special variable used to store multiple ordered values.

Example:
let fruits = ["apple", "banana", "cherry"];

Common Array Methods:
- push(): Add to end
- pop(): Remove from end
- shift(): Remove from beginning
- unshift(): Add to beginning
- splice(): Add/remove at a specific index
- slice(): Copy part of an array
- concat(): Merge arrays
- indexOf(): Find index
- forEach(): Loop over items
- map(): Create new array by transforming elements
- filter(): New array with elements passing a test
- reduce(): Reduce array to a single value

Note: Arrays in JavaScript are dynamic and resizable.`
  },
  {
    question: "16. What is a String in JavaScript?",
    answer: `A String is a sequence of characters enclosed in quotes and is used to represent text.

Examples:
let name = "Arthi";
let greeting = 'Hello';
let phrase = \`Welcome, \${name}\`;

Types of String Declaration:
- Double quotes: "Hello World"
- Single quotes: 'Hello World'
- Backticks: \`Hello \${name}\` (template literals)

Common String Methods:
- length: Returns length of the string
- toUpperCase(): Converts to uppercase
- toLowerCase(): Converts to lowercase
- includes(): Checks for substring
- slice(): Extracts part of the string
- replace(): Replaces part of the string

Example using template literals:
let greet = \`Hi, \${name}!\`; // Output: Hi, Arthi!`
  },
  {
    question: "17. What are objects in JavaScript and its methods?",
    answer: `Objects are collections of key-value pairs, where keys are property names and values can be anything (even functions).

Example:
const person = {
  name: "John",
  age: 30,
  greet: function() {
    return "Hello!";
  }
};

Common Object Methods:
- Object.keys(obj): Returns array of keys
- Object.values(obj): Returns array of values
- Object.entries(obj): Returns array of key-value pairs
- Object.assign(target, source): Copies properties
- delete obj.prop: Deletes a property
- obj.hasOwnProperty("key"): Checks if a key exists

Accessing Properties:
- person.name
- person["name"]`
  },
  {
    question: "18. What is the difference between slice() and splice()?",
    answer: `Both are array methods but serve different purposes:

- slice(start, end): Returns a shallow copy from start to end (excluding end). Does NOT modify the original array.
  Example: let newArr = arr.slice(1, 3);

- splice(start, deleteCount, item1, ...): Modifies the array by removing/replacing/inserting elements.
  Example: arr.splice(1, 2, "newItem");

Key Difference:
- slice(): Non-destructive (original remains unchanged)
- splice(): Destructive (original is modified)`
  },
  {
    question: "19. What are the ES6 features in JavaScript?",
    answer: `ES6 (ECMAScript 2015) introduced many features to enhance JavaScript development.

Common Features:
- let and const: Block-scoped variable declarations
- Arrow Functions: Shorter syntax for writing functions
- Template Literals: Support for multiline strings and interpolation
- Default Parameters: Assign default values to function parameters
- Destructuring: Unpack values from arrays or properties from objects
- Spread and Rest Operators: Expand or collect elements in arrays or objects
- Classes: Cleaner syntax for object-oriented programming
- Modules: Use import/export to split code
- Promises: Handle asynchronous operations more effectively
- Enhanced Object Literals: Cleaner and shorter object syntax

Example:
const greet = (name = "Guest") => \`Hello, \${name}!\`;`
  },
  {
    question: "20. What is a Promise in JavaScript?",
    answer: `A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

States of a Promise:
- Pending: Initial state
- Fulfilled: Operation completed successfully
- Rejected: Operation failed

Creating a Promise:
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

Handling a Promise:
promise
  .then(result => console.log("Resolved:", result))
  .catch(error => console.error("Rejected:", error))
  .finally(() => console.log("Promise complete"));

Key Methods:
- .then(): Handles resolved result
- .catch(): Handles errors
- .finally(): Executes after completion (resolved or rejected)

Use Cases:
- API calls, timers, async tasks, file reads`
  },
  {
    question: "21. What is async/await in JavaScript?",
    answer: `async/await are ES8 features that simplify working with Promises.

- async: Declares a function that always returns a Promise
- await: Pauses execution until a Promise resolves

Example:
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

Benefits:
- Synchronous-like code for async operations
- Easier to read and maintain
- Great for chaining multiple asynchronous calls`
  },
   {
    question: "22. What is hoisting in JavaScript?",
    answer: `Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.

This means:
- Variables and functions can be referenced before they're declared.
- Only declarations are hoisted, not initializations.

Example:
console.log(x); // undefined
var x = 5;

Function Declarations:
greet(); // "Hello"
function greet() {
  console.log("Hello");
}

let & const:
- They are hoisted but not initialized.
- Accessing them before declaration results in a "Temporal Dead Zone" error.

Tip:
Always declare variables at the beginning of their scope to avoid unexpected behavior.`
  },
  {
    question: "23. What are map, filter, and reduce methods?",
    answer: `These are high-order array methods used to transform and process data.

- map(): Returns a new array with results of a function applied to each element.
  Example: [1, 2, 3].map(x => x * 2); // [2, 4, 6]

- filter(): Returns a new array with elements that pass a test.
  Example: [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]

- reduce(): Reduces array to a single value by applying an accumulator function.
  Example: [1, 2, 3, 4].reduce((acc, val) => acc + val, 0); // 10

Use Case:
- Ideal for processing or transforming arrays in a functional programming style.`
  },
  {
    question: "24. What is JSON in JavaScript?",
    answer: `JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data.

Format:
- Text-based
- Key-value pairs
- Similar to JS objects, but keys must be in double quotes.

Example:
const jsonData = '{ "name": "Alice", "age": 25 }';

Common Methods:
- JSON.parse(): Converts JSON string to a JS object
- JSON.stringify(): Converts JS object to a JSON string

Use Case:
- Widely used in APIs and communication between frontend and backend.`
  },
   {
    question: "25. What is destructuring in JavaScript?",
    answer: `Destructuring is a feature that allows unpacking values from arrays or properties from objects into individual variables.

Array Destructuring:
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"

Object Destructuring:
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // "Alice"

Default Values:
const { city = "Unknown" } = person;

Use Cases:
- Simplifies variable assignment
- Cleaner and more readable code
- Useful in function arguments and React props`
  },
  {
    question: "26. What is the spread operator in JavaScript?",
    answer: `The spread operator (...) expands elements of an iterable (array or object) into individual elements.

Use in Arrays:
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

Use in Objects:
const obj1 = { name: "Alice" };
const obj2 = { ...obj1, age: 25 };
console.log(obj2); // { name: "Alice", age: 25 }

Function Argument Example:
const nums = [1, 2, 3];
Math.max(...nums); // 3

Common Use Cases:
- Merging arrays/objects
- Copying arrays/objects
- Expanding values in function calls`
  },
  {
    question: "27. What is the rest operator in JavaScript?",
    answer: `The rest operator (...) collects multiple elements into a single array or object. It's the opposite of the spread operator.

Function Parameters:
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
sum(1, 2, 3); // 6

In Destructuring:
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

In Objects:
const { name, ...info } = { name: "Alice", age: 25, city: "Paris" };
console.log(info); // { age: 25, city: "Paris" }

Use Cases:
- Functions with variable arguments
- Extracting remaining items
- Grouping array/object remainders`
  },
  {
    question: "28. What is the difference between the Spread and Rest operators in JavaScript?",
    answer: `Both spread and rest use the same syntax (...) but serve different purposes based on context.

🔹 Spread Operator:
- Expands elements from arrays, objects, or strings.
Examples:
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

  function sum(a, b, c) { return a + b + c; }
  sum(...[1, 2, 3]); // 6

🔹 Rest Operator:
- Collects multiple elements into a single array or object.
Examples:
  function greet(message, ...names) {
    console.log(message, names);
  }
  greet("Hello", "Alice", "Bob"); // "Hello" [ "Alice", "Bob" ]

  const [first, ...rest] = [10, 20, 30];
  console.log(first); // 10
  console.log(rest);  // [20, 30]

🆚 Key Differences:
- Spread: expands values | used in arrays, objects, function calls
- Rest: collects values | used in parameters, destructuring
- Rest must be the last parameter in a function`
  },
  {
    question: "29. What is the fetch method in JavaScript?",
    answer: `fetch() is used to make HTTP requests. It returns a Promise that resolves to the response.

Basic Example:
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

Features:
- Promise-based
- Supports HTTP methods (GET, POST, etc.)
- Native to modern browsers
- Use with async/await for better syntax`
  },
  {
    question: "30. What are the falsy values in JavaScript?",
    answer: `Falsy values are treated as false in Boolean contexts.

Falsy values include:
- false
- 0
- -0
- 0n (BigInt zero)
- "" or ''
- null
- undefined
- NaN

Example:
if (!0) { console.log("Falsy"); } // Output: "Falsy"

All other values are truthy (like [], {}, "hello", 42, etc.).`
  },
  {
    question: "31. What is a Higher-Order Function in JavaScript?",
    answer: `A Higher-Order Function (HOF) is a function that either:
- Takes one or more functions as arguments
- Returns a function as its result

Benefits:
- Makes code more modular, reusable, and expressive

Examples:
1. Passing a function as an argument:
function greet(name) {
  return "Hello " + name;
}
function processUser(callback) {
  const result = callback("Arthi");
  console.log(result); // Hello Arthi
}
processUser(greet);

2. Returning a function:
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10

Common HOFs: map(), filter(), reduce(), forEach()`
  },
  {
    question: "32. What is Lexical Scoping in JavaScript?",
    answer: `Lexical Scoping means that scope is determined by where functions are written in the code.

Inner functions can access variables from outer functions.

Example:
function outer() {
  let name = "Arthi";
  function inner() {
    console.log(name); // "Arthi"
  }
  inner();
}
outer();

Key Points:
- Scope is defined by position in code (not where the function is called)
- Functions carry the scope they were defined in
- Lexical scope is the foundation of closures`
  },
  {
    question: "33. Common Conversion Methods in JavaScript",
    answer: `1. Array to String: 
- Use join() or toString()
  const arr = [1, 2]; arr.join(","); // "1,2"

2. String to Array:
- Use split()
  "a,b,c".split(","); // ["a", "b", "c"]

3. String to Object:
- Use JSON.parse()
  JSON.parse('{"key": "value"}');

4. Object to String:
- Use JSON.stringify()
  JSON.stringify({ key: "value" });

5. splice():
- Adds/removes items from an array and modifies the original array

6. slice():
- Returns a shallow copy without modifying the original

7. split():
- Splits a string into an array using a separator`
  }


];
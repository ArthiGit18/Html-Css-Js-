import React, { useState, useEffect, useRef } from 'react'
import Nav from '../HomePage/Nav'
import Footer from '../HomePage/Footer'

const code = `
🎈 store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

🎈 add two numbers
const sum = num1 + num2;

🎈 display the sum
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);
`;
const sqrt = `
// take the input from the user
const number = prompt('Enter the number: ');

const result = Math.sqrt(number);
console.log("The square root of " +number+ " is " + result");
`
const sqrt2 = `
const number1 = 2.25;
const number2 = -4;
const number3 = 'hello';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log("The square root of " +number1 + " is " + result1");
console.log("The square root of " + number2 + "is " + result2");
console.log("The square root of "+number3+ "is" +result3");
`


const NumberProg = () => {


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
        <>
        <Nav />
            <section className="faq-container" data-entity="faq-section" style={{marginTop: "100px"}}>
                <h1>Simple Number Programming</h1>
                <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='faqs_input'
                    data-entity="faq-search"
                />
                <div ref={faqContainerRef} data-entity="faq-list">
                    <div className='faq-item' data-entity="faq-item">
                        <h2>What is Number Programming?</h2>
                        <p>Number programming involves using numbers in various ways to solve problems, create patterns, or perform calculations.</p>
                    </div>
                    <div className='faq-item' data-entity="faq-item">
                        <h2>Printing statement</h2>
                        <h3>1. Using console.log()</h3>
                        <pre>
                            🎈 the hello world program<br></br>
                            console.log('Hello World');
                        </pre>
                        <h3>2. Using alert()</h3>
                        <pre>
                            🎈 the hello world program <br></br>
                            alert("Hello, World!");
                        </pre>
                        <h3>3. Using document.write()</h3>
                        <pre>
                            🎈 the hello world program<br></br>
                            document.write('Hello, World!');
                        </pre>
                    </div>
                    <div className='faq-item' data-entity="faq-item">
                        <h2>How to declare a variable?</h2>
                        <p>In JavaScript, you can declare a variable using the keywords <code>var</code>, <code>let</code>, or <code>const</code>.</p>
                        <pre>
                            🎈 Using var<br></br>
                            var myVariable = 10;<br></br>
                            🎈 Using let<br></br>
                            let myLetVariable = 20;<br></br>
                            🎈 Using const<br></br>
                            const myConstVariable = 30;
                        </pre>
                    </div>
                    <div className='faq-item' data-entity="faq-item">
                        <h2>2.Add Two Numbers</h2>
                        <pre>
                            const num1 = 5;<br></br>
                            const num2 = 3;<br></br>

                            🎈 add two numbers<br></br>
                            const sum = num1 + num2;<br></br>

                            🎈 display the sum<br></br>
                            console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
                        </pre>
                        <h3>Output:</h3>
                        <pre>The sum of 5 and 3 is: 8</pre>
                        <h2>3.Add Two Numbers Entered by the User</h2>
                        <pre style={{ whiteSpace: "pre-wrap" }}></pre>

                        <pre style={{ whiteSpace: "pre-wrap" }}>
                            {code}
                        </pre>
                        <h3>Output:</h3>
                        <pre>Enter the first number 5<br></br>
                            Enter the second number 3<br></br>
                            The sum of 5 and 3 is: 8</pre>

                    </div>
                    <div className='faq-item'>
                        <h2>4.Square Root of a Number</h2>
                        <pre>{sqrt}</pre>
                        <h3>Output:</h3>
                        <pre>Enter the number: 9<br></br>
                            The square root of 9 is 3
                        </pre>
                        <h2>5.Square Root of Different Data Types</h2>
                        <pre>{sqrt2}</pre>
                        <h3>Output:</h3>
                        <pre>The square root of 2.25 is 1.5<br></br>
                            The square root of -4 is NaN<br></br>
                            The square root of hello is NaN<br></br>
                        </pre>

                    </div>
                    <div className='faq-item'>
                        <h2>6.Print only the Even Numbers</h2>
                        <p>
                            To print only even numbers from a given range, you can use a loop to iterate through the numbers and check if each number is even by using the modulus operator (%).
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            for (let i = 1; i &lt;= 10; i++) {'{'}<br />
                            &nbsp;&nbsp;if (i % 2 === 0) {'{'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br />
                            &nbsp;&nbsp;{'}'}<br />
                            {'}'}
                        </pre>
                        <h3>Output:</h3>
                        <pre>2<br />
                            4<br />
                            6<br />
                            8<br />
                            10
                        </pre>
                        <img src="./assets/Programs/even.png" alt="Even Numbers Program" className='faq-image' />
                    </div>
                    <div className='faq-item'>
                        <h2>7.Print only the Odd Numbers</h2>
                        <p>
                            To print only odd numbers from a given range, you can use a loop to iterate through the numbers and check if each number is odd by using the modulus operator (%).
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            for (let i = 1; i &lt;= 10; i++) {'{'}<br />
                            &nbsp;&nbsp;if (i % 2 !== 0) {'{'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br />
                            &nbsp;&nbsp;{'}'}<br />
                            {'}'}
                        </pre>
                        <h3>Output:</h3>
                        <pre>1<br />
                            3<br />
                            5<br />
                            7<br />
                            9
                        </pre>
                        <img src="./assets/Programs/odd.png" alt="Odd Numbers Program" className='faq-image' />
                    </div>
                    <div className='faq-item'>
                        <h2>    8.Print only the Prime Numbers</h2>
                        <p>
                            To print only prime numbers from a given range, you can use a loop to iterate through the numbers and check if each number is prime by checking if it has any divisors other than 1 and itself.
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            for (let i = 2; i &lt;= 20; i++) {'{'}<br />
                            &nbsp;&nbsp;let isPrime = true;<br />
                            &nbsp;&nbsp;for (let j = 2; j &lt; i; j++) {'{'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;if (i % j === 0) {'{'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isPrime = false;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                            &nbsp;&nbsp;{'}'}<br />
                            &nbsp;&nbsp;if (isPrime) {'{'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br />
                            &nbsp;&nbsp;{'}'}<br />
                            {'}'}
                        </pre>
                        <h3>Output:</h3>
                        <pre>2<br />
                            3<br />
                            5<br />
                            7<br />
                            11<br />
                            13<br />
                            17<br />
                            19
                        </pre>

                    </div>
                    <div className='faq-item'>
                        <h2>9.Print only the Fibonacci Series</h2>
                        <p>
                            To print the Fibonacci series, you can use a loop to generate the series by adding the two previous numbers to get the next number.
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            let a = 0, b = 1;<br />
                            console.log(a);<br />
                            console.log(b);<br />
                            for (let i = 2; i &lt; 10; i++) {'{'}<br />
                            &nbsp;&nbsp;let c = a + b;<br />
                            &nbsp;&nbsp;console.log(c);<br />
                            &nbsp;&nbsp;a = b;<br />
                            &nbsp;&nbsp;b = c;<br />
                            {'}'}
                        </pre>
                        <h3>Output:</h3>
                        <pre>0<br />
                            1<br />
                            1<br />
                            2<br />
                            3<br />
                            5<br />
                            8<br />
                            13<br />
                            21
                        </pre>
                    </div>
                    <div className='faq-item'>
                        <h2>10.Print only the Factorial of a Number</h2>
                        <p>
                            To print the factorial of a number, you can use a loop to multiply all the integers from 1 to that number.
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            const num = 5;<br />
                            let factorial = 1;<br />
                            for (let i = 1; i &lt;= num; i++) {'{'}<br />
                            &nbsp;&nbsp;factorial *= i;<br />
                            {'}'}<br />
                            console.log('The factorial of ' + num + ' is: ' + factorial);
                        </pre>
                        <h3>Output:</h3>
                        <pre>The factorial of 5 is: 120</pre>
                        <img src="./assets/Programs/factorial.png" alt="Factorial Program" className='faq-image' />
                    </div>
                    <div className='faq-item'>
                        <h2>11.Print only the Palindrome Numbers</h2>
                        <p>
                            To print palindrome numbers, you can check if a number reads the same backward as forward.
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            const num = 121;<br />
                            const strNum = num.toString();<br />
                            const reversedNum = strNum.split('').reverse().join('');<br />
                            if (strNum === reversedNum) {'{'}<br />
                            &nbsp;&nbsp;console.log(num + ' is a palindrome');<br />
                            {'}'} else {'{'}<br />
                            &nbsp;&nbsp;console.log(num + ' is not a palindrome');<br />
                            {'}'}
                        </pre>
                        <h3>Output:</h3>
                        <pre>121 is a palindrome</pre>
                        {/* <img src="./assets/Programs/reversed.png" alt="Palindrome Program" className='faq-image' /> */}
                    </div>
                    <div className='faq-item'>
                        <h2>12.Print only the Armstrong Numbers</h2>
                        <p>
                            To print Armstrong numbers, you can check if the sum of the cubes of the digits of a number is equal to the number itself.
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            const num = 153;<br />
                            const strNum = num.toString();<br />
                            let sum = 0;<br />
                            for (let i = 0; i &lt; strNum.length; i++) {'{'}<br />
                            &nbsp;&nbsp;sum += Math.pow(parseInt(strNum[i]), 3);<br />
                            {'}'}<br />
                            if (sum === num) {'{'}<br />
                            &nbsp;&nbsp;console.log(num + ' is an Armstrong number');<br />
                            {'}'} else {'{'}<br />
                            &nbsp;&nbsp;console.log(num + ' is not an Armstrong number');<br />
                            {'}'}
                        </pre>
                        <h3>Output:</h3>
                        <pre>153 is an Armstrong number</pre>
                    </div>
                    <div className='faq-item'>
                        <h2>13.Print only the Perfect Numbers</h2>
                        <p>
                            To print perfect numbers, you can check if the sum of the divisors of a number (excluding itself) is equal to the number.
                        </p>
                        <pre>
                            &#x1F388; Using a for loop<br />
                            const num = 6;<br />
                            let sum = 0;<br />
                            for (let i = 1; i &lt; num; i++) {'{'}<br />
                            &nbsp;&nbsp;if (num % i === 0) {'{'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;sum += i;<br />
                            &nbsp;&nbsp;{'}'}<br />
                            {'}'}<br />
                            if (sum === num) {'{'}<br />
                            &nbsp;&nbsp;console.log(num + ' is a perfect number');<br />
                            {'}'} else {'{'}<br />
                            &nbsp;&nbsp;console.log(num + ' is not a perfect number');<br />
                            {'}'}
                        </pre>
                        <h3>Output:</h3>
                        <pre>6 is a perfect number</pre>
                    </div>

                </div>
            </section>
            <Footer />
        </>

    )
}

export default NumberProg
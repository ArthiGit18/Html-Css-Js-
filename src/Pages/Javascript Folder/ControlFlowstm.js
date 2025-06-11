import React from 'react'

const ControlFlowstm = () => {
    return (
        <div>
            <section className="container">
                <h1>🔁 JavaScript <span>Control Flow</span></h1>

                <div className="card">
                    <h2>📌 What is Control Flow?</h2>
                    <p>Control flow statements determine the order in which code is executed based on conditions.</p>
                </div>

                <div className="card">
                    <h2>🔎 if, else if, else</h2>
                    <pre>
                        <code>
                            {`let score = 85;

if (score > 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}
// Output: Good`}
                        </code>
                    </pre>
                </div>

                <div className="card">
                    <h2>🔄 switch Statement</h2>
                    <pre>
                        <code>
                            {`let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Sunday":
    console.log("Relax day");
    break;
  default:
    console.log("Just another day");
}
// Output: Start of the week`}
                        </code>
                    </pre>
                </div>

                <h1>🔁 JavaScript <span>Loops</span></h1>

                <div className="card">
                    <h2>📌 What is a Loop?</h2>
                    <p>Loops allow you to repeat a block of code multiple times as long as a specified condition is true.</p>
                </div>

                <div className="card">
                    <h2>🔄 for Loop</h2>
                    <p>The <code>for</code> loop is used when the number of iterations is known.</p>
                    <pre>
                        <code>
                            {`for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
// Output: 1 2 3 4 5`}
                        </code>
                    </pre>
                </div>

                <div className="card">
                    <h2>🔁 while Loop</h2>
                    <p>The <code>while</code> loop continues as long as the condition is true.</p>
                    <pre>
                        <code>
                            {`let i = 1;
while (i <= 5) {
  console.log("While Count:", i);
  i++;
}
// Output: 1 2 3 4 5`}
                        </code>
                    </pre>
                </div>

                <div className="card">
                    <h2>🔂 do...while Loop</h2>
                    <p>The <code>do...while</code> loop runs the code at least once, then checks the condition.</p>
                    <pre>
                        <code>
                            {`let i = 1;
do {
  console.log("Do While Count:", i);
  i++;
} while (i <= 5);
// Output: 1 2 3 4 5`}
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

export default ControlFlowstm
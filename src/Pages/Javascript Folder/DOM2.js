import React, {useEffect} from 'react'

const DOM2 = () => {

    useEffect(() => {
    // innerText - updates text content only
    document.getElementById("text-example").innerText = "🌟 Updated with innerText";

    // innerHTML - updates HTML structure
    document.getElementById("html-example").innerHTML = "<strong>🔥 Bold HTML added!</strong>";

    // textContent - similar to innerText but includes hidden text
    document.getElementById("content-example").textContent = "📄 Replaced using textContent";
  }, []);

  return (
    <div>
         <section className="container">
      <h1>📝 Update Element <span>Content</span> using DOM</h1>

      <div className="card">
        <h2>1️⃣ Using <code>innerText</code></h2>
        <p id="text-example">Original Text</p>
        <pre><code>
document.getElementById(&quot;text-example&quot;).innerText = &quot;🌟 Updated with innerText&quot;;
        </code></pre>
      </div>

      <div className="card">
        <h2>2️⃣ Using <code>innerHTML</code></h2>
        <p id="html-example">This will be replaced with HTML</p>
        <pre><code>
document.getElementById(&quot;html-example&quot;).innerHTML = &quot;&lt;strong&gt;🔥 Bold HTML added!&lt;/strong&gt;&quot;;
        </code></pre>
      </div>

      <div className="card">
        <h2>3️⃣ Using <code>textContent</code></h2>
        <p id="content-example">Some content</p>
        <pre><code>
document.getElementById(&quot;content-example&quot;).textContent = &quot;📄 Replaced using textContent&quot;;
        </code></pre>
      </div>
    </section>
    </div>
  )
}

export default DOM2
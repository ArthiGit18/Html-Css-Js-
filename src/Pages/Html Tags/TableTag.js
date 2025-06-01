import React from 'react'

const TableTag = () => {
    return (
        <div>
            <h2>📊 How to Create a Table in HTML</h2>

            <p>Here's a simple example of a table with headers and rows:</p>

            <table>
                <caption>Student Marks Table</caption>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arjun</td>
                        <td>Math</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>Priya</td>
                        <td>Science</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <td>Rahul</td>
                        <td>English</td>
                        <td>92</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2"><strong>Total Students</strong></td>
                        <td>3</td>
                    </tr>
                </tfoot>
            </table>

            <h3>🔤 Basic Table Tags Used</h3>
            <table>
                <tr>
                    <th>Tag</th>
                    <th>Purpose</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><code>&lt;table&gt;</code></td>
                    <td>Defines the table container</td>
                    <td><code>&lt;table&gt;...&lt;/table&gt;</code></td>
                </tr>
                <tr>
                    <td><code>&lt;tr&gt;</code></td>
                    <td>Defines a row</td>
                    <td><code>&lt;tr&gt;...&lt;/tr&gt;</code></td>
                </tr>
                <tr>
                    <td><code>&lt;th&gt;</code></td>
                    <td>Table header (bold)</td>
                    <td><code>&lt;th&gt;Name&lt;/th&gt;</code></td>
                </tr>
                <tr>
                    <td><code>&lt;td&gt;</code></td>
                    <td>Table data cell</td>
                    <td><code>&lt;td&gt;Arjun&lt;/td&gt;</code></td>
                </tr>
                <tr>
                    <td><code>&lt;caption&gt;</code></td>
                    <td>Table title</td>
                    <td><code>&lt;caption&gt;Title&lt;/caption&gt;</code></td>
                </tr>
            </table>

              <h2>📌 Table with <code>colspan</code> and <code>rowspan</code> Example</h2>

  <table>
    <caption>Employee Shift Schedule</caption>
    <tr>
      <th>Employee</th>
      <th>Day</th>
      <th colspan="2">Shift</th>
    </tr>
    <tr>
      <td rowspan="2">Aarti</td>
      <td>Monday</td>
      <td>Morning</td>
      <td>8 AM - 12 PM</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>Evening</td>
      <td>1 PM - 5 PM</td>
    </tr>
    <tr>
      <td rowspan="2">Ravi</td>
      <td>Wednesday</td>
      <td colspan="2">Full Day (9 AM - 5 PM)</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>Night</td>
      <td>6 PM - 10 PM</td>
    </tr>
  </table>

  <h3>🔍 Tags and Usage</h3>
  <table>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
      <th>Usage</th>
    </tr>
    <tr>
      <td><code>colspan="2"</code></td>
      <td>Merges 2 columns into one</td>
      <td><code>&lt;td colspan="2"&gt;Content&lt;/td&gt;</code></td>
    </tr>
    <tr>
      <td><code>rowspan="2"</code></td>
      <td>Merges 2 rows into one</td>
      <td><code>&lt;td rowspan="2"&gt;Content&lt;/td&gt;</code></td>
    </tr>
  </table>
        </div>
    )
}

export default TableTag
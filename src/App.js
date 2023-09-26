import React, { useState, useEffect } from "react";


export default function App() {
const [name, setName] = useState(0);
const [mobile, setMobile] = useState("");
const [darkMode, setDarkMode] = useState(false);
let dependency =  [name, mobile];


useEffect(() => {
console.log(`
the reason of why the useEffect called when we change the darkmode: 
because the dependency is an object and the useEffect can receive just an array of states or variables
so we cant pass an object which contain states ot variables, if we do that the useEffect will take the default value (undefined)

`);
}, dependency);


return (
<div className={`container ${darkMode ? "bgDark" : "bgLight"}`}>
<input
type="text"
id="name"
placeholder="Name"
onChange={(e) => setName(e.target.value)}
/>
<input
type="text"
id="mobile"
placeholder="Mobile"
onChange={(e) => setMobile(e.target.value)}
/>
<div className="darkmode">
<input
type="checkbox"
id="darkMode"
onChange={() => setDarkMode(!darkMode)}
/>
Enable dark mode
</div>
</div>
);
}
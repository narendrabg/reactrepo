import React from "react";

export default function Main(props) {
 return (
  
<main className={props.darkMode ? "dark" : ""}>
 <h1 className="main--title">Funfacts about React</h1>
 <ul className="main--items">
  <li>Was first released in 2013</li>
  <li>Was originally created by John</li>
  <li>This is first</li>
  <li>This is first</li>
  <li>This is first</li>
 </ul>
</main>
 );
}
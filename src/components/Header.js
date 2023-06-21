import React from "react";
import ReactLogo from "../images/logo192.png"
export default function Header() {
return (
 <header>
  <nav className="navbar">
   <img src="images/logo192.png" alt="React Logo" className="logo"></img>   
   <ul className="nav-link">
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
   </ul>
  </nav>
 </header>
);
}

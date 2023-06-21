import React from "react";
export default function Navbar(props) {
 return (
<nav className={props.darkMode ? "dark": ""}>
 <img src="../images/reactlogo.png" alt ="React Logo" className="nav--logo"></img>
 <h3 className="nav--logo-text">React Funfacts</h3>
 <div className="toggler">
  <p className="togger--light">Light</p>
  <div className="toggler--slider" onClick={props.toggleDarkMode}>
   <div className="toggle--slidebar--circle"></div>
    </div> 
    <p className="togger--Dark">Dark</p>
 </div>
</nav>
 );
}
import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [input, setInput] = useState("none");

  return (
    <nav>
      <div className="logo">
        <div className="menu">
          <span className="material-symbols-outlined"> menu </span>
        </div>
        <span className="ytname">
          <img className="yt" src="youtube.png" alt="" />
        </span>
      </div>
      <div className="search">
        <div style={{display:input}} className="search-icon-first">
          <span
            
            className="material-icons"
          >
            
            search
          </span>
        </div>
        <input
          onFocus={() => {
            setInput("flex");
            console.log("Dsa");
          }}
          onBlur={() => {
            setInput("none");
            console.log("Dsaw");
          }}
          id="input"
          placeholder="Search"
          type="text"
        />
        <div className="close">
          <span className="material-icons"> close </span>
        </div>
        <div className="search-icon">
          <span className="material-icons"> search </span>
        </div>
        <div className="mic">
          <span className="material-icons"> mic </span>
        </div>
      </div>

      <div className="account">
        <div className="dots">
          <span className="material-icons"> more_vert </span>
        </div>
        <button className="signbutton">
          <div className="xx">
            <span className="material-icons-outlined"> account_circle </span>
            Sign in
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Main.css"

// This file exports both the Header

export function MainHeader({ children }) {
  return (
    <div className="Main-header">
      <h1>The Festival of Elves</h1>
    </div>
  );
}

export default MainHeader;
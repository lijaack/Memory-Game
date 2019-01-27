import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor:"#009400", }}
      className="jumbotron baloo text-light"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

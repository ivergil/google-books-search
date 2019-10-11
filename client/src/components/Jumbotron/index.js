import React from "react";

function Jumbotron({ children }) {


  return (
    <div
      style={{ backgroundImage: `url()`,
      backgroundSize: "cover", height: 150, clear: "both", paddingTop: 30, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
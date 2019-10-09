import React from "react";

function Jumbotron({ children }) {


  return (
    <div
      style={{ backgroundImage: `url()`,
      backgroundSize: "cover", height: 200, clear: "both", paddingTop: 50, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
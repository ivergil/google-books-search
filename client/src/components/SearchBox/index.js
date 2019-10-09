import React from "react";
// import "../styles/resultsCard.css";

// This file exports the Input, TextArea, and SearchBtn components

export function Input(props) {


    return (
        <div className="form-group">
            <input className="ff form-control" {...props} />
        </div>
    );
}

export function SearchBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">
            {props.children}
        </button>
    );
}
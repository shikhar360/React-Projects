import React from "react";

export default function Front(props) {
  return (
    <div className="first-Page">
      <h1 className="title">Quizzical </h1>
      {/* <h2 className="title">(Quizzical)</h2> */}
      <button onClick={props.nextPage} className="btn">
        Click to Start
      </button>
    </div>
  );
}

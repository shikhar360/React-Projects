import React from "react";
import { useGlobalContext } from "../Context";

export default function Details() {
  const { state, dispatch } = useGlobalContext();
  function filterIt(id) {
    return dispatch({ type: "FILTER", payload: id });
  }

  return state.map((itm) => {
    return itm.text || itm.amount ? (
      <div key={itm.id} className="new-flex">
        <div
          className={`${
            itm.amount < 0 ? "negative details" : "details"
          } relative`}
        >
          <span>{itm.text}</span>
          <span>{itm.amount}</span>
        </div>
        <span onClick={() => filterIt(itm.id)}>
          <img
            className="del"
            src="https://img.icons8.com/fluency-systems-regular/48/undefined/x.png"
            alt="delete"
          />
        </span>
      </div>
    ) : null;
  });
}

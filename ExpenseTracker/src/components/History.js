import React from "react";
import Details from "./Details";
import { useGlobalContext } from "../Context";
export default function History() {
  const [more, setMore] = React.useState(false);
  const { state } = useGlobalContext();
  return (
    <div className="history-container flex">
      <h1 className="history-title"> History</h1>
      <div className="reverse">
        <Details />
      </div>
    </div>
  );
}

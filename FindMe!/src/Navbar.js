import React from "react";
import logo from "./images/logo.png";

export default function Navbar(props) {
  return (
    <nav className="col-span-2 item-center mx-10 pt-5 ">
      <div className="logos flex items-center justify-between">
        <img className="w-36 rounded-md" src={logo} alt="logoimg" />
        <div>
          <div className=" align-center justify-between ">
            <span
              onClick={props.typeOfModal}
              className=" mx-4 bg-lime-500 rounded-md px-4 py-2 text-white font-semibold hover:bg-lime-700 ease-out"
            >
              {props.modal ? "CLOSE" : "About"}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

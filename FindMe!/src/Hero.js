import React from "react";
import img from "./images/find3.jpg";
import dot from "./images/dotted.png";

export default function Hero(props) {
  return (
    <div className="hero flex flex-col">
      {/* <Navbar /> */}
      <section className="flex flex-col justify-center sm:grid   h-screen w-screen sm:grid-cols-2 sm:justify-items-center items-center font-mono  relative ">
        <div className=" sm:w-3/5 w-4/5 flex flex-col items-center justify-center">
          <h1 className="bg-amber-400 font-bold text-2xl sm:text-7xl rounded-md text-center tracking-wide mb-12 ">
            ARE YOU LOST SOMEWHERE?
          </h1>
          <h4 className="my-5 leading-normal font-medium mb-12">
            Use our{" "}
            <b className="bg-violet-700 text-slate-100 rotate-6 rounded-md px-1 py-1 inline-block">
              FindMe!
            </b>{" "}
            app to know your{" "}
            <span className="underline text-red-700 font-semibold">
              current location
            </span>{" "}
            as well as information about your neighbour countries as well, and
            guess what we are better than Google Maps (just kidding ;)
          </h4>
        </div>
        <div className="">
          <img
            className=" max-w-xs sm:max-w-md my-5 mx-5 rounded-xl"
            src={img}
            alt="heroimage "
          />
        </div>
        <img className="dot hidden sm:block " src={dot} alt="some-styling" />
        {!props.toggle ? (
          <span className="absolute right-6 bottom-2 bg-rose-600 rounded-md px-3 py-1 sm:px-4 sm:py-2 sm:text-large text-base text-white">
            Please allow Location In order to Work
          </span>
        ) : null}
      </section>
    </div>
  );
}

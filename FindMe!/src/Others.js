import React from "react";

export default function Others(props) {
  return (
    <article className="country flex flex-col items-center justify-center max-w-full max-h-full mx-auto my-4">
      <div
        className="div mx-2 px-20 my-6 py-4 rounded-md bg-amber-400 hover:bg-amber-700"
        onClick={props.handleClick}
      >
        {" "}
        {!props.toggle ? "Show More" : "Show Less"}
      </div>
      {props.toggle && props.myCountry ? (
        <div className="w-120 h-100 rounded-md overflow-hidden">
          <img
            src={props.myCountry.flags.png}
            alt="countryflag "
            className="country__img"
          />
          <div className="country__data">
            <h3 className="country__name">{props.myCountry.name.common}</h3>
            <h4 className="country__region">{props.myCountry.region}</h4>
            <p className="country__row">
              <span>👫</span> Population - {props.myCountry.population}
            </p>
            <p className="country__row">
              <span>👂</span> Languages -{" "}
              {Object.values(props.myCountry.languages).toString()}
            </p>
            <p className="country__row">
              <span>💰</span>
              {Object.keys(props.myCountry.currencies).toString()}
            </p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

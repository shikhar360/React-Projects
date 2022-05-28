import React from "react";
import up from "./images/up.png";
import down from "./images/down.png";

export default function Content(props) {
  const [toggle, setToggle] = React.useState(false);
  // function passValue(id) {
  //   props.handleClick(id);
  // }

  function handleClick2() {
    setToggle(!toggle);
  }

  const {
    id,
    img,
    symbol,
    name,
    currentPrice,
    price24,
    change24,
    mkt,
    vol,
    high,
    low,
  } = props;

  return (
    <div className="top">
      <div className="card flx fs">
        <div className="bx flx">
          <img className="image" src={img} alt="coin" />
          <span className="symbol"> {symbol.toUpperCase()}</span>
        </div>

        <div className="bx2 flx ">
          <span className="name">{name}</span>
          <div className="tp">
            <span className={currentPrice > 0 ? "green" : "red"}>
              {currentPrice}
            </span>
            <br />
            {toggle ? null : (
              <button onClick={handleClick2} className="btn">
                <span>More-Info</span>
                <img
                  src={down}
                  alt="arrow"
                  style={{
                    width: "1.5rem",
                    height: "1.5reem",
                    float: "right",
                    marginLeft: "1.5rem",
                  }}
                />
              </button>
            )}
          </div>
          <span className={change24 > 0 ? "green" : "red"}>
            {change24.toFixed(2)}
          </span>
        </div>

        {toggle ? (
          <div className="bx3">
            <div className="">
              <span className={`${price24 > 0 ? "green" : "red"} percentage`}>
                Percent Change : {price24.toFixed(2)} %
              </span>
            </div>

            <div className=" flx">
              <div className="high flx">
                <span className="fs">High Price</span>
                <span className="fs">{high}</span>
              </div>
              <div className="high flx">
                <span className="fs">Low Price</span>
                <span className="fs">{low}</span>
              </div>
              <div className="high flx">
                <span className="fs">Market Capital</span>
                <span className="fs">
                  {(mkt / 1000000000).toFixed(2)} Trillion
                </span>
              </div>
              <div className="high flx">
                <span className="fs">Market Volume</span>
                <span className="fs">
                  {(vol / 1000000000).toFixed(2)} Trillion
                </span>
              </div>
            </div>
            {!toggle ? null : (
              <div className="flx">
                <button onClick={handleClick2} className="btn">
                  <span>Show Less</span>
                  <img
                    src={up}
                    alt="arrow"
                    style={{
                      width: "1.5rem",
                      height: "1.5reem",
                      float: "right",
                      marginLeft: "1.5rem",
                    }}
                  />
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

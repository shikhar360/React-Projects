import React from "react";

function App() {
  //trying to make it multidigit
  const [number, setNumber] = React.useState("");

  // function addDigit(e) {
  //   setNumber((prev) => {});
  // }

  function handleClick(e) {
    setNumber(number.concat(e.target.name));
  }
  function clear() {
    setNumber("");
  }

  function checkResult() {
    try {
      setNumber(eval(number).toString());
    } catch {
      setNumber("Error bro");
    }
  }

  function backSpace() {
    setNumber(number.slice(0, -1));
  }

  return (
    <div className="App">
      <form>
        <input type="text" className="displayarea" value={number} />
      </form>
      <br />
      <div className="calc">
        <button onClick={clear} className="number fnc clear ">
          Clear
        </button>
        <button name="c" onClick={backSpace} className="number fnc">
          C
        </button>
        <button name="/" onClick={handleClick} className="number fnc">
          &divide;
        </button>
        <button name="7" onClick={handleClick} className="number">
          7
        </button>
        <button name="8" onClick={handleClick} className="number">
          8
        </button>
        <button name="9" onClick={handleClick} className="number">
          9
        </button>
        <button name="*" onClick={handleClick} className="number fnc">
          x
        </button>
        <button name="4" onClick={handleClick} className="number">
          4
        </button>
        <button name="5" onClick={handleClick} className="number">
          5
        </button>
        <button name="6" onClick={handleClick} className="number">
          6
        </button>
        <button name="-" onClick={handleClick} className="number fnc">
          -
        </button>
        <button name="1" onClick={handleClick} className="number">
          1
        </button>
        <button name="2" onClick={handleClick} className="number">
          2
        </button>
        <button name="3" onClick={handleClick} className="number">
          3
        </button>
        <button name="+" onClick={handleClick} className="number fnc">
          +
        </button>
        <button name="." onClick={handleClick} className="number">
          .
        </button>
        <button name="0" onClick={handleClick} className="number">
          0
        </button>
        <button onClick={checkResult} className="number fnc equal">
          =
        </button>
      </div>
    </div>
  );
}

export default App;

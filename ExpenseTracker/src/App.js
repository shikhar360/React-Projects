import React from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import AddTransactions from "./components/AddTransactions";
import { useGlobalContext } from "./Context";
function App() {
  const [mode, setMode] = React.useState(false);
  const val = useGlobalContext();

  function handleMode() {
    setMode(!mode);
  }
  return (
    <div className={`${mode ? "night app flex" : " app flex"}`}>
      {mode ? (
        <img
          className="mode "
          src="https://img.icons8.com/doodle/48/undefined/sun--v1.png"
          alt="day"
          onClick={handleMode}
        />
      ) : (
        <img
          className="mode"
          src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/undefined/external-moon-gym-flatart-icons-flat-flatarticons.png"
          alt="moon"
          onClick={handleMode}
        />
      )}
      <div
        className={`${
          mode ? " main-container night-container" : "main-container"
        }`}
      >
        <h1 className="title">Expense Tracker</h1>
        <Balance />
        <History />
        <AddTransactions />
      </div>
    </div>
  );
}

export default App;

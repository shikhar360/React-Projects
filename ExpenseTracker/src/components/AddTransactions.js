import React from "react";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../Context";

export default function AddTransactions() {
  const { dispatch } = useGlobalContext();

  const [tnx, setTnx] = React.useState({
    id: nanoid(),
    text: "",
    amount: "",
  });

  function handleForm(e) {
    setTnx((v) => {
      return {
        ...v,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = () => {
    setTnx({
      id: nanoid(),
      text: "",
      amount: "",
    });
    return dispatch({ type: "ADDTNX", payload: tnx });
  };
  return (
    <div className="transactions">
      <h1 className=" transaction-title">Add New Transactions</h1>
      <div className="material">
        <span className="tnx">Transactions</span>
        <input
          value={tnx.text}
          name="text"
          type="text"
          placeholder="Transaction type?"
          onChange={handleForm}
          className="tnx2"
        />
        <span className="tnx">Amount (Negative for Spendings)</span>
        <input
          value={tnx.amount}
          name="amount"
          type="number"
          placeholder="Amount Spend?"
          onChange={handleForm}
          className="tnx2"
        />
        <button type="submit" onClick={handleSubmit} className="btn">
          ADD TRANSACTION
        </button>
      </div>
    </div>
  );
}

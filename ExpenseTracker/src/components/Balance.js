import React from "react";
import { useGlobalContext } from "../Context";
export default function Balance() {
  const { total, totalInc, totalEx } = useGlobalContext();

  return (
    <div className="balance-container flex">
      <div className="flex head">
        <span className="balance-title">Your Balance</span>
        <span className="balance">{`$${total}`}</span>
      </div>

      <div className="income-expense ">
        <div className="income-container  flex">
          <span className="income-title">INCOME</span>
          <span className="income">{`$${totalInc}`}</span>
        </div>

        <div className="expense-container flex">
          <span className="expense-title">EXPENSE</span>
          <span className="expense">{`$${totalEx}`}</span>
        </div>
      </div>
    </div>
  );
}

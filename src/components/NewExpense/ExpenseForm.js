import React, { useState } from "react";

// import "../Expenses/ExpenseItem.css";
import "./ExpenseForm.css";
import Expenses from "../Expenses/Expenses";

function ExpenseForm() {
  function consoleEle(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <form onChange={consoleEle} className="new-expense__controls">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input
            type="text"
            placeholder="Expense Title"
            className="new-expense__control"
          />
        </div>
        <div className="new-expense__control">
          <input type="number" placeholder="Expense Amount" />
        </div>
        <div className="new-expense__control">
          <input type="date"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;

import React, { useState } from "react";

// import "../Expenses/ExpenseItem.css";
import "./ExpenseForm.css";
import Expenses from "../Expenses/Expenses";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function titleChangeHandler(e) {
    e.preventDefault();
    setEnteredTitle(e.target.value);
  }
  function dateChangeHandler(e) {
    e.preventDefault();
    setEnteredDate(e.target.value);
  }
  function amountChangeHandler(e) {
    e.preventDefault();
    setEnteredAmount(e.target.value);
  }
  // console.log(enteredTitle);
  return (
    <form className="new-expense__controls">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            className="new-expense__control"
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;

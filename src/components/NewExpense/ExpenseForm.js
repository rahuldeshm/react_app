import React, { useState } from "react";

// import "../Expenses/ExpenseItem.css";
import "./ExpenseForm.css";
import Expenses from "../Expenses/Expenses";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  function titleChangeHandler(e) {
    e.preventDefault();
    setEnteredTitle(e.target.value);
    // setUserInput((preInput) => {
    //   return { ...preInput, enteredTitle: e.target.value };
    // });
    // setUserInput({ ...userInput, enteredTitle: e.target.value });
  }
  function dateChangeHandler(e) {
    e.preventDefault();
    setEnteredDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });
  }
  function amountChangeHandler(e) {
    e.preventDefault();
    setEnteredAmount(e.target.value);
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
  }
  function formSubmiHandler(e) {
    e.preventDefault();
    const obj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitData(obj);
    // console.log(obj);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }
  // console.log(enteredTitle);
  // console.log(userInput);
  return (
    <form className="new-expense__controls">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            className="new-expense__control"
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            value={enteredAmount}
            type="number"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={formSubmiHandler} type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;

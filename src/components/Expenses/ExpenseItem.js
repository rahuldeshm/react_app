// components in react is just a js function//
import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenceDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, increseAmount] = useState(props.amount);

  function btnHandler() {
    setTitle("New title Value");
    console.log(title);
  }
  function editBtnHandler() {
    increseAmount(amount + 100);
    console.log(amount);
  }

  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenseDetails
        amount={amount}
        locationofexpence={props.locationofexpence}
        title={title}
      />
      <button onClick={btnHandler}>Change title</button>
      <button onClick={editBtnHandler}>increase Expense amount</button>
    </Card>
  );
}
export default ExpenseItem;

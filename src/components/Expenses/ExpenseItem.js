// components in react is just a js function//
import React from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenceDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  function btnHandler() {
    console.log("btn Clicked ....!");
  }
  function deleteBtnHandler() {
    console.log("Delete btn Clicked ....!");
  }
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        locationofexpence={props.locationofexpence}
        title={props.title}
      />
      <button onClick={btnHandler}>Change title</button>
      <button onClick={deleteBtnHandler}>delete expense</button>
    </Card>
  );
}
export default ExpenseItem;

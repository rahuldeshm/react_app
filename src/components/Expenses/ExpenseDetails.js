import React from "react";
import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h3>{props.locationofexpence}</h3>
      <h2>{props.title}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;

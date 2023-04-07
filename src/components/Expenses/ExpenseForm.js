import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import Expenses from "./Expenses";

function ExpenseForm() {
  function consoleEle(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <Card className={Expenses}>
      <form onChange={consoleEle} className="expenses">
        <input type="text" placeholder="Expense Title"></input>

        <input type="number" placeholder="Expense Amount"></input>
        <input type="date"></input>
        <button>Submit</button>
      </form>
    </Card>
  );
}
export default ExpenseForm;

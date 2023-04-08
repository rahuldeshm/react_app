import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseData(obj) {
    const newObj = {
      ...obj,
      id: Math.random().toString(),
    };
    props.onAddData(newObj);
  }
  return (
    <Card className="new-expense">
      <ExpenseForm onSubmitData={saveExpenseData}></ExpenseForm>
    </Card>
  );
}
export default NewExpense;

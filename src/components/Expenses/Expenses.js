import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  // console.log("in Expense", props.newExpense);

  // allexpence.push(props.newExpense);
  return (
    <Card className="expenses">
      {props.allExpenses.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
            locationofexpence={e.locationofexpence}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}
export default Expenses;

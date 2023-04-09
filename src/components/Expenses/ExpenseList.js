import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props) {
  let allexpen = <p className="expenses-list__fallback">No Expense Here</p>;
  if (props.list.length === 1) {
    allexpen = [
      <ExpenseItem
        key={props.list[0].id}
        title={props.list[0].title}
        amount={props.list[0].amount}
        date={props.list[0].date}
        locationofexpence={props.list[0].locationofexpence}
      ></ExpenseItem>,
      <p key={"one1"} className="expenses-list__fallback">
        Only one expense add more
      </p>,
    ];
  } else if (props.list.length > 1) {
    allexpen = props.list.map((e) => {
      return (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
          locationofexpence={e.locationofexpence}
        ></ExpenseItem>
      );
    });
  }
  return allexpen;
}
export default ExpenseList;

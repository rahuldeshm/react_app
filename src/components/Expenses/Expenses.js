import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const arr = props.allExpenses;
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredArr, setfilterdArr] = useState(arr);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    const filtrerd = arr.filter((el) => el.date.getFullYear() == selectedYear);
    setfilterdArr(filtrerd);
  };
  // console.log("in Expense", props.newExpense);

  // allexpence.push(props.newExpense);
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      {filteredArr.map((e) => {
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

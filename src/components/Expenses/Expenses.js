import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const arr = props.allExpenses;
  const [filteredYear, setFilteredYear] = useState("2021");

  const filtrerd = arr.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let allexpen = <p>No Expense Here</p>;
  if (filtrerd.length === 1) {
    allexpen = [
      <ExpenseItem
        key={filtrerd[0].id}
        title={filtrerd[0].title}
        amount={filtrerd[0].amount}
        date={filtrerd[0].date}
        locationofexpence={filtrerd[0].locationofexpence}
      ></ExpenseItem>,
      <p key={"one1"}>Only one expense add more</p>,
    ];
  } else if (filtrerd.length > 1) {
    allexpen = filtrerd.map((e) => {
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
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      {allexpen}
    </Card>
  );
}
export default Expenses;

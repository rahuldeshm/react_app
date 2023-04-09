import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const arr = props.allExpenses;
  const [filteredYear, setFilteredYear] = useState("2021");

  const filtrerd = arr.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      <ExpenseList list={filtrerd}></ExpenseList>
    </Card>
  );
}
export default Expenses;

import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const arr = props.allExpenses;
  const [filteredYear, setFilteredYear] = useState("2020");

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
      <ExpensesChart expense={filtrerd} />
      <ExpenseList list={filtrerd}></ExpenseList>
    </Card>
  );
}
export default Expenses;

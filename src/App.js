import React, { useState } from "react";
// import React from "react";
// import NewEx
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const defaultExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 444,
    date: new Date(2020, 3, 23),
    locationofexpence: "at home",
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 4325,
    date: new Date(2020, 4, 23),
    locationofexpence: "at garage",
  },
  {
    id: "e3",
    title: "food",
    amount: 564,
    date: new Date(2020, 11, 23),
    locationofexpence: "in bazzar",
  },
  {
    id: "e4",
    title: "cloths",
    amount: 3233,
    date: new Date(2020, 7, 23),
    locationofexpence: "at cloth shop",
  },
];
function App() {
  // we can work like this also in react but it is little complicated so we use jsx .//

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Get Started"),
  //   createElement(Expenses)
  // );

  var [allExpense, addNewExpense] = useState(defaultExpenses);
  function addDataHandler(objre) {
    // console.log("in app js", objre);
    addNewExpense((prevExpense) => {
      return [objre, ...prevExpense];
    });
  }
  return (
    <div>
      <NewExpense onAddData={addDataHandler} />
      <Expenses allExpenses={allExpense} />
    </div>
  );
}

export default App;

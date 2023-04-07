// import React, { createElement } from "react";
import React from "react";
// import NewEx
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // we can work like this also in react but it is little complicated so we use jsx .//

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Get Started"),
  //   createElement(Expenses)
  // );
  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;

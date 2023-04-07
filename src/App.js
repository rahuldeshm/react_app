// import React, { createElement } from "react";
import React from "react";
import Expenses from "./components/Expenses/Expenses";

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
      <h2>Let's get started</h2>
      <Expenses></Expenses>
    </div>
  );
}

export default App;

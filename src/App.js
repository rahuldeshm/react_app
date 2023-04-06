import ExpenseItem from "./components/ExpanceItem";
function App() {
  const allexpence = [
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
      date: new Date(2020, 3, 23),
      locationofexpence: "at garage",
    },
    {
      id: "e3",
      title: "food",
      amount: 564,
      date: new Date(2020, 3, 23),
      locationofexpence: "in bazzar",
    },
    {
      id: "e4",
      title: "cloths",
      amount: 3233,
      date: new Date(2020, 3, 23),
      locationofexpence: "at cloth shop",
    },
  ];

  return (
    <div>
      <p>This is also visiable</p>
      <ExpenseItem
        title={allexpence[0].title}
        amount={allexpence[0].amount}
        date={allexpence[0].date}
        locationofexpence={allexpence[0].locationofexpence}
      ></ExpenseItem>
      <ExpenseItem
        title={allexpence[1].title}
        amount={allexpence[1].amount}
        date={allexpence[1].date}
        locationofexpence={allexpence[1].locationofexpence}
      ></ExpenseItem>
      <ExpenseItem
        title={allexpence[2].title}
        amount={allexpence[2].amount}
        date={allexpence[2].date}
        locationofexpence={allexpence[2].locationofexpence}
      ></ExpenseItem>
      <ExpenseItem
        title={allexpence[3].title}
        amount={allexpence[3].amount}
        date={allexpence[3].date}
        locationofexpence={allexpence[3].locationofexpence}
      ></ExpenseItem>
      <h2>Let's get started</h2>
    </div>
  );
}

export default App;

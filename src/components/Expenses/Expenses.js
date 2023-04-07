import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
function Expenses() {
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
  return (
    <Card className="expenses">
      {allexpence.map((e) => {
        return (
          <ExpenseItem
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

// components in react is just a js function//
import ExpenseDetails from "./ExpenseDetails";
import ExpenceDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        locationofexpence={props.locationofexpence}
        title={props.title}
      />
    </Card>
  );
}
export default ExpenseItem;

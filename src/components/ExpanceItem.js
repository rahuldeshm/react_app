// components in react is just a js function//
import ExpanceDetails from "./ExpanceDetails";
import ExpenceDate from "./ExpanceDate";
import "./ExpanceItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpanceDetails
        amount={props.amount}
        locationofexpence={props.locationofexpence}
        title={props.title}
      />
    </div>
  );
}
export default ExpenseItem;

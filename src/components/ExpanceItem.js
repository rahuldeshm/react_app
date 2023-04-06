// components in react is just a js function//
import "./ExpanceItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toString()}</div>
      <div className="expense-item__description">
        <h3>{props.locationofexpence}</h3>
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

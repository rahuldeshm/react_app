// components in react is just a js function//
import "./ExpanceItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 23th 2032</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">Rs 444</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

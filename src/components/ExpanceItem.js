// components in react is just a js function//
import "./ExpanceItem.css";
function ExpenseItem() {
  const date = new Date(2021, 3, 22).toString();
  const expancetitle = "Car Insurance";
  const price = 444;
  const locationofexpendature = "any location when we added expance";
  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item__description">
        <h3>{locationofexpendature}</h3>
        <h2>{expancetitle}</h2>
        <div className="expense-item__price">Rs {price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

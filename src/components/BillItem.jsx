export function BillItem({ bill }) {
  return (
    <li className="bill-row">
      <p className="column-name">{bill.name}</p>
      <p className="column-amount">{bill.amount}</p>
      <p className="column-date">{bill.dueDate.toLocaleDateString()}</p>
      <p className="column-status">{bill.paid ? "Paid" : "Unpaid"}</p>
    </li>
  );
}

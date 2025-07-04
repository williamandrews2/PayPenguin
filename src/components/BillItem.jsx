export function BillItem({ bill }) {
  return (
    <li className="bill-item">
      <p>{bill.name}</p>
      <p>{bill.amount}</p>
      <p>{bill.dueDate.toLocaleDateString()}</p>
      <p>{bill.paid ? "Paid" : "Unpaid"}</p>
    </li>
  );
}

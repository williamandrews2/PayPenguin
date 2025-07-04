export function BillItem({ bill }) {
  return (
    <li className="bill-item">
      <p>{bill.name}</p>
      <p>{bill.amount}</p>
      <p>{bill.dueDate}</p>
    </li>
  );
}

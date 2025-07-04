import { BillItem } from "./BillItem";

export function BillList({ bills }) {
  return (
    <div className="bill-list">
      <h2>Monthly Bills</h2>
      <ul>
        {bills.map((bill) => (
          <BillItem key={bill.id} bill={bill} />
        ))}
      </ul>
    </div>
  );
}

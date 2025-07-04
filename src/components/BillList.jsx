import { BillItem } from "./BillItem";

export function BillList({ bills }) {
  if (bills.length > 0) {
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
  return <p>No bills have been added yet!</p>;
}

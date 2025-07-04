import { BillItem } from "./BillItem";

export function BillList({ bills }) {
  return (
    <ul>
      {bills.map((bill) => (
        <BillItem key={bill.id} bill={bill} />
      ))}
    </ul>
  );
}

import { BillItem } from "./BillItem";

export function BillList({ bills, togglePaid }) {
  // only render when one or more bills have been added
  if (bills.length > 0) {
    return (
      <div className="bill-list">
        <div className="bill-table">
          <h2>Monthly Bills</h2>
          <header className="bill-header">
            <p className="column-name">Name</p>
            <p className="column-amount">Amount</p>
            <p className="column-date">Due Date</p>
            <p className="column-status">Status</p>
          </header>
          <ul>
            {bills.map((bill) => (
              <BillItem key={bill.id} bill={bill} togglePaid={togglePaid} />
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // default when no bills have been added
  return <p>No bills have been added yet!</p>;
}

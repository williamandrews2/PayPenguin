import { BillItem } from "./BillItem";
import { useState } from "react";
import BillControls from "./BillControls";

export function BillList({ bills, togglePaid, handleDelete, resetStatus }) {
  const [editMode, setEditMode] = useState(false);
  const [sortBy, setSortBy] = useState("Due Date (earliest)");

  const sortedBills = [
    ...bills.sort((a, b) => {
      switch (sortBy) {
        case "Amount (largest)":
          return b.amount - a.amount;
        case "Amount (smallest)":
          return a.amount - b.amount;
        case "Due Date (earliest)":
          return a.dueDate - b.dueDate;
        case "Due Date (latest)":
          return b.dueDate - a.dueDate;
        case "Paid":
          return a.paid === b.paid ? 0 : a.paid ? -1 : 1; // paid=true first
        case "Unpaid":
          return a.paid === b.paid ? 0 : a.paid ? 1 : -1; // unpaid=true first
        default:
          return 0;
      }
    }),
  ];

  function enableEditMode() {
    console.log(`edit mode set to: ${editMode}`);
    setEditMode(!editMode);
  }

  // only render when one or more bills have been added
  if (bills.length > 0) {
    return (
      <div className="bill-list">
        <div className="bill-table">
          <div className="bill-section-header">
            <h2>Monthly Bills</h2>
            <div className="sort-by-wrapper">
              <label htmlFor="sort">Sort by:</label>
              <select
                name="sort"
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Amount (largest)">Amount (largest)</option>
                <option value="Amount (smallest)">Amount (smallest)</option>
                <option value="Due Date (earliest)">Due Date (earliest)</option>
                <option value="Due Date (latest)">Due Date (latest)</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>
          </div>
          <header className="bill-header">
            <p className="column-name">Name</p>
            <p className="column-amount">Amount</p>
            <p className="column-date">Due Date</p>
            <p className="column-status">Status</p>
          </header>
          <ul>
            {sortedBills.map((bill) => (
              <BillItem
                key={bill.id}
                bill={bill}
                togglePaid={togglePaid}
                handleDelete={handleDelete}
                editMode={editMode}
              />
            ))}
          </ul>
          <BillControls
            editMode={editMode}
            enableEditMode={enableEditMode}
            resetStatus={resetStatus}
          />
        </div>
      </div>
    );
  }

  // default when no bills have been added
  return <p>No bills have been added yet!</p>;
}

import { BillItem } from "./BillItem";
import { useEffect, useState } from "react";
import BillControls from "./BillControls";
import { BillForm } from "./BillForm";

export function BillList({ bills, setBills }) {
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [sortBy, setSortBy] = useState("Due Date (earliest)");
  const [editableBills, setEditableBills] = useState([]);

  // create a clone of the bills array to edit (dependant on bills array and editMode)
  useEffect(() => {
    if (editMode) {
      const cloned = [...bills];
      setEditableBills(cloned);
    }
  }, [editMode, bills]);

  // sort the bills on render based on the select field
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

  function addBill(newBill) {
    setBills((prevBills) => [...prevBills, newBill]);
  }

  function updateBillField(id, field, value) {
    // rewrite the editableBills array with the new value passed from the BillItem
    setEditableBills((prev) =>
      prev.map((bill) => (bill.id === id ? { ...bill, [field]: value } : bill))
    );
  }

  function saveAll() {
    const updated = editableBills.map((bill) => ({
      ...bill,
      amount: parseFloat(bill.amount),
    }));
    setBills(updated);
    enableEditMode();
  }

  function enableEditMode() {
    setEditMode(!editMode);
  }

  function enableAddMode() {
    setAddMode(!addMode);
  }

  function handleDelete(id) {
    if (confirm("Are you sure you want to delete this bill?")) {
      setBills((prevBills) => prevBills.filter((bill) => bill.id !== id));
    }
  }

  function togglePaid(id) {
    setBills((prevBills) =>
      prevBills.map((bill) =>
        bill.id === id ? { ...bill, paid: !bill.paid } : bill
      )
    );
  }

  function resetStatus() {
    if (
      confirm("Are you sure you want to reset the paid status of all bills?")
    ) {
      setBills((prevBills) =>
        prevBills.map((bill) => ({ ...bill, paid: false }))
      );
    }
  }

  // only render when one or more bills have been added
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
        {bills.length > 0 ? (
          <ul>
            {(editMode ? editableBills : sortedBills).map((bill) => (
              <BillItem
                key={bill.id}
                bill={bill}
                togglePaid={togglePaid}
                handleDelete={handleDelete}
                editMode={editMode}
                updateBillField={updateBillField}
              />
            ))}
          </ul>
        ) : (
          <div>No bills have been added yet!</div>
        )}
        <BillControls
          editMode={editMode}
          enableEditMode={enableEditMode}
          saveAll={saveAll}
          resetStatus={resetStatus}
          addMode={addMode}
          enableAddMode={enableAddMode}
        />
        {addMode && <BillForm onAdd={addBill} />}
      </div>
    </div>
  );
}

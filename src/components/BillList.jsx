import { BillItem } from "./BillItem";
import { useEffect, useState } from "react";
import BillControls from "./BillControls";
import { BillForm } from "./BillForm";
import { useBillContext } from "../contexts/BillContext";

export function BillList() {
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [sortBy, setSortBy] = useState("Due Date (earliest)");
  const [editableBills, setEditableBills] = useState([]);
  const { bills, setBills } = useBillContext();

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

  // helper function to attach JWT to every request
  const authHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  async function addBill(newBill) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bills`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({
          name: newBill.name,
          amount: newBill.amount,
          dueDate: newBill.dueDate,
        }),
      });

      if (!res.ok) throw new Error("Failed to add bill");

      const savedBill = await res.json();
      setBills((prevBills) => [
        ...prevBills,
        {
          ...savedBill,
          dueDate: new Date(savedBill.dueDate),
          amount: parseFloat(savedBill.amount),
        },
      ]);
      setAddMode(false);
    } catch (error) {
      console.error("Failed to add bill: ", error);
    }
  }

  function updateBillField(id, field, value) {
    // rewrite the editableBills array with the new value passed from the BillItem
    setEditableBills((prev) =>
      prev.map((bill) => (bill.id === id ? { ...bill, [field]: value } : bill)),
    );
  }

  async function saveAll() {
    try {
      const updated = editableBills.map((bill) => ({
        ...bill,
        amount: parseFloat(bill.amount),
      }));

      // send a PUT request for every edited bill
      await Promise.all(
        updated.map((bill) =>
          fetch(`${import.meta.env.VITE_API_URL}/api/bills/${bill.id}`, {
            method: "PUT",
            headers: authHeaders(),
            body: JSON.stringify({
              name: bill.name,
              amount: bill.amount,
              dueDate: bill.dueDate,
            }),
          }),
        ),
      );

      setBills(updated);
      enableEditMode();
    } catch (error) {
      console.error("Failed to save bills: ", error);
    }
  }

  function enableEditMode() {
    setEditMode(!editMode);
  }

  function enableAddMode() {
    setAddMode(!addMode);
  }

  async function handleDelete(id) {
    if (confirm("Are you sure you want to delete this bill?")) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/bills/${id}`,
          {
            method: "DELETE",
            headers: authHeaders(),
          },
        );

        if (!res.ok) throw new Error("Failed to delete bill");

        setBills((prevBills) => prevBills.filter((bill) => bill.id !== id));
      } catch (error) {
        console.error("Failed to delete bill: ", error);
      }
    }
  }

  async function togglePaid(id) {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bills/${id}/paid`,
        {
          method: "PATCH",
          headers: authHeaders(),
        },
      );

      if (!res.ok) throw new Error("Failed to toggle paid status");

      const updatedBill = await res.json();

      setBills((prevBills) =>
        prevBills.map((bill) =>
          bill.id === id
            ? { ...updatedBill, dueDate: new Date(updatedBill.dueDate) }
            : bill,
        ),
      );
    } catch (error) {
      console.error("Failed to toggle paid status: ", error);
    }
  }

  async function resetStatus() {
    if (
      confirm(
        "Are you sure you want to reset the paid status of all bills? This will also advance all due dates to the next month.",
      )
    ) {
      try {
        const updated = bills.map((bill) => {
          const nextDate = new Date(bill.dueDate);
          nextDate.setMonth(nextDate.getMonth() + 1);
          return { ...bill, isPaid: false, dueDate: nextDate };
        });

        // send a PUT request for every bill with the new date and reset status
        await Promise.all(
          updated.map((bill) =>
            fetch(`${import.meta.env.VITE_API_URL}/api/bills/${bill.id}`, {
              method: "PUT",
              headers: authHeaders(),
              body: JSON.stringify({
                name: bill.name,
                amount: bill.amount,
                dueDate: bill.dueDate,
                isPaid: false,
              }),
            }),
          ),
        );

        setBills(updated);
      } catch (error) {
        console.error("Failed to reset bills: ", error);
      }
    }
  }

  // only render when one or more bills have been added
  return (
    <>
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
          {addMode && (
            <BillForm onAdd={addBill} enableAddMode={enableAddMode} />
          )}
        </div>
      </div>
    </>
  );
}

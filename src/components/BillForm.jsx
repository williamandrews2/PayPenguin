import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function BillForm({ onAdd, enableAddMode }) {
  // bill props
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !dueDate) {
      alert("Please fill out all fields.");
    }

    // define the new bill object to be added
    const newBill = {
      id: crypto.randomUUID(),
      name,
      amount: parseFloat(amount),
      dueDate,
      paid: false,
    };

    onAdd(newBill);

    // clear out the fields shown on the form
    setName("");
    setAmount("");
    setDueDate("");
  };

  return (
    <>
      <div className="bill-form-header">
        <h3 className="bill-form-title">Add New Bill</h3>
        <button className="cancel-button" onClick={enableAddMode}>
          Cancel
        </button>
      </div>
      <form onSubmit={handleSubmit} className="bill-form">
        <input
          type="text"
          placeholder="Bill name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount ($)"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <div className="datepicker-wrapper">
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="Select a due date"
            required
          />
        </div>

        <button type="submit">Add bill</button>
      </form>
    </>
  );
}

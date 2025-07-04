import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function BillForm({ onAdd }) {
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

    // add the bill into the callback that was passed in
    onAdd(newBill);

    // clear out the fields shown on the form
    setName("");
    setAmount("");
    setDueDate("");
  };

  return (
    <>
      <h3>New Bill</h3>
      <form onSubmit={handleSubmit} className="bill-form">
        <label htmlFor="bill-name">
          <input
            type="text"
            placeholder="Bill name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label htmlFor="bill-amount">
          <input
            type="number"
            placeholder="Amount ($)"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Select a due date"
        />

        <button type="submit">Add bill</button>
      </form>
    </>
  );
}

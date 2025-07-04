import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="bill-form">
      <label htmlFor="bill-name">
        Bill Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label htmlFor="bill-amount">
        Amount ($):
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label htmlFor="due-date">
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add bill</button>
    </form>
  );
}

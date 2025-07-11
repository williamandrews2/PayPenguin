export function BillItem({ bill, togglePaid, handleDelete, editMode }) {
  return (
    <li className="bill-row">
      <p className="column-name">{bill.name}</p>
      <p className="column-amount">${bill.amount.toFixed(2)}</p>
      <p className="column-date">
        {bill.dueDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        })}
      </p>
      <button
        className={`column-status ${bill.paid ? "paid" : "unpaid"}`}
        onClick={() => togglePaid(bill.id)}
      >
        {bill.paid ? "Paid" : "Unpaid"}
      </button>
      {editMode && (
        <button
          className="delete-button"
          onClick={() => {
            handleDelete(bill.id);
          }}
        ></button>
      )}
    </li>
  );
}

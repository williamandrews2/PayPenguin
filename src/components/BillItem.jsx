import DatePicker from "react-datepicker";

export function BillItem({
  bill,
  togglePaid,
  handleDelete,
  editMode,
  updateBillField,
}) {
  // this function is not able to be used for the date section
  function handleChange(e) {
    const { name, value } = e.target;
    updateBillField(bill.id, name, value);
  }

  function handleDateChange(date) {
    updateBillField(bill.id, "dueDate", date);
  }

  return (
    <li className="bill-row">
      {editMode ? (
        <>
          {/* This renders during edit mode */}
          {editMode && (
            <>
              <input
                type="text"
                name="name"
                className="column-edit-name"
                value={bill.name}
                required
                onChange={handleChange}
              />
              <input
                type="number"
                name="amount"
                className="column-edit-amount"
                value={bill.amount}
                step={"0.01"}
                required
                onChange={handleChange}
              />
              <div className="datepicker-wrapper column-edit-date">
                <DatePicker
                  value={bill.dueDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}
                  required
                  onChange={(date) => handleDateChange(date)}
                />
              </div>

              <div className="column-status">
                <button
                  className="delete-button"
                  onClick={() => {
                    handleDelete(bill.id);
                  }}
                ></button>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* This renders during normal (viewing) mode */}
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
        </>
      )}
    </li>
  );
}

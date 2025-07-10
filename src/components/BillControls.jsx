function BillControls({ resetStatus, enableEditMode, enableDeleteMode }) {
  return (
    <div className="bill-controls">
      <button className="delete-button" onClick={enableDeleteMode}>
        Delete
      </button>
      <button className="edit-button" onClick={enableEditMode}>
        Edit
      </button>
      <button className="reset-button" onClick={resetStatus}>
        Reset Status
      </button>
    </div>
  );
}

export default BillControls;

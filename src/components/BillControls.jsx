function BillControls({ resetStatus, enableEditMode, editMode }) {
  return (
    <div className="bill-controls">
      <button className="edit-button" onClick={enableEditMode}>
        {editMode ? "Done" : "Edit"}
      </button>
      <button className="reset-button" onClick={resetStatus}>
        Reset Status
      </button>
    </div>
  );
}

export default BillControls;

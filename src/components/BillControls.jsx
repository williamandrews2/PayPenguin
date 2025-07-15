function BillControls({
  resetStatus,
  enableEditMode,
  editMode,
  saveAll,
  addMode,
  enableAddMode,
}) {
  return (
    <div className="bill-controls">
      {/* render during add mode */}
      {addMode && (
        <button className="green-button" onClick={enableAddMode}>
          Done
        </button>
      )}

      {/* render during viewing mode */}
      {!addMode && <button onClick={enableAddMode}>Add Bill</button>}

      {/* Save button will only render when in edit mode */}
      {editMode && (
        <button className="green-button" onClick={saveAll}>
          Save
        </button>
      )}

      {/* Edit and status buttons will only render when in viewing mode */}
      {!editMode && !addMode && (
        <>
          <button className="edit-button" onClick={enableEditMode}>
            Edit
          </button>
          <button className="reset-button" onClick={resetStatus}>
            Reset Status
          </button>
        </>
      )}
    </div>
  );
}

export default BillControls;

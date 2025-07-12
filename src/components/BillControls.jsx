function BillControls({ resetStatus, enableEditMode, editMode, saveAll }) {
  return (
    <div className="bill-controls">
      {/* Save button will only render when in edit mode */}
      {editMode && (
        <button className="save-button" onClick={saveAll}>
          Save
        </button>
      )}

      {/* Edit and status buttons will only render when in viewing mode */}
      {!editMode && (
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

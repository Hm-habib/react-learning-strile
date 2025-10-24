import React from "react";

function EditNoteCompo({ isOpen, editFrom, onChangeNote, onSave, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal show d-block" tabindex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header ">
            <h5 className="modal-title">Edit Note 📝</h5>
            <button
              onClick={onClose}
              type="button"
              className="close float-right"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="title" className="d-block">
                  Title
                </label>
                <input
                  className="w-100 bg-white text-dark p-2 from-control"
                  type="text"
                  id="title"
                  value={editFrom.title}
                  onChange={(e) =>
                    onChangeNote({ ...editFrom, title: e.target.value })
                  }
                />

                <label htmlFor="body" className="d-block">
                  Body
                </label>
                <textarea
                  type="text"
                  value={editFrom.body}
                  className="form-control p-2"
                  id="body"
                  rows="3"
                  onChange={(e) =>
                    onChangeNote({ ...editFrom, body: e.target.value })
                  }
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={onSave}>
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNoteCompo;

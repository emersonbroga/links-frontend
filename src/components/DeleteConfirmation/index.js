import React from 'react';

const getFunction = (f) => {
  return !f || typeof f !== 'function' ? () => {} : f;
};

const DeleteConfirmation = ({ render, title, onConfirm, onCancel }) => {
  if (!render) return null;
  const confirmClick = getFunction(onConfirm);
  const cancelClick = getFunction(onCancel);

  return (
    <div className="modal rounded-pill d-block " tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger p-3">
            <h5 className="modal-title text-light">Delete</h5>
            <button
              type="button"
              className="close text-light position-static"
              data-dismiss="modal"
              aria-label="Close"
              onClick={cancelClick}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{title}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={cancelClick}>
              Close
            </button>
            <button type="button" className="btn btn-danger" onClick={confirmClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;

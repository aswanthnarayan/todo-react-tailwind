import React, { useState } from "react";
import "../App.css";
import { MessageDialog } from "./EditModal";
import { DeleteModal } from "./DeleteModal";


export default function TodoItem({ id, text, completed, onCheckboxChange,onEdit ,onDelete}) {
  const [isChecked, setIsChecked] = useState(completed);
  const [editText, setEditText] = useState(text); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(id, !isChecked);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (newText) => {
    onEdit(id,newText)
    setEditText(newText); 
    setIsModalOpen(false); 
  };
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(id); 
    setIsDeleteModalOpen(false); 
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false); 
  };


  return (
    <div className="sticky-container ">
      <div className="sticky-outer">
        <div className="sticky">
          <svg width="0" height="0">
            <defs>
              <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                <path
                  d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                  strokeLinejoin="round"
                  strokeLinecap="square"
                />
              </clipPath>
            </defs>
          </svg>
          <div
            className={`sticky-content ${
              isChecked ? "bg-green-600" : "bg-yellow-700"
            } flex flex-col justify-between p-4 border my-1 rounded-md shadow-md`}
          >
            <div className="flex flex-col ">
              <input
                type="checkbox"
                id={id}
                className="self-end"
                checked={isChecked ? true : false}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={id} />
              <div className="line-clamp-3 break-words">{editText}</div>
            </div>
            <div className="flex justify-between mt-2">
              <button onClick={handleEditClick} className="text-blue-700">
                Edit
              </button>

              <button onClick={handleDeleteClick} className="text-red-700">Delete</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <MessageDialog
          open={isModalOpen}
          onClose={handleModalClose}
          initialText={editText}
          onSave={handleSave} 
        />
      )}
      
      {isDeleteModalOpen && (
        <DeleteModal
          open={isDeleteModalOpen}
          onClose={handleDeleteCancel}
          onDelete={handleDeleteConfirm} // Delete the item
        />
      )}

    </div>
  );
}

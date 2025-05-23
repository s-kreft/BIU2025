import { useEffect, useRef, useState } from "react";
import { Item } from "./ExpenseItem";

interface ExpenseDetailModalProps {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExpenseDetailModal = ({
  item,
  isOpen,
  onClose,
}: ExpenseDetailModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (isOpen) {
      if (!modal.open) modal.showModal();
    } else {
      if (modal.open) modal.close();
    }
  }, [isOpen]);

  if (!item) return null;

  return (
    <div>
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog
        ref={modalRef}
        id="my_modal_1"
        className="modal"
        onClose={onClose}
      >
        <div className="modal-box">
          <div className="badge badge-outline badge-primary">
            {item.category}
          </div>
          <h3 className="font-bold text-lg">{item.title}</h3>
          <h2>{item.date}</h2>
          <p className="py-4">{item.description}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ExpenseDetailModal;

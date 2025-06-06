import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { AddExpenseForm } from "./AddExpenseForm";

export type AddExpenseFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const AddExpenseFormModal: React.FC<AddExpenseFormModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    modal.current?.showModal();
  }, [isOpen]);

  return (
    <div className="p-6">
      {/* Open the modal using document.getElementById().showModal() method */}
      {/* <button className="btn" onClick={openModal}>
        Open Modal
      </button> */}

      <dialog ref={modal} id="my_modal_1" className="modal">
        <div className="modal-box">
          {children}
          <div className="modal-action">
            <form method="dialog">
              {/* If there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

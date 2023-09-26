import { useState, ReactNode } from "react";

function Modal({ children }: { children?: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 grid place-content-center transition duration-1000"
          onClick={closeModal}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Modal;

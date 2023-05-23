import React from 'react'
import Modal from 'react-modal';


interface Props {
    isPopupOpen: boolean;
    handleClosePopup: () => void;
}

const DialogBox: React.FC<Props> = ({isPopupOpen, handleClosePopup}) => {
  return (
    <div>
    <Modal
      isOpen={isPopupOpen}
      onRequestClose={handleClosePopup}
      className="modal"
      shouldCloseOnOverlayClick={false}
    >
      <div className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur backdrop-opacity-70 flex-col backdrop-brightness-0">
        <h2 className="text-2xl mb-4 text-white">Delete All Lists</h2>
        <p className="text-white">Are you sure you want to delete all lists? This action is irreversible.</p>
        <div className="mt-4 space-x-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete All Lists
          </button>
          <button
            onClick={handleClosePopup}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  </div>
  )
}

export default DialogBox
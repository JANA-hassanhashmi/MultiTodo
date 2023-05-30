import { Opacity } from '@mui/icons-material';
import { Box } from '@mui/material';
import { DateCalendar, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import Modal from 'react-modal';


interface Props {
    variant: string
    isPopupOpen: boolean;
    handleClosePopup: () => void;
    handleAction: () => void;
  }

const DialogBox: React.FC<Props> = ({variant, isPopupOpen, handleClosePopup, handleAction}) => {
  const [defaultCalendar, setDefaultCalendar] = useState("")
  return (
    (variant === 'delete') ? (
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
                  onClick={handleAction}
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
    ) : (
      <Box sx={{ backgroundColor: '#000', color: '#fff', position:'relative'}}>
          <Modal
            isOpen={isPopupOpen}
            onRequestClose={handleClosePopup}
            className="modal"
            shouldCloseOnOverlayClick={false}
          >
            <Box sx={{ backgroundColor: '#000', color: '#000', position:'relative'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                views={['day', 'month']}
                value={defaultCalendar}
                sx={{position: "absolute", top:'150px', left:"500px", color:"#0096FF"}}
                onChange={handleAction}
                disablePast={true}/>
              </LocalizationProvider>
            </Box>
            <button
            onClick={handleClosePopup}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded absolute top-96 right-96"
            >
              Close
            </button>
          </Modal>  
      </Box>
    )
    
  )
}

export default DialogBox
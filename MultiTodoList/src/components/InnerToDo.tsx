import React, { useState } from 'react'
import { innerToDo, outerToDo } from '../model'
import { Checkbox, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { current } from '@reduxjs/toolkit'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


interface Props {
    outerId: number
    innerToDo: innerToDo
    updateProgress: () => void
    outerToDoList: outerToDo[]
    setOuterToDoList: React.Dispatch<React.SetStateAction<outerToDo[]>>
}





const InnerToDo: React.FC<Props> = ({outerId, innerToDo, updateProgress, outerToDoList, setOuterToDoList}) => {
    
    
    const handleDone = () => {
        
        const newOuterList = outerToDoList.map(outer => {
            if(outer.id === outerId){
                outer.innerToDoList.map(currentInner => {

                    if (currentInner.id === innerToDo.id) {
                        currentInner.isDone = !currentInner.isDone
                    }
        
                    
                })
                
            }
            return {...outer}
        })

        setOuterToDoList(newOuterList)
        updateProgress()
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const [isCalendarOpen, setIsCalendarOpen] = useState(false);


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSetDueDate = () => {
        setAnchorEl(null);
        setIsCalendarOpen(true);
    }


    const handleDelete = () => {
        const newInner = outerToDoList.find(current => current.id === outerId)?.innerToDoList.filter(currentInner => currentInner.id !== innerToDo.id)!

        const updatedOuterList = outerToDoList.map(currentOuter => {
            if(currentOuter.id === outerId){
                currentOuter.innerToDoList = newInner
            }

            return {...currentOuter}
        })

        setOuterToDoList(updatedOuterList)
        setAnchorEl(null);

        updateProgress()
    };


    const [selectedDate, setSelectedDate] = useState(Date());

    const handleDateChange = (date: TDate) => {
        setIsCalendarOpen(false)
        setSelectedDate(date);
        console.log('Selected date:', date);
      // Perform any additional logic or state updates based on the selected date
    };
    
    return (

    <div className="flex items-center relative">
        <Checkbox 
        onChange={handleDone} checked={innerToDo.isDone}/>
        
        {outerToDoList.find(current => current.id === outerId)?.innerToDoList.find(current => current.id === innerToDo.id)?.isDone ? (
            <s className="text-gray-800">{innerToDo.text}</s>
        ) : (
        <span className="text-gray-800">{innerToDo.text}</span>
        )}


        
        {isCalendarOpen ? (        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar 
            value={selectedDate}
            onChange={(value) => handleDateChange(value)}
            />
        </LocalizationProvider>):(
        <div className='flex absolute right-1 cursor-pointer ' onClick={handleClick}>
            <MoreVertOutlinedIcon sx={{color: "#A8A8A8", "&:hover":{color: "#000000"}}}/>
        </div>
        )}
        <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >
            <MenuItem onClick={handleDelete}>
                <ListItemIcon>
                    <DeleteIcon />
                </ListItemIcon>
                Delete Item
                
            </MenuItem>

            <MenuItem onClick={handleSetDueDate}>
                <ListItemIcon>
                    <CalendarMonthIcon />
                </ListItemIcon>
                Set due date
            </MenuItem>
        </Menu>

    </div>
    
  )
}

export default InnerToDo
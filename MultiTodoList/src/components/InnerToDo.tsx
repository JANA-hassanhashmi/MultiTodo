import React, { useState } from 'react'
import { innerToDo } from '../model'
import { Checkbox } from '@mui/material'





const InnerToDo: React.FC<innerToDo> = ({id, text, isDone, dueDate}) => {
    
    
    const [doneStatus, setdoneStatus] = useState(isDone)


    return (

    <div className="flex items-center">
        <Checkbox 
        onChange={
            () => {
                setdoneStatus(!doneStatus)
                Object.assign(isDone, doneStatus)
            }
        }/>
        
        {doneStatus ? (
            <s className="text-gray-800">{text}</s>
        ) : (<span className="text-gray-800">{text}</span>)}
        
    </div>
    
  )
}

export default InnerToDo
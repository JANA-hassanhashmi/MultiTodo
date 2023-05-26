import React, { useState } from 'react'
import { innerToDo } from '../model'
import { Checkbox } from '@mui/material'


interface Props {
    innerToDo: innerToDo
    updateProgess: () => void
}


const InnerToDo: React.FC<Props> = ({innerToDo, updateProgess}) => {
    
    
    const [doneStatus, setdoneStatus] = useState(innerToDo.isDone)


    return (

    <div className="flex items-center">
        <Checkbox 
        onChange={
            () => {
                setdoneStatus(!doneStatus)
                Object.assign(innerToDo.isDone, doneStatus)
                updateProgess()
            }
        }/>
        
        {doneStatus ? (
            <s className="text-gray-800">{innerToDo.text}</s>
        ) : (<span className="text-gray-800">{innerToDo.text}</span>)}
        
    </div>
    
  )
}

export default InnerToDo
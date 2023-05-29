import React, { useState } from 'react'
import { innerToDo, outerToDo } from '../model'
import { Checkbox } from '@mui/material'
import { current } from '@reduxjs/toolkit'


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


    return (

    <div className="flex items-center">
        <Checkbox 
        onChange={handleDone} checked={innerToDo.isDone}/>
        
        {outerToDoList.find(current => current.id === outerId)?.innerToDoList.find(current => current.id === innerToDo.id)?.isDone ? (
            <s className="text-gray-800">{innerToDo.text}</s>
        ) : (<span className="text-gray-800">{innerToDo.text}</span>)}
        
    </div>
    
  )
}

export default InnerToDo
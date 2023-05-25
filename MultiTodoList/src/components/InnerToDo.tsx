import React from 'react'
import { innerToDo } from '../model'





const InnerToDo: React.FC<innerToDo> = ({id, text, isDone, dueDate}) => {
  return (

    <div className="flex items-center">
    <input type="checkbox" className="mr-2" />
    <span className="text-gray-800">{text}</span>
    </div>
    
  )
}

export default InnerToDo
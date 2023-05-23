import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";


interface Props {
    variant: string;
}
const MainButton: React.FC<Props>  = ({variant}) => {
  return (
    (variant == "addList") ? (
        <div className='bg-green-500 rounded py-1 px-3 inline-flex items-baseline space-x-1.5 cursor-pointer hover:bg-green-600'>
        <FaPlus className='scale-110'/>
        <span className='' /*onClick={() => ()}*/>Add New Lists</span>
        </div>):(
        <div className='bg-rose-300 rounded py-1 px-3 inline-flex items-baseline space-x-1.5 cursor-pointer hover:bg-rose-500'>
        <MdDelete className='scale-125'/>
        <span className=''>Delete All Lists</span>
        </div>
        )
    
  )
}

export default MainButton
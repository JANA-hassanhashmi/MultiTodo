import React, { useState } from 'react'
import InnerToDo, { innerToDo } from "./InnerToDo";
import InputField from './InputField';


export type outerToDo = {
    id: number;
    title: string;
    innerToDoList: innerToDo[];
  }




//const [innerToDoList, setInnerToDoList] = useState<innerToDo[]>([]);

const OuterToDo: React.FC<outerToDo> = ({id, title, innerToDoList}) => {
  
  const handleAddInnerItem = (e: React.FormEvent) => {
    e.preventDefault();
    innerToDoList.push({id: Date.now(), text: e.target})
    
    
  }
  
  return (
    <div>
      <span>{title}</span>
      {innerToDoList.map(innerToDo => (
      <InnerToDo 
      id={innerToDo.id} 
      text={innerToDo.text} 
      isDone={innerToDo.isDone}
      dueDate={innerToDo.dueDate} />))}
      <InputField handleAddInnerItem={handleAddInnerItem}/>
    </div>
  )
}

export default OuterToDo
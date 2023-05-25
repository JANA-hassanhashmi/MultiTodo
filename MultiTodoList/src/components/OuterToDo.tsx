import React, { useRef, useState } from 'react'
import InputField from './InputField';
import { innerToDo, outerToDo } from '../model';
import InnerToDo from './InnerToDo';




interface Props {
  outerToDo: outerToDo
}



//const [innerToDoList, setInnerToDoList] = useState<innerToDo[]>([]);

const OuterToDo: React.FC<Props> = ({outerToDo}) => {
  
  const [innerToDoList, setInnerToDoList] = useState<innerToDo[]>(outerToDo.innerToDoList);
  const [inputField, setinputField] = useState<string>("");

  const handleAddInnerItem = (e: React.FormEvent) => {
   e.preventDefault();
   setInnerToDoList((oldValue) => [...oldValue, createInnerToDo(inputField)]);
  }

  const createInnerToDo = (innerText: string) => {
    return {
      id: Date.now(),
      isDone: false,
      text: innerText,
      dueDate: ""
    }
  }
  
  return (
    <div>
      <span>{outerToDo.title}</span>
      {innerToDoList.map(innerToDo => (
      <InnerToDo 
      id={innerToDo.id} 
      text={innerToDo.text} 
      isDone={innerToDo.isDone}
      dueDate={innerToDo.dueDate} />))}
      <InputField 
      inputField={inputField}
      setinputField={setinputField}
      handleAddInnerItem={handleAddInnerItem}
      />
    </div>
  )
}

export default OuterToDo
import React, { useRef, useState } from 'react'
import InputField from './InputField';
import { innerToDo, outerToDo } from '../model';
import InnerToDo from './InnerToDo';
import { Divider } from '@mui/material';




interface Props {
  outerToDo: outerToDo
}





const OuterToDo: React.FC<Props> = ({outerToDo}) => {
  
  const [innerToDoList, setInnerToDoList] = useState<innerToDo[]>(outerToDo.innerToDoList);
  const [inputField, setinputField] = useState<string>("");
  const [titleField, setTitleField] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null)

  const handleAddInnerItem = (e: React.FormEvent) => {
   e.preventDefault();
   setInnerToDoList((oldValue) => [...oldValue, createInnerToDo(inputField)]);
   Object.assign(innerToDoList, outerToDo.innerToDoList);
   setinputField("");
  }

  const handleChangeTitle = (e: React.FormEvent) => {
    e.preventDefault();
    outerToDo.title = titleField
    setTitleField("");
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
      <form 
          className='flex' onSubmit={ (e) => {
          handleChangeTitle(e)}} >
          <input
          ref={titleRef}
           type='input'
           placeholder={outerToDo.title}
           value={titleField}
           onChange={
            (e) =>setTitleField(e.target.value)}
            className="px-4 py-2 border-gray-300 rounded text-2xl font-bold text-gray-900"></input>
     </form>
     <Divider />
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
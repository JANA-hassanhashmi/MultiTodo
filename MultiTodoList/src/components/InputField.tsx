import React, { useRef } from 'react'

interface Props{
    inputField: string, 
    setinputField: React.Dispatch<React.SetStateAction<string>>,
    handleAddInnerItem: (e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({inputField, setinputField, handleAddInnerItem}) => {

    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form 
    className='flex'
    onSubmit={ (e) => {
    handleAddInnerItem(e) 
    inputRef.current?.blur();}} >
        <input
        ref={inputRef}
        type='input'
        placeholder='Add item...'
        value={inputField}
        onChange={
            (e) =>setinputField(e.target.value)
        }></input>
    </form>
  )
}

export default InputField
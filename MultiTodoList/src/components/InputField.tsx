import React from 'react'

interface Props{
    handleAddInnerItem: (e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({handleAddInnerItem}) => {
  return (
    <form className='flex'>
        <input
        type='input'
        placeholder='Add item...'
        onSubmit={ (e) => handleAddInnerItem(e)}></input>
    </form>
  )
}

export default InputField
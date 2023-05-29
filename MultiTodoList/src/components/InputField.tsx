import { Box, InputAdornment, TextField } from '@mui/material';
import React, { useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';

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
    <Box>
      
      <TextField
      ref={inputRef}
      type='input'
      placeholder='Add item...'
      value={inputField}
      onChange={
          (e) =>setinputField(e.target.value)
      }
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <AddIcon/>
          </InputAdornment>
        ),
      }}
      variant='standard'
      sx={{width: "370px", border: "solid", borderRadius: '5px', borderColor: "#DCDCDC"}}
      />
    </Box>

         </form>
  )
}

export default InputField
import React, { useRef, useState } from 'react'
import InputField from './InputField';
import { innerToDo, outerToDo } from '../model';
import InnerToDo from './InnerToDo';
import { Box, Button, Card, Divider, IconButton, LinearProgress, Paper } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';



interface Props {
  outerToDo: outerToDo
  outerToDoList: outerToDo[]
  setOuterToDoList: React.Dispatch<React.SetStateAction<outerToDo[]>>
}





const OuterToDo: React.FC<Props> = ({outerToDo, outerToDoList, setOuterToDoList}) => {
  
  const [inputField, setinputField] = useState<string>("");
  const [titleField, setTitleField] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null)


  const [progressValue, setProgressValue] = useState<number>(0)

  const handleAddInnerItem = (e: React.FormEvent) => {
   e.preventDefault();
   const updatedOuterToDoList = outerToDoList.map(currentOuter => {
    if(currentOuter.id === outerToDo.id){
      currentOuter.innerToDoList.push(createInnerToDo(inputField))
    }
    return {...currentOuter}
   })
    

   setOuterToDoList(updatedOuterToDoList)
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

  const updateProgress = () => {
    
    const currentLength = outerToDoList.find(current => current.id === outerToDo.id)?.innerToDoList.length!



    const currentDone = outerToDoList.find(current => current.id === outerToDo.id)?.innerToDoList.filter(
      (innerToDo) => (innerToDo.isDone)).length!
    setProgressValue ( (currentDone / currentLength) * 100)
  }

  
  return (

    <Box>
    <Paper variant="outlined" elevation={24} square>
      <Card className='flex' variant='outlined'>
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
            className="px-4 py-2 border-gray-300 rounded text-2xl font-bold text-blue-600"></input>
        </form>

        <IconButton color='error' disableFocusRipple={true} >
        <CloseRounded/>
        </IconButton>
      </Card>
      
     
     <LinearProgress 
     variant='determinate'
     value={progressValue}/>
     <Divider />
      {outerToDo.innerToDoList.map(innerToDo => (
      <InnerToDo
      outerId={outerToDo.id} 
      innerToDo={innerToDo} 
      updateProgress={updateProgress}
      outerToDoList={outerToDoList}
      setOuterToDoList={setOuterToDoList}
      />))}
      <InputField 
      inputField={inputField}
      setinputField={setinputField}
      handleAddInnerItem={handleAddInnerItem}
      />
    </Paper>
    </Box>


  )
}

export default OuterToDo
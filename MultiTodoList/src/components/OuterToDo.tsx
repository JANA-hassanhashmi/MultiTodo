import React, { useRef, useState } from 'react'
import InputField from './InputField';
import { innerToDo, outerToDo } from '../model';
import InnerToDo from './InnerToDo';
import { Box, Button, Card, Divider, IconButton, LinearProgress, Paper, Tab, Tabs } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { TabPanel } from '@mui/lab';
import { sizing } from '@mui/system';




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


  const [tabValue, setTabValue] = React.useState(2)

  const changeTab = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

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
   updateProgress()
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

    if(currentLength === 0){
      setProgressValue(0)
    }
  }


  const deleteOuter = (outerId: number) => {
    setOuterToDoList(outerToDoList.filter(current => current.id !== outerId))
  }
  





  return (

    <Box>
    <Paper variant="outlined" elevation={24} sx={{}} square>
      <Card className='flex'  sx={{backgroundColor: '#F0F0F0', height: "45px", position: "relative", display: "flex"}}>
        <form 
          className='flex bg-inherit items-center' onSubmit={ (e) => {
          handleChangeTitle(e)}} >
          <input
          ref={titleRef}
            type='input'
            placeholder={outerToDo.title}
            value={titleField}
            onChange={
            (e) =>setTitleField(e.target.value)}
            className="px-4 py-2 
            border-gray-300 
            rounded 
            text-xl 
            text-black bg-inherit 
            focus:bg-amber-100 
            cursor-pointer 
            w-80 
            h-7
            placeholder-current
            outline-none"></input>
        </form>

        <IconButton 
        color='error' 
        disableFocusRipple={true} 
        onClick={()=> deleteOuter(outerToDo.id)}
        sx={{position: "absolute", right: "0" }}
        >
        <CloseRounded/>
        </IconButton>
      </Card>
      
     
     <LinearProgress 
     variant='determinate'
     value={progressValue}/>
     <Divider />

    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: "center"}}>
      <Tabs value={tabValue}  aria-label="basic tabs example" onChange={changeTab}>
        <Tab label="Active" />
        <Tab label="Completed"  />
        <Tab label="All" />
      </Tabs>
    </Box>

 

    { 

      (outerToDo.innerToDoList.length === 0) ? (
        <div>
          <div className='h-28 flex justify-center items-center'>
            <span className='text-slate-400'>There are no items in your list.</span>
          </div>
          
          <div className='flex justify-center'>
            <InputField 
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
            />
          </div>
          
        </div>
      ) : (

      
      (tabValue === 0) ? (
        <div className='h-auto flex justify-center items-left flex-col'>
          {outerToDo.innerToDoList.filter(innerToDo => !innerToDo.isDone).map(innerToDo => (
          <InnerToDo
          outerId={outerToDo.id} 
          innerToDo={innerToDo} 
          updateProgress={updateProgress}
          outerToDoList={outerToDoList}
          setOuterToDoList={setOuterToDoList}
          />))}

          <div className='flex justify-center'>
            <InputField 
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
            />
          </div>
        </div>
      ) : 
      (
        (tabValue === 1) ? (
        <div className='h-auto flex justify-center items-left flex-col'>
          {outerToDo.innerToDoList.filter(innerToDo => innerToDo.isDone).map(innerToDo => (
          <InnerToDo
          outerId={outerToDo.id} 
          innerToDo={innerToDo} 
          updateProgress={updateProgress}
          outerToDoList={outerToDoList}
          setOuterToDoList={setOuterToDoList}
          />))}
          <div className='flex justify-center'>
            <InputField 
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
            />
          </div>
        </div>
        ):(
        <div className='h-auto8 flex justify-center items-left flex-col'>
          {outerToDo.innerToDoList.map(innerToDo => (
          <InnerToDo
          outerId={outerToDo.id} 
          innerToDo={innerToDo} 
          updateProgress={updateProgress}
          outerToDoList={outerToDoList}
          setOuterToDoList={setOuterToDoList}
          />))}
          <div className='flex justify-center'>
            <InputField 
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
            />
          </div>
        </div>
        ))
      ) 
    }
      
    </Paper>
    </Box>


  )
}

export default OuterToDo
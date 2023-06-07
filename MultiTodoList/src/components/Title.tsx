/* eslint-disable */
import { CloseRounded } from '@mui/icons-material';
import { Card, IconButton, TextField, Typography} from '@mui/material';
import React from 'react';
import { outerToDo } from '../model';

interface Props {
  outerToDo: outerToDo,
  handleChangeTitle: (e: React.FormEvent) => void,
  titleField: string,
  setTitleField: React.Dispatch<React.SetStateAction<string>>,
  titleRef: React.RefObject<HTMLInputElement>,
  deleteOuter: (outerId: number) => void,

}

const Title: React.FC<Props> = ({outerToDo, handleChangeTitle, titleField, setTitleField, deleteOuter, titleRef}) =>{
  return (

    /*     <form
      className="flex bg-inherit items-center"
      onSubmit={(e) => {
        handleChangeTitle(e);
      }}
    >                       */
    // eslint-disable-next-line linebreak-style
    <Card
      className="Outer-header"
      sx={{
        height: '45px', position: 'relative', display: 'flex',
      }}
    >
<form
      className="flex bg-inherit items-center"
      onSubmit={(e) => {
        handleChangeTitle(e);
      }}
    >
      <TextField
        ref={titleRef}
        placeholder='Click here to edit title'
        variant='standard'
        onChange={
        (e) => {
          setTitleField(e.target.value)
        }}
        sx={{
          borderRadius:'4px',
          padding: '0px 15px', // px-4 py-2
          fontSize: '500rem', // text-xl
          backgroundColor: 'inherit', // bg-inherit
          cursor: 'pointer', // cursor-pointer
          width: '20rem', // w-80
          height: '10px', // h-7
        }}
      />
</form>
    <IconButton
      disableFocusRipple
      onClick={() => deleteOuter(outerToDo.id)}
      sx={
      {
        position: 'absolute',
        right: '0',
        ':hover': {
          color: 'red',
        },

      }
}
    >
    <CloseRounded />
    </IconButton>
    </Card>
  );
}

export default Title;

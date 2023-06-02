/* eslint-disable */
import { CloseRounded } from '@mui/icons-material';
import { Card, IconButton } from '@mui/material';
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

const Title: React.FC<Props> = ({outerToDo, handleChangeTitle, titleField, setTitleField, titleRef, deleteOuter}) =>{
  return (
    // eslint-disable-next-line linebreak-style
    <Card
      className="flex"
      sx={{
        backgroundColor: '#F0F0F0', height: '45px', position: 'relative', display: 'flex',
      }}
    >
    <form
      className="flex bg-inherit items-center"
      onSubmit={(e) => {
        handleChangeTitle(e);
      }}
    >
      <input
        ref={titleRef}
        type="input"
        placeholder={outerToDo.title}
        value={titleField}
        onChange={
        (e) => setTitleField(e.target.value)
}
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
        outline-none"
      >
      </input>
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

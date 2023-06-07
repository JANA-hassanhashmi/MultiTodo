/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import {
  Checkbox,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { current } from '@reduxjs/toolkit';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { innerToDo, outerToDo } from '../model';

interface Props {
  outerId: number;
  innerToDo: innerToDo;
  updateProgress: () => void;
  outerToDoList: outerToDo[];
  setOuterToDoList: React.Dispatch<React.SetStateAction<outerToDo[]>>;
  handleSetDueDateClicked: (inID: number, outID: number) => void;
}

const InnerToDo: React.FC<Props> = ({
  outerId,
  innerToDo,
  updateProgress,
  outerToDoList,
  setOuterToDoList,
  handleSetDueDateClicked,
}) => {
  const handleDone = () => {
    const newOuterList = outerToDoList.map((outer) => {
      if (outer.id === outerId) {
        outer.innerToDoList.map((currentInner) => {
          if (currentInner.id === innerToDo.id) {
            currentInner.isDone = !currentInner.isDone;
          }
        });
      }
      return { ...outer };
    });

    setOuterToDoList(newOuterList);
    updateProgress();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    const newInner = outerToDoList
      .find((current) => current.id === outerId)
      ?.innerToDoList.filter(
        (currentInner) => currentInner.id !== innerToDo.id
      )!;

    const updatedOuterList = outerToDoList.map((currentOuter) => {
      if (currentOuter.id === outerId) {
        currentOuter.innerToDoList = newInner;
      }

      return { ...currentOuter };
    });

    setOuterToDoList(updatedOuterList);
    setAnchorEl(null);

    updateProgress();
  };

  return (
    <div className="outline outline-1 outline-gray-200">
      <div className="flex items-center relative ">
        <Checkbox onChange={handleDone} checked={innerToDo.isDone} />

        {outerToDoList
          .find((current) => current.id === outerId)
          ?.innerToDoList.find((current) => current.id === innerToDo.id)
          ?.isDone ? (
          <Typography
            sx={{
              textDecoration: 'line-through',
            }}
          >
            {innerToDo.text}
          </Typography>
        ) : (
          // <s className="text-gray-800">{innerToDo.text}</s>
          <Typography>{innerToDo.text}</Typography>
          // <span className="text-gray-800">{innerToDo.text}</span>
        )}

        <div
          className="flex absolute right-1 cursor-pointer "
          onClick={handleClick}
        >
          <MoreVertOutlinedIcon
            sx={{ color: '#A8A8A8', '&:hover': { color: '#000000' } }}
          />
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleDelete}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            Delete Item
          </MenuItem>

          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              handleSetDueDateClicked(innerToDo.id, outerId);
            }}
          >
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            Set due date
          </MenuItem>
        </Menu>
      </div>

      {outerToDoList
        .find((current) => current.id === outerId)
        ?.innerToDoList.find((current) => current.id === innerToDo.id)
        ?.dueDate !== '' ? (
        <div className="">
          <Divider variant="middle" />
          <div className="inline-flex justify-items-start ">
            <span className="text-black font-bold text-sm"> Due on: </span>
            <span className="text-gray-400">
              {
                outerToDoList
                  .find((current) => current.id === outerId)
                  ?.innerToDoList.find((current) => current.id === innerToDo.id)
                  ?.dueDate
              }
            </span>
          </div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
};

export default InnerToDo;

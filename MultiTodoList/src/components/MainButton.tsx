/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface Props {
  variant: string;
  handleClick: () => void;
}
const MainButton: React.FC<Props> = ({ variant, handleClick }) => {
  switch (variant) {
    case 'addList':
      return (
        <div
          className="bg-green-500 rounded py-1 px-3 inline-flex items-baseline space-x-1.5 cursor-pointer hover:bg-green-600"
          onClick={() => {
            handleClick();
          }}
        >
          <FaPlus className="scale-110" />
          <span className="">Add New List</span>
        </div>
      );
      break;

    case 'deleteListNoList':
      return (
        <div className="bg-rose-300 rounded py-1 px-3 inline-flex items-baseline space-x-1.5 cursor-not-allowed ">
          <MdDelete className="scale-125" />
          <span className="">Delete All Lists</span>
        </div>
      );

    default:
      return (
        <div
          className="bg-rose-500 rounded py-1 px-3 inline-flex items-baseline space-x-1.5 cursor-pointer hover:bg-rose-600"
          onClick={() => {
            handleClick();
          }}
        >
          <MdDelete className="scale-125" />
          <span className="">Delete All Lists</span>
        </div>
      );
  }
};

export default MainButton;

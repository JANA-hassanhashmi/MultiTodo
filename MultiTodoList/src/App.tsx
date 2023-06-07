/* eslint-disable react/jsx-key */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './App.css';
import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MainButton from './components/MainButton';
import DialogBox from './components/DialogBox';
import { outerToDo } from './model';
import OuterToDo from './components/OuterToDo';
import ThemeToggle from './components/ThemeToggle';

export const ThemeContext = React.createContext(null);

function App() {
  const [outerToDoList, setOuterToDoList] = useState<outerToDo[]>([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [innerID, setinnerID] = useState(0);
  const [outerId, setouterId] = useState(0);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleAddOuterList = () => {
    setOuterToDoList((oldValue) => [
      {
        id: Date.now(),
        title: 'Click me to edit title',
        innerToDoList: [],
      },
      ...oldValue,
    ]);
  };

  const handleDeleteClicked = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDeleteAllLists = () => {
    setOuterToDoList([]);
    handleClosePopup();
  };

  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handleSetDueDateClicked = (inID: number, outID: number) => {
    setinnerID(inID);
    setouterId(outID);
    setIsCalendarOpen(true);
  };

  const muiDateToString = (date) => {
    const { $y, $M, $D } = date;
    return `${$D.toString()}/${$M.toString()}/${$y.toString()}`;
  };

  const handleDateSet = (date) => {
    const dateString = muiDateToString(date);
    console.log(dateString);
    // eslint-disable-next-line max-len
    const newInner = outerToDoList
      .find((current) => current.id === outerId)
      ?.innerToDoList.map((currentInner) => {
        if (currentInner.id === innerID) {
          currentInner = {
            id: currentInner.id,
            text: currentInner.text,
            isDone: currentInner.isDone,
            dueDate: dateString,
          };
        }
        return { ...currentInner };
      })!;

    const updatedOuterList = outerToDoList.map((currentOuter) => {
      if (currentOuter.id === outerId) {
        currentOuter.innerToDoList = newInner;
      }

      return { ...currentOuter };
    });

    setOuterToDoList(updatedOuterList);
    setIsCalendarOpen(false);
  };

  return (
    <div className="">
      <DialogBox
        variant="delete"
        isPopupOpen={isPopupOpen}
        handleClosePopup={handleClosePopup}
        handleAction={handleDeleteAllLists}
      />

      <DialogBox
        variant="calendar"
        isPopupOpen={isCalendarOpen}
        handleClosePopup={handleCloseCalendar}
        handleAction={handleDateSet}
      />

      <div className="flex flex-col md:justify-between md:flex-row mb-3">
        <h1 className="font-sans text-3xl font-semibold App-header">
          Multi ToDo
        </h1>
        <div className="space-x-2 text-white inline-flex items-baselin justify-center">
          <ThemeToggle />
          <MainButton variant="addList" handleClick={handleAddOuterList} />
          {outerToDoList.length === 0 ? (
            <MainButton
              variant="deleteListNoList"
              handleClick={handleDeleteClicked}
            />
          ) : (
            <MainButton
              variant="deleteList"
              handleClick={handleDeleteClicked}
            />
          )}
        </div>
      </div>

      {outerToDoList.length === 0 ? (
        <div className="flex items-center justify-center h-80 ">
          <span>You currently have no lists.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {outerToDoList.map((outerToDo) => (
            <OuterToDo
              outerToDo={outerToDo}
              outerToDoList={outerToDoList}
              setOuterToDoList={setOuterToDoList}
              handleSetDueDateClicked={handleSetDueDateClicked}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

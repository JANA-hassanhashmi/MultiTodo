/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/function-component-definition */
import React, { useRef, useState } from 'react';
import { Box, Divider, LinearProgress, Paper, Tab, Tabs } from '@mui/material';
import { outerToDo } from '../model';
import Title from './Title';
import CurrentDisplay from './CurrentDisplay';

interface Props {
  outerToDo: outerToDo;
  outerToDoList: outerToDo[];
  setOuterToDoList: React.Dispatch<React.SetStateAction<outerToDo[]>>;
  handleSetDueDateClicked: (inID: number, outID: number) => void;
}

const OuterToDo: React.FC<Props> = ({
  outerToDo,
  outerToDoList,
  setOuterToDoList,
  handleSetDueDateClicked,
}) => {
  const [inputField, setinputField] = useState<string>('');
  const [titleField, setTitleField] = useState<string>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const [progressValue, setProgressValue] = useState<number>(0);

  const [tabValue, setTabValue] = React.useState(2);

  const changeTab = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const updateProgress = () => {
    const currentLength = outerToDoList.find(
      (current) => current.id === outerToDo.id
    )?.innerToDoList.length!;

    const currentDone = outerToDoList
      .find((current) => current.id === outerToDo.id)
      ?.innerToDoList.filter((innerToDo) => innerToDo.isDone).length!;
    setProgressValue((currentDone / currentLength) * 100);

    if (currentLength === 0) {
      setProgressValue(0);
    }
  };

  const createInnerToDo = (innerText: string) => ({
    id: Date.now(),
    isDone: false,
    text: innerText,
    dueDate: '',
  });

  const handleAddInnerItem = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedOuterToDoList = outerToDoList.map((currentOuter) => {
      if (currentOuter.id === outerToDo.id) {
        currentOuter.innerToDoList.push(createInnerToDo(inputField));
      }
      return { ...currentOuter };
    });

    setOuterToDoList(updatedOuterToDoList);
    setinputField('');
    updateProgress();
  };

  const handleChangeTitle = (e: React.FormEvent) => {
    e.preventDefault();
    outerToDo.title = titleField;
    setTitleField('');
  };

  const deleteOuter = (outerId: number) => {
    setOuterToDoList(outerToDoList.filter((current) => current.id !== outerId));
  };

  return (
    <div>
      <Box>
        <Paper
          variant="outlined"
          elevation={24}
          sx={{ borderRadius: '5px' }}
          square
        >
          <Title
            handleChangeTitle={handleChangeTitle}
            outerToDo={outerToDo}
            deleteOuter={deleteOuter}
            titleField={titleField}
            setTitleField={setTitleField}
            titleRef={titleRef}
          />

          <LinearProgress variant="determinate" value={progressValue} />
          <Divider />

          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Tabs
              value={tabValue}
              aria-label="basic tabs example"
              onChange={changeTab}
            >
              <Tab label="Active" />
              <Tab label="Completed" />
              <Tab label="All" />
            </Tabs>
          </Box>

          {
            outerToDo.innerToDoList.length === 0 ? (
              <CurrentDisplay
                variant="empty"
                outerToDo={outerToDo}
                inputField={inputField}
                setinputField={setinputField}
                handleAddInnerItem={handleAddInnerItem}
                updateProgress={updateProgress}
                outerToDoList={outerToDoList}
                setOuterToDoList={setOuterToDoList}
                handleSetDueDateClicked={handleSetDueDateClicked}
              />
            ) : tabValue === 0 ? (
              <CurrentDisplay
                variant="tabZero"
                outerToDo={outerToDo}
                inputField={inputField}
                setinputField={setinputField}
                handleAddInnerItem={handleAddInnerItem}
                updateProgress={updateProgress}
                outerToDoList={outerToDoList}
                setOuterToDoList={setOuterToDoList}
                handleSetDueDateClicked={handleSetDueDateClicked}
              />
            ) : tabValue === 1 ? (
              outerToDoList
                .find((current) => current.id === outerToDo.id)!
                .innerToDoList.filter((current) => !current.isDone).length !==
              0 ? (
                <CurrentDisplay
                  variant="tabOneInner"
                  outerToDo={outerToDo}
                  inputField={inputField}
                  setinputField={setinputField}
                  handleAddInnerItem={handleAddInnerItem}
                  updateProgress={updateProgress}
                  outerToDoList={outerToDoList}
                  setOuterToDoList={setOuterToDoList}
                  handleSetDueDateClicked={handleSetDueDateClicked}
                />
              ) : (
                <CurrentDisplay
                  variant="tabOne"
                  outerToDo={outerToDo}
                  inputField={inputField}
                  setinputField={setinputField}
                  handleAddInnerItem={handleAddInnerItem}
                  updateProgress={updateProgress}
                  outerToDoList={outerToDoList}
                  setOuterToDoList={setOuterToDoList}
                  handleSetDueDateClicked={handleSetDueDateClicked}
                />
              ) // end of tabOne Inner
            ) : (
              <CurrentDisplay
                variant="tabTwo"
                outerToDo={outerToDo}
                inputField={inputField}
                setinputField={setinputField}
                handleAddInnerItem={handleAddInnerItem}
                updateProgress={updateProgress}
                outerToDoList={outerToDoList}
                setOuterToDoList={setOuterToDoList}
                handleSetDueDateClicked={handleSetDueDateClicked}
              />
            ) // end of tabOne ternary // end of tabZero ternary // end empty ternary
          }
        </Paper>
      </Box>
    </div>
  );
};

export default OuterToDo;

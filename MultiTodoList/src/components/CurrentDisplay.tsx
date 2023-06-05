/* eslint-disable react/jsx-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable linebreak-style */
import React from 'react';
import { outerToDo } from '../model';
import InputField from './InputField';
import InnerToDo from './InnerToDo';

interface Props {
  variant: string,
  outerToDo: outerToDo,
  inputField: string,
  setinputField: React.Dispatch<React.SetStateAction<string>>,
  handleAddInnerItem: (e: React.FormEvent<Element>) => void,
  updateProgress: () => void,
  outerToDoList: outerToDo[],
  setOuterToDoList: React.Dispatch<React.SetStateAction<outerToDo[]>>,
  handleSetDueDateClicked: (inID: number, outID: number) => void
}

const CurrentDisplay: React.FC<Props> = ({
  // eslint-disable-next-line @typescript-eslint/no-shadow
  variant, outerToDo,
  inputField, setinputField,
  handleAddInnerItem, updateProgress, outerToDoList, setOuterToDoList, handleSetDueDateClicked,
}) => {
  if (variant === 'empty') {
    return (
      <div>
        <div className="h-28 flex justify-center items-center">
          <span className="text-slate-400">There are no items in your list.</span>
        </div>

        <div className="flex justify-center">
          <InputField
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
          />
        </div>
      </div>
    );
  }

  if (variant === 'tabZero') {
    return (

      <div className="h-auto flex justify-center items-left flex-col">
        {outerToDo.innerToDoList.filter((innerToDo) => !innerToDo.isDone).map((innerToDo) => (
          <InnerToDo
            outerId={outerToDo.id}
            innerToDo={innerToDo}
            updateProgress={updateProgress}
            outerToDoList={outerToDoList}
            setOuterToDoList={setOuterToDoList}
            handleSetDueDateClicked={handleSetDueDateClicked}
          />
        ))}

        <div className="flex justify-center">
          <InputField
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
          />
        </div>
      </div>
    );
  }

  if (variant === 'tabOne') {
    return (
      <div className="h-auto flex justify-center items-left flex-col">
        {outerToDo.innerToDoList.filter((innerToDo) => innerToDo.isDone).map((innerToDo) => (
          <InnerToDo
            outerId={outerToDo.id}
            innerToDo={innerToDo}
            updateProgress={updateProgress}
            outerToDoList={outerToDoList}
            setOuterToDoList={setOuterToDoList}
            handleSetDueDateClicked={handleSetDueDateClicked}
          />
        ))}
        <div className="flex justify-center">
          <InputField
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
          />
        </div>
      </div>
    );
  }
  if (variant === 'tabTwo') {
    <div className="h-auto8 flex justify-center items-left flex-col">
      {outerToDo.innerToDoList.map((innerToDo) => (
        <InnerToDo
          outerId={outerToDo.id}
          innerToDo={innerToDo}
          updateProgress={updateProgress}
          outerToDoList={outerToDoList}
          setOuterToDoList={setOuterToDoList}
          handleSetDueDateClicked={handleSetDueDateClicked}
        />
      ))}

      <div className="flex justify-center">
        <InputField
          inputField={inputField}
          setinputField={setinputField}
          handleAddInnerItem={handleAddInnerItem}
        />
      </div>
    </div>;
  } else {
    return (
      <div>
        <div className="h-28 flex justify-center items-center">
          <span className="text-slate-400">There are no items in your completed list..</span>
        </div>

        <div className="flex justify-center">
          <InputField
            inputField={inputField}
            setinputField={setinputField}
            handleAddInnerItem={handleAddInnerItem}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default CurrentDisplay;

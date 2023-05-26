import { ADD_INNER_ITEM, ADD_OUTER_LIST, DELETE_INNER_ITEM, DELETE_OUTER_LIST } from "../actionTypes/actionTypes";

const initialState = {
  outerToDoList: [
    {
        title: "TestNoteTitle",
        id: Date.now(),
        innerToDoList: [
            {
                id: Date.now() + 1,
                text: "This is my test note's text",
                isDone: false,
                dueDate: "No Due date currently"
            }
        ]

    }
  ]
};

export default todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OUTER_LIST:
      return {
        ...state,
        outerToDoList: [...state.outerToDoList, action.payload]
      };

    case DELETE_OUTER_LIST:
      return {
        ...state,
        outerToDoList: [state.outerToDoList.filter(outertodo => outertodo.id !== action.payload)]
      };
    default:
      return state;
  }
};

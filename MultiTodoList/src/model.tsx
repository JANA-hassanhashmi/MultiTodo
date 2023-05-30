export type outerToDo = {
    id: number;
    title: string;
    innerToDoList: innerToDo[];
}

export type innerToDo = {
    id: number;
    text: string;
    isDone: boolean;
    dueDate: string; 
  }

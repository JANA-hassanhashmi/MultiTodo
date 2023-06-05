import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Multi to do empty outer', () => {
    // ARRANGE
    render(<App />);

    const sampleOuterToDoList = [];
    // ACT

    // EXPECT
    expect(
      // Presence of Heading
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Multi ToDo');

    expect(
      // Presence of default text
      screen.getByText('You currently have no lists.')
    ).toBeInTheDocument();
    expect(
      // Presence of default text
      screen.getByText('Add New List')
    ).toBeInTheDocument();
    expect(
      // Presence of default text
      screen.getByText('Delete All Lists')
    ).toBeInTheDocument();
  });

  it('Non empty Multi to do', () => {
    // ARRANGE
    render(<App />);

    const sampleOuterToDoList = [
      {
        id: 1,
        title: 'Task 1',
        innerToDoList: [
          {
            id: 1,
            text: 'Inner Task 1',
            isDone: false,
            dueDate: '2023-06-05',
          },
          {
            id: 2,
            text: 'Inner Task 2',
            isDone: true,
            dueDate: '2023-06-06',
          },
          // Add more innerToDo objects as needed
        ],
      },
      {
        id: 2,
        title: 'Task 2',
        innerToDoList: [
          {
            id: 1,
            text: 'Inner Task 1',
            isDone: false,
            dueDate: '2023-06-07',
          },
          // Add more innerToDo objects as needed
        ],
      },
      {
        id: 3,
        title: 'Task 3',
        innerToDoList: [
          {
            id: 1,
            text: 'Inner Task 1',
            isDone: true,
            dueDate: '2023-06-08',
          },
          // Add more innerToDo objects as needed
        ],
      },
      {
        id: 4,
        title: 'Task 4',
        innerToDoList: [
          {
            id: 1,
            text: 'Inner Task 1',
            isDone: false,
            dueDate: '2023-06-09',
          },
          // Add more innerToDo objects as needed
        ],
      },
      {
        id: 5,
        title: 'Task 5',
        innerToDoList: [
          {
            id: 1,
            text: 'Inner Task 1',
            isDone: true,
            dueDate: '2023-06-10',
          },
          // Add more innerToDo objects as needed
        ],
      },
    ];
    // ACT
})
});

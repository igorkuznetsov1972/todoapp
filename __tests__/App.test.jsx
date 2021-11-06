import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import App from '../src/App';
import taskNameSliceReducer from '../src/slices/taskName';
import tasksSliceReducer from '../src/slices/tasks';
import filterSliceReducer from '../src/slices/filter';


describe('ToDo App test', () => {
  test('Виден главный экран приложения', async () => {
    const store = configureStore({
      reducer: {
        taskName: taskNameSliceReducer,
        tasks: tasksSliceReducer,
        filter: filterSliceReducer,
      },
    });
    const app = (
      <Provider store={store}>
        <App />
      </Provider>
    );
    render(app);

    const header = await screen.getByRole('heading', { name: /your todo list/i });

    expect(header).toBeInTheDocument();
  });

  test('Добавление новой задачи', async () => {
    const store = configureStore({
      reducer: {
        taskName: taskNameSliceReducer,
        tasks: tasksSliceReducer,
        filter: filterSliceReducer,
      },
    });
    const app = (
      <Provider store={store}>
        <App />
      </Provider>
    );
    render(app);
    const input = await screen.getByRole('textbox');
    const button = await screen.getByRole('button', { name: /add/i });
    userEvent.type(input, 'Task 1');
    userEvent.click(button);
    const task = await screen.getByRole('button', { name: /task 1/i });
    expect(task).toBeInTheDocument();
    expect(task).toHaveTextContent('Task 1');
  });

  test('Удаление задачи', async () => {
    const store = configureStore({
      reducer: {
        taskName: taskNameSliceReducer,
        tasks: tasksSliceReducer,
        filter: filterSliceReducer,
      },
    });
    const app = (
      <Provider store={store}>
        <App />
      </Provider>
    );
    render(app);
    const input = await screen.getByRole('textbox');
    const buttonAdd = await screen.getByRole('button', { name: /add/i });
    userEvent.type(input, 'Task 1');
    userEvent.click(buttonAdd);
    // screen.logTestingPlaygroundURL();
    const task = await screen.getByRole('button', { name: /task 1/i });
    const buttonDelete = await screen.getByRole('button', { name: /×/i });
    userEvent.click(buttonDelete);
    expect(task).not.toBeInTheDocument();
  });
});

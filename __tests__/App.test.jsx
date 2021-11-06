import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import store from '../src/store/store';

afterEach(() => cleanup());
test('Виден главный экран приложения', () => {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  // screen.logTestingPlaygroundURL();
  const { getByRole } = render(app);

  const header = getByRole('heading', { name: /your todo list/i });

  expect(header).toBeInTheDocument();
});

test('Добавление новой задачи', () => {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const { getByRole } = render(app);
  const input = getByRole('textbox');
  const button = getByRole('button', { name: /add/i });
  userEvent.type(input, 'Task 1');
  userEvent.click(button);
  const task = getByRole('button', { name: /task 1/i });
  expect(task).toBeInTheDocument();
  expect(task).toHaveTextContent('Task 1');
  userEvent.click(getByRole('button', { name: /×/i }));
  // screen.logTestingPlaygroundURL();
});

test('Удаление задачи', () => {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const { getByRole } = render(app);
  const input = getByRole('textbox');
  const buttonAdd = getByRole('button', { name: /add/i });
  userEvent.type(input, 'Task 1');
  userEvent.click(buttonAdd);
  screen.logTestingPlaygroundURL();
  const task = getByRole('button', { name: /task 1/i });
  const buttonDelete = getByRole('button', { name: /×/i });
  userEvent.click(buttonDelete);
  expect(task).not.toBeInTheDocument();
});

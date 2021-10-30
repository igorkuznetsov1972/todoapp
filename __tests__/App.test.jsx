import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from '../src/store/store';

it('Виден главный экран приложения', () => {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  const { getByRole } = render(app);

  const header = getByRole('heading', { name: /your todo list/i });

  expect(header).toBeInTheDocument();
});

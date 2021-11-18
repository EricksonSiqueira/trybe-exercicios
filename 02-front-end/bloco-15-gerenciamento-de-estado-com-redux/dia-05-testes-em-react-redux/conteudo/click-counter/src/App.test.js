import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './renderWithRedux';
import App from './App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 1 } } });

    expect(queryByText('0')).toBeInTheDocument();

    const buttonAdicionar = queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();

    userEvent.click(buttonAdicionar);

    const counterChanged = screen.getByText('1');
    expect(counterChanged).toBeInTheDocument();
  });
});

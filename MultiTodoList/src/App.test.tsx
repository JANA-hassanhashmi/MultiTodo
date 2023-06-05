import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders Multi to do', () => {
    // ARRANGE
    render(<App />);
    // ACT

    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Multi ToDo');
  });
});

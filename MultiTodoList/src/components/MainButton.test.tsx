import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainButton from './MainButton';

describe('Main Button', () => {
  it('Add new list button', () => {
    render(<MainButton variant="addList" handleClick={jest.fn} />);
  });
});

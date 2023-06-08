/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainButton from './MainButton';

describe('Main Button', () => {
  it('Add new list button', () => {
    render(<MainButton variant="addList" handleClick={vi.fn()}/>);
    expect(
      // Presence of Heading
      screen.getByText(/Add New List/i)
    ).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';


describe('App test', () => {
    it('should render app', () => {
        render(<App />);
        expect(screen.getByText)
    });

});

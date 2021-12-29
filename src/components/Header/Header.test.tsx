import { render, screen } from '@testing-library/react';

import Header from '.';

jest.mock('../../contexts/themeContext.tsx', () => ({
  useTheme() {
    return {
      theme: {
        name: 'light',
      },
    };
  },
}));

describe('Tests for header component', () => {
  it('should have a heading with \'TODO\' content', () => {
    render(<Header />);
    expect(screen.getByText('TODO')).toBeInTheDocument();
  });

  it('should contain a button to toggle dark/light mode', () => {
    render(<Header />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

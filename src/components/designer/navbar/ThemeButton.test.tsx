import { render, fireEvent, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ThemeButton from './ThemeButton';

describe('ThemeButton component', () => {
  const renderWithRecoil = () =>
    render(
      <RecoilRoot>
        <ThemeButton />
      </RecoilRoot>
    );

  it('renders the MoonIcon when dark mode is off', () => {
    renderWithRecoil();
    
    // Assert that the MoonIcon is rendered using data-testid
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('renders the SunIcon when dark mode is on', () => {
    renderWithRecoil();
    const button = screen.getByRole('button');
    
    // Simulate a button click to toggle dark mode
    fireEvent.click(button);
    
    // Assert that the SunIcon is rendered using data-testid
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  });

  it('toggles between light and dark mode when clicked', () => {
    renderWithRecoil();
    const button = screen.getByRole('button');

    // Initially, the MoonIcon should be rendered (dark mode is off)
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();

    // Toggle dark mode on (SunIcon rendered)
    fireEvent.click(button);
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();

    // Toggle dark mode off (MoonIcon rendered again)
    fireEvent.click(button);
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });
});

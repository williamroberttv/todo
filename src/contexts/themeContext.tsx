import {
  createContext, useCallback, useContext, useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { ChildrenProps, Theme, ThemeContextData } from '../@types/types.d';
import { dark, light } from '../styles/themes';

const ThemeContext = createContext({} as ThemeContextData);

export function CustomThemeProvider({ children }: ChildrenProps) {
  const [theme, setTheme] = useState<Theme>(light);

  const toggleTheme = useCallback(() => {
    theme.name === 'light' ? setTheme(dark) : setTheme(light);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

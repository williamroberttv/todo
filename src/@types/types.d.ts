import { ReactNode } from 'react';

export interface Theme {
  name: string;
  primary: string;
  bg: string;
  secundary: string;
  text: string;
  selected:string;
}

export interface ThemeContextData {
  toggleTheme: () => void;
  theme: Theme;
}

export interface ChildrenProps{
  children: ReactNode
}

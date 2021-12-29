import { CustomThemeProvider } from './contexts/themeContext';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
    </CustomThemeProvider>
  );
}

export default App;

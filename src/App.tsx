import Header from './components/Header';
import { CustomThemeProvider } from './contexts/themeContext';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <CustomThemeProvider>
      <Header />
      <GlobalStyles />
    </CustomThemeProvider>
  );
}

export default App;

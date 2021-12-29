<<<<<<< HEAD
import Header from './components/Header';

function App() {
  return (
    <Header />
=======
import { CustomThemeProvider } from './contexts/themeContext';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
    </CustomThemeProvider>
>>>>>>> 1a3cdb8183b16df8ee442502dc00c727376a9782
  );
}

export default App;

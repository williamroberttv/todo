import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from '../../contexts/themeContext';
import { Container, Content } from './styles';

function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Container>
      <Content>
        <h1>TODO</h1>
        <button type="button" onClick={toggleTheme}>
          {theme.name === 'light' ? <BsFillMoonFill size={20} />
            : <BsFillSunFill size={20} />}
        </button>
      </Content>
    </Container>
  );
}

export default Header;

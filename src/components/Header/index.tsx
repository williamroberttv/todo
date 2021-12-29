import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Container } from './styles';

function Header() {
  const light = true;

  return (
    <Container>
      <h1>TODO</h1>
      <button type="button">
        {light ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
      </button>
    </Container>
  );
}

export default Header;

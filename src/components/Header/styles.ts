import styled from 'styled-components';

export const Container = styled.header`
  background: linear-gradient(90deg, rgba(168,167,189,1) 0%,
   rgba(205,104,171,1) 35%, rgba(49,195,224,1) 100%);

   height: 350px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-top:50px;

  h1{
    letter-spacing: 8px;
    color: #ffff;
  }

  button {
    background-color: transparent;
    border: none;
    color: #ffff;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
`;

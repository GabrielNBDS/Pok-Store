import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  flex-direction: column;
`;

export const TypeContainer = styled.div`
  height: 50vh;
  width: 100vw;

  background: ${props => props.bgcolor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 60px;
  }

  img:nth-of-type(2) {
    height: 30px;
  }
`;
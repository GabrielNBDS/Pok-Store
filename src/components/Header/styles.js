import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 100vw;
  height: 100px;
  background: ${props => props.bgcolor};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 60px;
  }

  img:nth-of-type(2) {
    height: 30px;
  }

  a {
    margin-right: 5px;
    text-decoration: none;
    color: #FFF;
  }
`;
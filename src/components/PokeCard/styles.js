import styled, { keyframes } from 'styled-components'

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;

  background: #FFFFFF;
  border-radius: 10px;

  margin: 50px;

  animation: ${fadeDown} 1s;

`;

export const CardImg = styled.img`
  width: 199px;
  height: 137px;

  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid black;
`;

export const Info = styled.div`
  color: #000;
  margin-left: 8px;
`;

export const AddButton = styled.button`
  padding: 5px 10px;
  background: ${props => props.bgcolor};
  border-radius: 10px;
  color: #FFF;
  transition: color .2s;
  transition: background-color .2s;
  border: 0;

  &:hover {
    background-color: #FFF;
    color: #000;
  }
`;
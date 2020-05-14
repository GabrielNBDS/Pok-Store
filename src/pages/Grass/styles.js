import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  overflow-x: hidden; 
  overflow-x: auto;
`;

export const ToggleCart = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  background: #78C850;
  color: #FFF;
  font-size: 24px;

  padding: 5px;
`;


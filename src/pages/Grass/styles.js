import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;

  width: 100%;

  overflow-x: hidden; 
  overflow-x: auto;
`;

export const Search = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 0 20px;
  height: 50px;
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

export const MobileContainer = styled.div`
  width: 100%;
`;


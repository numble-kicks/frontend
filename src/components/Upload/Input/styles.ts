import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  justify-content: space-between;
`;

export const Button = styled.button`
  height: 100%;
  width: 32%;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  color: #ddd;

  &.active {
    border: 1px solid #000;
    background-color: #4a4a52;
    color: #f1f1f1;
  }
`;

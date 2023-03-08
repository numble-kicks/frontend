import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.68;
`;

export const Logo = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  text-shadow: 1px 4px 6px rgba(0, 0, 0, 0.5);
  top: 27%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 85px;
`;

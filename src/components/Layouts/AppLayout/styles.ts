import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 390px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
`;

export const MainNavigation = styled.ul`
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
`;

export const MenuItem = styled.li`
  width: 100%;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    opacity: 0.6;

    .icon {
      width: 22px;
      height: 22px;
      /* margin-bottom: 8px; */
    }

    &.active {
      opacity: 1;
    }
  }
`;

import styled from 'styled-components';

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

    .icon {
      width: 22px;
      height: 22px;
    }

    span {
      margin-top: 5px;
      color: #bbb;
    }
  }

  svg > *:last-child:not(rect + path) {
    fill: #bbb;
  }

  rect {
    fill: #4a4a52;
  }

  &.active {
    span {
      color: #4a4a52;
    }
    svg > *:last-child {
      fill: #4a4a52;
    }
  }
`;

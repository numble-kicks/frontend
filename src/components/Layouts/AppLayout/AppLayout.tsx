import { Outlet } from 'react-router-dom';
import { Navbar } from 'components';
import * as S from './styles';

interface Props {
  navbar: boolean;
}

export const AppLayout = ({ navbar }: Props) => {
  return (
    <S.AppContainer>
      <Outlet />
      {navbar && <Navbar />}
    </S.AppContainer>
  );
};

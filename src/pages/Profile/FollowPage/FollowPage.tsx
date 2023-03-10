import { PageHeader, ProfileImage } from 'components';
import { FollowButton } from 'components/Profile/FollowButton/FollowButton';
import { Link, useLocation } from 'react-router-dom';
import { IFollow } from 'types';
import * as S from './styles';

export const FollowPage = () => {
  const location = useLocation();
  const userName = decodeURI(location.pathname.split('/')[2]);
  const pageState = location.pathname.split('/')[3];

  const pageTitle = `${userName}'s ${pageState}`;

  return (
    <S.Wrap>
      <PageHeader title={pageTitle} backTo={'/profile/' + userName} />
      <S.FollowList>
        {/* {followData &&
          followData?.map(({ id, member }) => (
            <S.FollowItem key={id}>
              <Link to={`/${member.name}`} state={{ userId: member.id }}>
                <ProfileImage size="50" url={member.photoURL} />
                <S.Name>{member.name || ''}</S.Name>
              </Link>
              {userName === localStorage.getItem('name') && (
                <FollowButton
                  mutate={mutate}
                  page={page}
                  id={page === 'following' ? id : member.id}
                />
              )}
            </S.FollowItem>
          ))} */}
      </S.FollowList>
    </S.Wrap>
  );
};

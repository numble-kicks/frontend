import * as S from './styles';
import { AppContainer, PageHeader, ProfileInputs } from 'components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfileEditPage = () => {
  const userData = JSON.parse(sessionStorage.getItem('kicks-user') || '');
  const navigate = useNavigate();

  const [name, setName] = useState(userData.name);
  const [image, setImage] = useState(userData.photoURL);

  const newDomain = name.toLowerCase().replace(/ /g, '');
  const isUpdated = image !== userData?.photoURL || name !== userData?.name;

  const handleSubmit = () => {
    if (isUpdated) {
      sessionStorage.setItem(
        'kicks-user',
        JSON.stringify({ name: name, photoURL: image })
      );
      navigate(`/profile/${newDomain}`);
    }
  };

  return (
    <AppContainer>
      <PageHeader title="프로필 수정" backTo={`/profile/${newDomain}`} />
      <S.EditForm onSubmit={handleSubmit}>
        <ProfileInputs
          name={name}
          image={image}
          setName={setName}
          setImage={setImage}
        />
        <span>프로필 사진과 닉네임을 입력해주세요</span>
        <S.SubmitButton type="submit" className={isUpdated ? 'active' : ''}>
          완료
        </S.SubmitButton>
      </S.EditForm>
    </AppContainer>
  );
};

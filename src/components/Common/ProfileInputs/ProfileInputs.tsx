import { ProfileImage } from 'components';
import * as S from './styles';
import { BsCameraFill } from 'react-icons/bs';

interface Props {
  name: string;
  image: string;
  setName: (name: string) => void;
  setImage: (imageURL: string) => void;
}

export const ProfileInputs = ({ name, image, setName, setImage }: Props) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <S.InputContainer>
      <input
        type="file"
        accept="image/*"
        id="profile"
        onChange={handleImageChange}
      />
      <S.ImageInput htmlFor="profile">
        <ProfileImage size="140" url={image || ''} />
        <label htmlFor="profile">
          <BsCameraFill />
        </label>
      </S.ImageInput>
      <S.NameInput
        type="text"
        value={name || ''}
        onChange={handleNameChange}
        autoFocus
      />
    </S.InputContainer>
  );
};

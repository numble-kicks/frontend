import * as S from './styles';

interface Props {
  size: string;
  url: string;
}

export const ProfileImage = ({ size, url }: Props) => {
  return (
    <S.ImageContainer size={size}>
      <img
        src={
          url ||
          'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
        }
        alt="profile"
        className="profile"
      />
    </S.ImageContainer>
  );
};

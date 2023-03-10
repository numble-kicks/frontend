import { IVideoItem } from 'types';
import * as S from './styles';

interface Prop {
  videoData: IVideoItem;
  isShown: boolean;
}

export const DescriptionBox = ({ videoData, isShown }: Prop) => {
  const { title, description, price, used_status } = videoData;

  return (
    <S.Wrap isShown={isShown}>
      <S.ContentBox>
        <h1 className="price">
          <span>${price.toLocaleString()}</span>
        </h1>
        <h2 className="name">{title}</h2>
        <span className="secondhand">{used_status ? 'Used' : 'Like New'}</span>
        <p className="desc">{description}</p>
      </S.ContentBox>
    </S.Wrap>
  );
};

import { useState } from 'react';
import { VideoInput, ImageInput } from 'components';
import * as S from './styles';

export const FileUpload = () => {
  const [video, setVideo] = useState<any>();
  const [img, setImg] = useState<any>();

  return (
    <S.FileUploadContainer>
      <VideoInput setVideo={setVideo} video={video} />
      <ImageInput setImg={setImg} img={img} />
    </S.FileUploadContainer>
  );
};

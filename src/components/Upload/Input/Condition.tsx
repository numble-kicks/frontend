import { InputBox } from 'components';
import * as S from './styles';

interface Prop {
  setCondition: Function;
  condition: string;
}

export const Condition = ({ setCondition, condition }: Prop) => {
  const handleSelect = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setCondition(target.innerHTML);
    console.log(condition, target.innerHTML);
  };

  return (
    <InputBox name="condition" title="Condition">
      <S.Buttons>
        {['Never worn', 'Like New', 'Used'].map((button, i) => (
          <S.Button
            key={i}
            type="button"
            onClick={handleSelect}
            className={condition === button ? 'active' : ''}
          >
            {button}
          </S.Button>
        ))}
      </S.Buttons>
    </InputBox>
  );
};

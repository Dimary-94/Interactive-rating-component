import { FC } from 'react';
import * as S from './styled';
import { Props } from './types';
import logo from '../../images/illustration-thank-you.svg';

export const Contacts: FC<React.PropsWithChildren<Props>> = ({
  value,
}) => {
  return (
    <S.TextWrapper>
      <S.ImageBox>
        <img src={logo} className='thanks-img' alt='thanks' />
      </S.ImageBox>
      <span>{`You selected ${value} out of 5`}</span>
      <span>Thank you!</span>
      <span>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </span>
    </S.TextWrapper>
  );
};

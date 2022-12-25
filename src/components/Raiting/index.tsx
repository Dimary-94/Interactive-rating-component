import { FC, useState } from 'react';
import * as S from './styled';
import logo from '../../images/icon-star.svg';

export const Rating: FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <S.HeroWrapper>
      {/*Separate component*/}
      <S.ImageBox>
        <img src={logo} className='App-logo' alt='logo' />
      </S.ImageBox>

      {/*Separate component*/}
      <S.Text>
        <p>How did we do?</p>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </S.Text>
      {/*Separate component*/}
      <S.RatingButtons>
        {[...Array(5)].map((star, index) => {
          star = index += 1;
          return (
            <S.Button
              type='button'
              disabled={!!rating} // to delete disabled
              key={index}
              className={
                index === rating ? 'rating-button on' : 'rating-button off'
              }
              value={star}
              onClick={(e) => setRating(Number(e.currentTarget.value))}
            >
              {star}
            </S.Button>
          );
        })}
      </S.RatingButtons>

      {/*Separate component*/}
      <S.SubmitButton type='button' onClick={() => console.log('test')}>
        Submit
      </S.SubmitButton>
    </S.HeroWrapper>
  );
};

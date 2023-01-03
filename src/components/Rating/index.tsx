import { FC, useState } from 'react';
import * as S from './styled';
import logo from '../../images/icon-star.svg';
import { Description } from '../Description';
import ButtonAction from '../ButtonAction/ButtonAction';
import { useNavigate } from 'react-router-dom';

export const Rating: FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState<number | null>(null);

  const handleSubmit = () => {
    navigate('/feedback', { state: { rating: rating } });
  }

  return (
    <>
      <S.ImageBox>
        <img src={logo} className='App-logo' alt='logo' />
      </S.ImageBox>

      <Description />

      <S.RatingButtons>
        {[...Array(5)].map((star, index) => {
          star = index += 1;

          const handleClick = () => {
            if (rating === null) {
              setRating(index);
            } else if (rating === index) {
              setRating(null);
            }
          }

          return (
            <ButtonAction
              id={`rating-${index}`}
              text={String(index)}
              disabled={!!rating && rating !== index}
              className={index === rating ? 'rating-button on' : 'rating-button off'}
              handler={handleClick}
            />
          );
        })}
      </S.RatingButtons>

      <ButtonAction
        id={'submit'}
        text={'Submit'}
        disabled={rating === null}
        className={'submit-button'}
        handler={handleSubmit}
      />
    </>
  );
};

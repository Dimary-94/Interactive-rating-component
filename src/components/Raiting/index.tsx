import { FC, useEffect, useState } from "react";
import { Contacts } from "../Contacts";
import * as S from "./styled";
import logo from '../../images/icon-star.svg';

export const Rating: FC = () => {
  const [rating, setRating] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const [submit, setSubmit] = useState(rating);


  useEffect(() => {
    if (rating) {
      setDisabled(true);
    }
  }, [rating]);

  const handleClick = () => {
    setSubmit(currentValue => {
      return currentValue + rating
    });
  };

  console.log('rating', rating);
  console.log('submit', submit);
  return (
    <S.HeroWrapper>
      {submit === 0 ?
        <>
          <S.ImageBox>
            <img src={logo} className="App-logo" alt="logo" />
          </S.ImageBox>
          <S.Text>
            <p>How did we do?</p>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </S.Text>
          <S.RatingButtons>
            {[...Array(5)].map((star, index) => {
              star = index += 1;

              console.log('tester', rating);
              return (
                <S.Button
                  disabled={isDisabled && rating !== index && rating !== 0}
                  type="button"
                  key={index}
                  className={index === rating ? "rating-button on" : "rating-button off"}
                  onClick={() => setRating(index)}
                  onDoubleClick={() => {
                    setRating(0);
                  }}
                >
                  {star}
                </S.Button>
              );
            })}
          </S.RatingButtons>
          <S.SubmitButton
            type="button"
            onClick={handleClick}
            value={submit}
          >
            Submit
          </S.SubmitButton>
        </>
        :
        <Contacts value={submit} />
      }
    </S.HeroWrapper>
  );
};

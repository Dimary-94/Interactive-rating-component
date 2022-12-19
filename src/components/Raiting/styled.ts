import styled from '@emotion/styled';

type Disableable = Record<'disabled', boolean | undefined>;

export const RatingButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 35px;
`;

export const Button = styled.button<Disableable>`
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border: unset;
    border-radius: 50%;
    outline: unset;
    height: 65px;
    width: 65px;
    color: #ccc;

    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.3);
    }

    &.on {
      background-color: #FB7718;
      color: #fff;
    }

    ${({ disabled }) =>
    disabled &&
    `&.off {
      background-color: rgba(255, 255, 255, 0.3);
      color: #ccc;
    }
    `};
`;

export const SubmitButton = styled.button`
  display: block;
  font-size: 18px;
  text-transform: uppercase;
  background: #FB7718;
  color: #fff;
  cursor: pointer;
  border: 0px;
  border-radius: 30px;
  padding: 15px;
  width: 100%;

  &:hover {
    color: #FB7718;
    background: #fff;
    outline: 2px solid #FB7718;
  }
`;

export const HeroWrapper = styled.div`
  height: 500px;
  width: 500px;
  background: linear-gradient(to bottom, #192841 35%, #000000 100%);
  border-radius: 40px;
  padding: 40px 50px;
`;

export const Text = styled.div`
  p {
    font-size: 33px;
    font-weight: 700;
    color: #fff;

    &:last-of-type {
      font-size: 16px;
      line-height: 1.7;
      letter-spacing: 0.30px;
      color: #767676;
    }
  }
`;

export const ImageBox = styled('div')`
  background-color: rgba(255, 255, 255, 0.1);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
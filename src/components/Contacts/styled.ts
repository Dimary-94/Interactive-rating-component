import styled from '@emotion/styled';

export const TextWrapper = styled.div`
  display: grid;
  justify-content: center;
  color: #fff;

  span {
    text-align: center;

    &:nth-of-type(1) {
      display: flex;
      justify-self: center;
      max-width: fit-content;
      margin: 45px 0;
      font-size: 16px;
      background: rgba(255, 255, 255, 0.1);
      padding: 10px 20px;
      border-radius: 30px;
      color: #FB7718;
    }

    &:nth-of-type(2) {
      font-size: 36px;
    }

    &:nth-of-type(3) {
      margin: 20px 0;
      font-size: 16px;
      letter-spacing: 0.7px;
      line-height: 1.7;
      color: #767676;
    }
  }
`;

export const ImageBox = styled('div')`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .thanks-img {
    padding-top: 15px;
    height: 128px;
    width: 182px;
  }
`;
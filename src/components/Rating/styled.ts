import styled from '@emotion/styled';

export const RatingButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 35px;
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
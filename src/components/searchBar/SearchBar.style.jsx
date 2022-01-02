import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100px;
  padding: 0 20px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 50px;
  border-radius: 40px;
  background: var(--medGrey);
  color: var(--white);
  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    color: white;
    width: 95%;
    position: absolute;
    font-size: var(--fontBig);
    font-weight: bold;
    margin: 8px 0;
    left: 0;
    padding: 0 0 0 60px;
    height: 40px;
    background: transparent;
    border: transparent;

    :focus {
      outline: none;
    }
    @media screen and (max-width: 768px) {
      font-size: var(--fontMed);
    }
  }
`;

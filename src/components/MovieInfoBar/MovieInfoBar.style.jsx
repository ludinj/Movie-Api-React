import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: var(--darkGrey);
  min-height: 100px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;

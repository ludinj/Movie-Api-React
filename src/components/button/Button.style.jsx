import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--medGrey);
  width: 25%;
  height: 60px;
  min-width: 200px;
  border-radius: 30px;
  font-size: var(--fontBig);
  color: var(--white);
  margin: 20px auto;
  border: 0;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Content = styled.div``;

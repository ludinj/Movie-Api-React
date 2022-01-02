import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  max-width: 720px;
  object-fit: cover;
  animation: animatedTumb 0.9s;
  transition: all 0.2s;
  :hover {
    opacity: 0.8;
  }
  @keyframes animatedTumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

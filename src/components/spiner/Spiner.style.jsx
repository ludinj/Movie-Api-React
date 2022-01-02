import styled from "styled-components";

export const Spinner = styled.div`
  border: 0.4rem solid var(--lightGrey);
  border-top: 0.4rem solid var(--medGrey);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

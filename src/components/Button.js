import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: transparent;
  border: 0.15rem solid var(--darkBlue);
  border-radius: 0.8rem;
  font-weight: bold;
  margin: 0 3rem;
  padding: 0.6rem 1rem;
  &:hover {
    border: 0.15rem solid var(--white);
    transition: 0.3s ease;
  }
`;

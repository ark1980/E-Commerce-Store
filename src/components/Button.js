import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: ${props =>
    props.btnInDetailPage ? "var(--yellow)" : "transparent"};
  border: 0.15rem solid var(--darkBlue);
  border-radius: ${props => (props.btnInDetailPage ? "0.5rem" : "0.8rem")};
  font-weight: bold;
  color: var(--darkBlue);
  font-size: ${props => (props.btnInDetailPage ? "1.5rem" : "")};
  margin: ${props => (props.btnInDetailPage ? "0 1rem 0 0" : "0rem 2rem")};
  padding: ${props =>
    props.btnInDetailPage ? "1.2rem 2.3rem" : "0.6rem 1rem"};
  &:hover {
    background: ${props => (props.btnInDetailPage ? "transparent" : "")};
    transition: 0.6s ease;
  }
`;

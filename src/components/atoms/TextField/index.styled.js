import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid var(--dark-shade-25);
  border-radius: 4px;
  padding: 0 15px;

  font-size: 14px;
  line-height: 18px;
  color: var(--dark-shade-25);

  &::placeholder {
    color: var(--dark-shade-25);
  }

  &:hover,
  :focus,
  :active {
    outline: none;
    padding: 0 15px;
    border: 1px solid var(--dark-shade-50);
    font-size: 14px;
    line-height: 24px;
    color: var(--dark-shade-75);
  }
`;

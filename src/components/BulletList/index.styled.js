import styled from "styled-components";

export const Wrapper = styled.ul`
  padding-left: 20px;
`;
export const Item = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--dark-shade);
  opacity: 75%;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 7px;
    left: -20px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--dark-shade);
    opacity: 25%;
  }
`;

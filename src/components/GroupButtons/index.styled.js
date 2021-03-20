import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};

  & > :not(:last-child) {
    margin-right: ${(props) => (props.direction === "row" ? "10px" : 0)};
    margin-bottom: ${(props) => (props.direction === "column" ? "10px" : 0)};
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  padding: 40px 30px;

  border: 1px solid var(--border);
  border-radius: 4px;

  box-shadow: 0px 0px 25px var(--shadow);

  background-color: var(--white);
`;

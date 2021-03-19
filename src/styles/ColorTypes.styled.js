import styled from "styled-components";

export const Wrapper = styled.div``;
export const List = styled.ul``;
export const Item = styled.li`
  display: flex;
  margin-bottom: 20px;
`;
export const ColorPreview = styled.span`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
`;
export const ColorData = styled.div`
  margin: 7px 0 7px 40px;
`;

export const ColorName = styled.h2`
  font-size: 19px;
  line-height: 28px;
  font-weight: 700;
`;
export const ColorValue = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  line-height: 28px;
  font-weight: 400;
`;

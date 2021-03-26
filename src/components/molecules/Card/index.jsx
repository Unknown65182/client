import { Wrapper } from "./index.styled";

const Card = ({ children, width, height }) => {
  return (
    <Wrapper width={width} hidden={height}>
      {children}
    </Wrapper>
  );
};

export default Card;

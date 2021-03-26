import { Children } from "react";
import { Wrapper } from "./index.styled";

const GroupButtons = ({ children, direction }) => {
  const count = Children.count(children);
  return (
    <Wrapper direction={direction ?? "column"}>
      {count && count > 0 && Children.map(children, (child) => <>{child}</>)}
    </Wrapper>
  );
};

export default GroupButtons;

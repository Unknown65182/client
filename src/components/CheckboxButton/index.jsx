import { useState } from "react";
import { Wrapper, Icon, Label } from "./index.styled";

const CheckboxButton = ({ actived, label }) => {
  const [active, setActive] = useState(actived ?? false);
  const handleCheck = () => {
    setActive(!active);
  };
  return (
    <Wrapper>
      <Icon
        checked={active}
        type="checkbox"
        id="checkbox-button"
        onChange={() => handleCheck()}
      />
      <Label htmlFor="checkbox-button">{label}</Label>
    </Wrapper>
  );
};

export default CheckboxButton;

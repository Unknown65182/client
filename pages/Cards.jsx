import { Wrapper } from "../src/styles/Cards.styled";

import {
  SignIn,
  Card,
  TextField,
  LikeButton,
  CheckboxButton,
} from "../src/components";

const Cards = () => {
  return (
    <Wrapper>
      <h1>cards</h1>

      <SignIn />
    </Wrapper>
  );
};

export default Cards;

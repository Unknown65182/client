import { Card, TextField } from "../../index";
import { Form, Title, NotAccount } from "./index.styled";

const SignIn = () => {
  return (
    <Card width="380px" height="358px">
      <Form>
        <Title>Войти</Title>
        <TextField placeholder="Email" />
        <TextField placeholder="Пароль" />
        <button type="submit">ВОЙТИ</button>
      </Form>
      <NotAccount>
        <p>Нет аккаунта на Toxin?</p>
        <button>Создать</button>
      </NotAccount>
    </Card>
  );
};

export default SignIn;

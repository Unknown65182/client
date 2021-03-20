import Head from "next/head";
import Layout from "../src/layouts";
import {
  Wrapper,
  Row,
  Column,
  Component,
  Title,
  WrapperComponent,
} from "../src/styles/FormElements.styled";
import { ToggleButton, LikeButton, BulletList } from "../src/components";

const FormElements = () => {
  const list = [
    "Нельзя с питомцами",
    "Без вечеринок и мероприятий",
    "Время прибытия — после 13:00, а выезд до 12:00",
  ];
  return (
    <>
      <Head>
        <title>Toxin | FormElements</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Wrapper>
          <Row>
            <Column>1</Column>
            <Column>
              <Component>
                <Title>Toggle</Title>
                <ToggleButton actived label="Получать спецпредложения" />
                <ToggleButton label="Получать спецпредложения" />
              </Component>
              <Component>
                <Title>Like Button</Title>
                <WrapperComponent>
                  <LikeButton actived />
                  <LikeButton />
                </WrapperComponent>
              </Component>
            </Column>
            <Column>3</Column>
          </Row>
          <Row>
            <Column>4</Column>
            <Column>5</Column>
            <Column>6</Column>
          </Row>
          <Row>
            <Column>7</Column>
            <Column>8</Column>
            <Column>
              <Component>
                <Title>Bullet List</Title>
                <BulletList list={list} />
              </Component>
            </Column>
          </Row>
          <Row>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
          </Row>
        </Wrapper>
      </Layout>
    </>
  );
};

export default FormElements;

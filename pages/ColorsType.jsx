import Head from "next/head";
import Layout from "../src/layouts";
import {
  Wrapper,
  List,
  Item,
  ColorPreview,
  ColorData,
  ColorName,
  ColorValue,
} from "../src/styles/ColorTypes.styled";

const ColorsType = () => {
  return (
    <>
      <Head>
        <title>Toxin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Wrapper>
          <List>
            <Item>
              <ColorPreview color="#1f2041" opacity="100%" />
              <ColorData>
                <ColorName>Dark Shade 100%</ColorName>
                <ColorValue>#1F2041</ColorValue>
              </ColorData>
            </Item>
            <Item>
              <ColorPreview color="#1f2041" opacity="75%" />
              <ColorData>
                <ColorName>Dark Shade 75%</ColorName>
                <ColorValue>#1F2041</ColorValue>
              </ColorData>
            </Item>
          </List>
          <List></List>
        </Wrapper>
      </Layout>
    </>
  );
};

export default ColorsType;

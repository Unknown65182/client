import { useState, useEffect } from "react";

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
  // Get Colors
  const [colors, setColors] = useState([]);
  useEffect(async () => {
    const c = await fetch("/data/colors.json")
      .then((res) => res.json())
      .then((data) => setColors(data.colors));
  }, []);

  return (
    <>
      <Head>
        <title>Toxin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Wrapper>
          <List>
            {colors &&
              colors.map((color, index) => (
                <Item key={`${color.name}_${index}`}>
                  <ColorPreview color={color.value} opacity={color.opacity} />
                  <ColorData>
                    <ColorName>{color.name}</ColorName>
                    <ColorValue>{color.value}</ColorValue>
                  </ColorData>
                </Item>
              ))}
          </List>
          <List></List>
        </Wrapper>
      </Layout>
    </>
  );
};

export default ColorsType;

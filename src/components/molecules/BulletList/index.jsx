import { Wrapper, Item } from "./index.styled";

const BulletList = ({ list }) => {
  return (
    <Wrapper>
      {list &&
        list.map((item, index) => (
          <Item key={`${item.lehgth}_${index}`}>{item}</Item>
        ))}
    </Wrapper>
  );
};

export default BulletList;

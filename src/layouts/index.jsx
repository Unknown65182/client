import { Wrapper, Content } from "./index.styled";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Image src="/assets/icons/logo.svg" width={48} height={48} />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

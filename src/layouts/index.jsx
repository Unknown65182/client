import { Wrapper, Content } from "./index.styled";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Link href="/">
        <img src="/assets/icons/logo.svg" width={48} height={48} alt="logo" />
      </Link>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

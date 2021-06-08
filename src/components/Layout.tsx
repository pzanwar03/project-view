import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const MainArea = styled.main``;

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <ScrollToTop />
      <Header page={children.props.location.pathname} />
      <MainArea>{children}</MainArea>
      <Footer />
    </div>
  );
};

export default Layout;

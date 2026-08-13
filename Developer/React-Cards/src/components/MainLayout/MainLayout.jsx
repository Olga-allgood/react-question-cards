
import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

const { Content, Footer } = Layout;

const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />

      <Content style={{ padding: "24px" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        React Question Cards | {currentYear}
      </Footer>
    </Layout>
  );
};

export default MainLayout;

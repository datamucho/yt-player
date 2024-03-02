import { Outlet } from "react-router-dom";
import Search from "./components/Search";

const Layout = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};

export default Layout;

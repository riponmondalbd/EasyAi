import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h2>layout</h2>
      <Outlet />
    </div>
  );
};

export default Layout;

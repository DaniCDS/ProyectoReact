import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => {
            return <Route key={id} path={path} element={<Element />} />;
          })}
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default AppRouter;

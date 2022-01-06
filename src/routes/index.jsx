import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import View from "../views";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<View />} />
      </Route>
    </Routes>
  );
};

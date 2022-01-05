import { Routes, Route } from "react-router-dom";
import Layout from "../layout";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Hello world</h1>} />
      </Route>
    </Routes>
  );
};

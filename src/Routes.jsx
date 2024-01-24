import { Route, Routes } from "react-router-dom";
import ToDoCategory from "./pages/ToDoCategory";
import Welcome from "./pages/Welcome";

function RoutesDir() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/todo/:cat_id" element={<ToDoCategory />} />
    </Routes>
  );
}

export default RoutesDir;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import AddFoot from "./pages/AddFoot";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/add" element={<MainLayout/>}>
      index
      </Route> */}
      <Route path="/add" element={<AddFoot />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default App;

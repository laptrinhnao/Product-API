import "./App.css";
import { Menu } from "antd";
import {
  DatabaseOutlined,
  HomeOutlined,
  PoweroffOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produces from "./pages/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Read from "./pages/Read";
import Carts from "./pages/Carts";

function App() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Menu
        style={{ display: "flex", flexDirection: "column" }}
        onClick={({ key }) => {
          if (key === "signout") {
          } else {
            navigate(key);
          }
        }}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          { label: "Product", key: "/products", icon: <ProductOutlined /> },
          { label: "Category", key: "/category", icon: <DatabaseOutlined /> },
          { label: "Carts", key: "/carts", icon: <DatabaseOutlined /> },
          {
            label: "Signout",
            key: "signout",
            icon: <PoweroffOutlined />,
            danger: true,
          },
        ]}
      ></Menu>
      {/* <Menu mode="vertical">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="products" icon={<ProductOutlined />}>
          <Link to="/products">Product</Link>
        </Menu.Item>
        <Menu.Item key="category" icon={<DatabaseOutlined />}>
          <Link to="/category">Category</Link>
        </Menu.Item>
        <Menu.Item key="login" icon={<PoweroffOutlined />}>
          <Link to="/login">Signout</Link>
        </Menu.Item>
      </Menu> */}
      <Content />
    </div>
  );
}
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Produces />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>

        {/* <Route path="/carts" element={<Carts />}></Route> */}
      </Routes>
    </div>
  );
}
export default App;

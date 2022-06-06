import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";

import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
function App() {
  return (
    <Router className="App">
        <Routes>
        <Route path="/login" element={<Login />} />
      <Topbar />
      <div className="container">
        <Sidebar />
          <Route path="/users" element={<UserList />} />
         
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/productEdit/:userId" element={<Product />} />
          <Route exact path="/newproduct" element={<NewProduct />} />
          <Route exact path="/" element={<Home />} />
      </div>
        </Routes>
    </Router>
  );
}

export default App;

import React,{Fragment} from "react";
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
  const admin=const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.
  return (
    <Router>
    {
      <>
    <Topbar/>
     <div className="container">
      <Sidebar />
      <Routes>
      <Route path="/login" element={<Login />}/>
            <Route exact path="/" element={<Home />}/>
            <Route path="/users" element={<UserList />}/>
            <Route path="/user/:userId" element={<User />}/>
            <Route path="/newUser" element={<NewUser />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/product/:productId" element={<Product />}/>
            <Route path="/newproduct" element={<NewProduct />}/>
    </Routes>
      </div>
      </>
      }
 
  </Router>

  );
}

export default App;

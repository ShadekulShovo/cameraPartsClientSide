import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/ProductsServices/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import Users from "./Pages/Dashboard/Users";
import Payment from "./Pages/Dashboard/Payment";
import AddService from "./Pages/Dashboard/AddService";
import ManageServices from "./Pages/Dashboard/ManageServices";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myPortfolio" element={<MyPortfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="/purchase/:serviceId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="addservice" element={<AddService></AddService>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="updateProfile/:serviceId"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route
            path="manageServices"
            element={<ManageServices></ManageServices>}
          ></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

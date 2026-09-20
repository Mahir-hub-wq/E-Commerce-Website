import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Rating from "./components/Rating";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import CartList from "./pages/CartList";
import Layout from "./Layout";
import SignUp from "./components/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const Categories = lazy(() => import("./pages/Categories"));

function App() {
  // const [data, setdata] = useState(0)

  // const fetchData =  async() => {
  //   const res = await getData();
  //   setdata(res.data)
  //   console.log(res.data)
  // }

  // useEffect(  () => {
  //   fetchData()
  // },[] )

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/cartList" element={<CartList />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/verify" element={<VerifyEmail />}></Route>
              <Route path="/login" element={<Login />}></Route>

            </Route>
          </Routes>
        </Suspense>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

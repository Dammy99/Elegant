import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import style from "./app/style.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./app/reducers/counterSlice";
import Home from "./components/Home/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  // const countere = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Outlet />}>
          <Route index element={<Header />}></Route>
        </Route> */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
// import style from "./app/style.module.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";
import Price from "./components/Price/Price";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/price/:pricesPage" element={<Price />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

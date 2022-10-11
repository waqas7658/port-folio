import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import { Routes, Route,  } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



function App() {
  return (
     <>
     <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/contact" element={<Contact/>} />

      </Routes>

        <Footer/>


     </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Demo from "./Routes/Demo";
import GetStart from "./Routes/GetStart";
import Hiring from "./Routes/Hiring";
import Login from "./Routes/Login";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/hiring" element={<Navbar />} />
        <Route path="/demo" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/getstart" element={<GetStart />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/hiring" element={<Footer />} />
        <Route path="/demo" element={<Footer />} />
      </Routes>
    </div>
  );
  
}

export default App;
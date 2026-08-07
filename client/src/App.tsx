import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Appbar from "./pages/Appbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

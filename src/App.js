import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Error404 from "./pages/error404";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Profile />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

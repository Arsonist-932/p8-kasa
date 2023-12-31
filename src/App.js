import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Housing from "./pages/Housing";
import Error404 from "./pages/error404";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Housing />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

{
  /* src/App.jsx */
}
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </BrowserRouter>
  );
}

export default App;

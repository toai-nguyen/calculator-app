import "./css/App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Calculator from "./Pages/Calculator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
          {/* <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

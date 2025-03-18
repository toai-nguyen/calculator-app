import 'bootstrap/dist/css/bootstrap.css';
import "./css/App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Calculator from "./Pages/Calculator";
import * as math from "mathjs";
function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

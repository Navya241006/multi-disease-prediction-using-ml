import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diabetes from "./pages/Diabetes";
import Heart from "./pages/Heart";
import Kidney from "./pages/Kidney";
import Parkinsons from "./pages/Parkinsons";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/heart" element={<Heart />} />
<Route path="/kidney" element={<Kidney />} />
<Route path="/parkinsons" element={<Parkinsons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
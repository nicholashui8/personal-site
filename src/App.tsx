import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Bara } from "./Bara";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bara" element={<Bara />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

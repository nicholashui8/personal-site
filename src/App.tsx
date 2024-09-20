import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Bara } from "./Bara";
import { Capybara } from "./Capybara";
import { Dog } from "./Dog";
import { Projects } from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bara" element={<Bara />}/>
        <Route path="/capybara" element={<Capybara />}/>
        <Route path="/dog" element={<Dog />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="*" element={<Navigate to='/' replace />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

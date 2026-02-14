import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ProjectPage from "./Project";
import NotFound from "./404";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}


export default App;

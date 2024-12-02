import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Editor from "./pages/Editor";
import Preview from "./pages/Preview";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <Routes>
        <Route path="/editor" element={<Editor />}></Route>
        <Route path="/preview" element={<Preview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

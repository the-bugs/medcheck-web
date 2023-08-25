import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Root from "./pages/Root";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}/>
          <Route path="home"  element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Root from "./pages/Root";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UiComponents from "./pages/UiComponents";
import ProtectedRoute from './utils/ProtectedRoute';
import GlobalContext from "./contexts";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
            <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/uicomponents" element={<ProtectedRoute><UiComponents /></ProtectedRoute>} />
          </Route>
        </Routes>
      </GlobalContext>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;

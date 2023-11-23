import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Root from "./pages/Root";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UiComponents from "./pages/UiComponents";
import ProtectedRoute from "./utils/ProtectedRoute";
import GlobalContext from "./contexts";
import { Toaster } from "react-hot-toast";
import DoctorFound from "./pages/DoctorFound";
import Medicos from "./pages/Medicos";
import SpecialtiesMenuPage from "./pages/SpecialtiesMenuPage";
function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/uicomponents"
              element={
                <ProtectedRoute>
                  <UiComponents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/medicos/especialidades/:id"
              element={<DoctorFound />}
            />
            <Route path="/medicos" element={<Medicos />} />
            <Route
              path="/menu/especialidades"
              element={<SpecialtiesMenuPage />}
            />
            {/* Seria bom add essa pg */}
            <Route
              path="*"
              element={<h1 className="mx-auto w-screen h-32 text-3xl">404</h1>}
            />
          </Route>
        </Routes>
      </GlobalContext>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;

import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { AuthContext } from "../contexts/AuthContext";
import DoctorSearch from "../components/DoctorSearch";
import AdminMenu from "../components/SpecialtiesMenuLink";

function Home(): JSX.Element {
  const authContext = useContext(AuthContext);

  return (
    <>
      {!authContext?.user && <HeroSection />}
      {authContext?.user?.tipo === "Administrador" && <AdminMenu />}
      <DoctorSearch />
    </>
  );
}

export default Home;

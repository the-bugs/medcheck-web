import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { AuthContext } from "../contexts/AuthContext";
import DoctorSearch from "../components/DoctorSearch";

function Home(): JSX.Element {
  const authContext = useContext(AuthContext);

  return (
    <>
      {!authContext?.user && <HeroSection />}
      <DoctorSearch />
    </>
  );
}

export default Home;

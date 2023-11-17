import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { AuthContext } from "../contexts/AuthContext";

function Home(): JSX.Element {
  const authContext = useContext(AuthContext);

  return <>{!authContext?.user && <HeroSection />} </>;
}

export default Home;

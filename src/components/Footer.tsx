import { Link } from "react-router-dom";
import logoFinal from "../assets/imgs/MEDICALCHECKLOGO.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#1373b323] flex justify-center py-[5.6rem] gap-10 lg:gap-20 lg:flex-row flex-col items-center lg:items-start relative">
      <div>
        <Link to="/">
          <img src={logoFinal} alt="header img" width="80px" className="ml-4" />
        </Link>
      </div>
      <div className="flex gap-10 lg:flex-row lg:gap-[11rem] flex-col lg:items-start items-center">
        <div className="flex flex-col gap-6 lg:items-start items-center">
          <h2>Ajuda</h2>
        </div>
        <div className="flex flex-col gap-6 lg:items-start items-center">
          <h2>Empresa</h2>
          <p className="text-sm">Sobre nós</p>
          <p className="text-sm">Carreira</p>
        </div>
        <div className="flex flex-col gap-6 lg:items-start items-center">
          <h2>Contato</h2>
          <p className="text-sm">contato@medcheck.com</p>
          <p className="text-sm">(71) 40002-8922</p>
          <p className="text-sm">
            Av. Milton Santos, s/nº - Ondina, Salvador, Bahia
          </p>
        </div>
      </div>
      <p className="absolute bottom-10 lg:left-20 text-center text-xs text-[#2B353EB2]">© Copyright Medical Check Inc.</p>
    </footer>
  );
}

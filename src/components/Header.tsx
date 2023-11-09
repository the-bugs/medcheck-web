import { Link } from "react-router-dom";
import logoFinal from "../assets/imgs/MEDICALCHECKLOGO.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./ui/ButtonComponent";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavClasses = `sm:hidden flex justify-between mt-8 mb-8 z-10 ${
    isOpen ? "fixed mt-0 mb-0" : ""
  }`;
  function handleOpenMenu(): void {
    setIsOpen(!isOpen);
  }
  function handleCloseMenu(): void {
    setIsOpen(false);
  }

  return (
    <header>
      {/* unopened mobile navbar */}
      <nav className={mobileNavClasses}>
        {!isOpen && (
          <>
            <Link to="/">
              <img
                src={logoFinal}
                alt="header img"
                width="80px"
                className="ml-4"
              />
            </Link>
            <button onClick={handleOpenMenu} className="mr-4 text-xl">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </>
        )}
        {/* opened mobile navbar */}
        {isOpen && (
          <>
            <button
              className="absolute top-0 right-0 mr-4 mt-4 text-2xl z-20"
              onClick={handleCloseMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="flex flex-col h-screen w-screen items-center bg-white justify-center scale-105">
              <li className="my-4">
                <Link to="/login" onClick={handleCloseMenu}>
                  Login
                </Link>
              </li>
              <li className="my-4">
                <Link to="/signup" onClick={handleCloseMenu}>
                  Cadastrar
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>

      {/* desktop nav*/}
      <nav className="hidden sm:block py-2">
        <ul className="flex flex-row justify-around items-center mr-11 text-opacity-90">
          <Link to="/">
            <img
              src={logoFinal}
              alt="header img"
              width="80px"
              className="hover:scale-105"
            />
          </Link>
          <li className="bg-opacity-0">
            <ButtonComponent variant={"third"}>
              <Link to="/login">Login</Link>
            </ButtonComponent>
            <ButtonComponent variant={"primary"} className="w-32 opacity-90">
              <Link to="/signup">Cadastrar</Link>
            </ButtonComponent>
          </li>
        </ul>
      </nav>
    </header>
  );
}

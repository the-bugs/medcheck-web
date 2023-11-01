import { Link } from "react-router-dom";
import logo from "../assets/imgs/details.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavClasses = `sm:hidden flex justify-between ${
    isOpen ? "fixed" : ""
  }`;
  function handleOpenMenu(): void {
    setIsOpen(!isOpen);
  }
  function handleCloseMenu(): void {
    setIsOpen(false);
  }

  return (
    <header className="z-50">
      {/* mobile navbar */}
      <nav className={mobileNavClasses}>
        {!isOpen && (
          <>
            <Link to="/">
              <img src={logo} alt="header img" width="60px" className="ml-4" />
            </Link>
            <button onClick={handleOpenMenu} className="mr-4 text-xl">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </>
        )}

        {isOpen && (
          <>
            <button
              className="absolute top-0 right-0 mr-4 mt-4 text-2xl z-10"
              onClick={handleCloseMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="flex flex-col h-screen w-screen items-center bg-white justify-center scale-105">
              <li className="my-4">
                <Link to="/exams" onClick={handleCloseMenu} className="">
                  Exames
                </Link>
              </li>
              <li className="my-4">
                <Link to="/contact" onClick={handleCloseMenu}>
                  Contato
                </Link>
              </li>
              <li className="my-4">
                <Link to="/login" onClick={handleCloseMenu}>
                  Login
                </Link>
              </li>
              <li className="my-4">
                <Link to="/signup" onClick={handleCloseMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>

      {/* desktop nav*/}
      <nav className="hidden sm:block">
        <ul className="flex flex-row justify-around items-center mr-11 text-lg">
          <Link to="/">
            <img
              src={logo}
              alt="header img"
              width="70px"
              className="hover:scale-105"
            />
          </Link>
          <li>
            <Link
              to="/exams"
              className="hover:font-semibold  hover:text-blue-900"
            >
              Exames
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:font-semibold hover:text-blue-900"
            >
              Contato
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/login"
              className="hover:font-semibold mr-2 pr-2  hover:text-blue-900"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-2 hover:font-semibold  hover:text-blue-900"
            >
              Sign Up
            </Link>
            <div className="absolute h-full w-0.5 bg-black left-14 top-0 group-hover:bg-blue-500 transition duration-300"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

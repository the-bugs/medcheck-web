import { Link } from "react-router-dom";
import logo from "../assets/imgs/details.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }
  function handleCloseMenu(){
    setIsOpen(false);
  }
  return (
    <header>
      {/* mobile navbar */}
      <nav className="sm:hidden flex justify-between">
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
                className="absolute top-0 right-0 mr-4 mt-4 text-2xl"
                onClick={() => handleOpenMenu()}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            <ul className="flex flex-col h-screen w-screen items-center justify-center">
              <li className="my-4">
                <Link to="/exams" onClick={handleCloseMenu}>Exames</Link>
              </li>
              <li className="my-4">
                <Link to="/contact" onClick={handleCloseMenu}>Contato</Link>
              </li>
              <li className="my-4">
                <Link to="/login" onClick={handleCloseMenu}>Login</Link>
              </li>
              <li className="my-4">
                <Link to="/signup" onClick={handleCloseMenu}>Sign Up</Link>
              </li>
            </ul>
          </>
        )}
      </nav>
      {/* desktop nav*/}
      <nav className="hidden sm:block">
        <ul className=" flex flex-row justify-around items-center mr-11">
          <Link to="/">
            <img src={logo} alt="header img" width="60px" />
          </Link>
          <li>
            <Link to="/exams">Exames</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

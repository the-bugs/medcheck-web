import { Link } from "react-router-dom";
import logo from '../assets/imgs/details.png';

export default function Header() {
  return (
      <nav className="">

        <ul className="flex flex-row justify-around items-center mr-11">
        <Link to="/">
        <img src={logo} alt="header img" width="60px" />
        </Link>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/exams">Exames</Link>
          </li>     
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
  );
}

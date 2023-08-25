import { Link } from "react-router-dom";

export default function Header() {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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

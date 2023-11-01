import "./login.css";
import ButtonComponent from "../components/ui/ButtonComponent";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <section id="login">
      <div className="forms">
        <h2 className="Login">Login</h2>
        <form action="adefinir" method="post">
          <label>Nome de Usuário:</label>
          <input
            placeholder="Seu usuário"
            className="input"
            type="text"
            id="nome"
            name="nome"
            required
          />

          <label>Senha:</label>
          <input
            placeholder="Sua senha"
            className="input"
            type="text"
            id="empresa"
            name="empresa"
          />
          <Link to="../forgetPassword">
            <p className="forgotPassword">esqueceu sua senha?</p>
          </Link>

          <ButtonComponent
            className="w-full md:w-40 mt-4"
            variant={"secondary"}
            type="submit">
            Enviar
          </ButtonComponent>
        </form>
      </div>
    </section>
  );
}

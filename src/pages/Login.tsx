import ButtonComponent from "../components/ui/ButtonComponent";
import { Link } from "react-router-dom";
import techman from "../assets/imgs/techman.png";
export default function Login() {
  return (
    <section id="login" className="flex items-end justify-center lg:gap-[10rem] gap-0 mt-6">
      <div>
        <img src={techman} alt="techman" className="lg:flex hidden"/>
      </div>
      <div className="forms">
        <div className="mb-[34px]">
          <h2 className="text-[32px]">Bem vindo (a) de volta!</h2>
          <p className="text-[16px]">Insira seus dados</p>
        </div>
        <form action="adefinir" method="post">
          <div className="flex flex-col gap-[16px] mb-[32px]">
            <label className="text-[24px]">Digite seu email</label>
            <input
              placeholder="email"
              className="input h-[30px] border border-[#BBC8D4] p-2" 
              type="text"
              id="nome"
              name="nome"
              required
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <label className="text-[24px]">Digite sua senha</label>
            <input
              placeholder="senha"
              className="input h-[30px] border border-[#BBC8D4] p-2"
              type="text"
              id="empresa"
              name="empresa"
            />
          </div>
          <Link to="../forgetPassword">
            <p className="text-[16px] mb-[44px] mt-[16px]">Esqueceu sua senha?</p>
          </Link>

          <div className="mb-[2.7rem]">
            <ButtonComponent
              className="w-full md:w-40 mt-4"
              variant={"third"}
              type="submit">
              Cadastrar
            </ButtonComponent>
            <ButtonComponent
              className="w-full md:w-40 mt-4"
              variant={"secondary"}
              type="submit">
              Login
            </ButtonComponent>
          </div>
        </form>
      </div>
    </section>
  );
}

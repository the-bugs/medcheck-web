import { Link } from "react-router-dom";
import UserRegisterForm from "../components/UserRegisterForm";
import ButtonComponent from "../components/ui/ButtonComponent";
import { useState } from "react";
import formImg1 from "../assets/imgs/form_img.jpg";
import formImg2 from "../assets/imgs/aleatoria1.jpg";
export default function SignUp() {
  const [isPaciente, setIsPaciente] = useState(false);
  const [isMedico, setIsMedico] = useState(false);

  function handlePaciente() {
    setIsPaciente(true);
    setIsMedico(false);
  }

  function handleMedico() {
    setIsMedico(true);
    setIsPaciente(false);
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="hidden sm:block w-1/2">
        <img
          src={formImg1}
          alt="exame sendo feito"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {!isPaciente && !isMedico && (
        <div className="acesso w-full flex flex-col items-center ">
          <img
            src={formImg2}
            alt=""
            className="sm:hidden w-full rounded h-2/3"
          />
          <h2 className="text-4xl font-semibold mt-10 text-gray-800 ">
            Crie sua conta
          </h2>
          <span className="font-semibold text-sm text-gray-500 mt-2 ">
            já é cadastrado?
            <Link to="/login" className="text-mediumDarkBlue ml-1">
              Entre
            </Link>
          </span>
          <h2 className="my-5">Desejo me cadastrar como</h2>
          <div className="buttons flex">
            <ButtonComponent className="mt-2 w-2/4" onClick={handlePaciente}>
              Paciente
            </ButtonComponent>
            <ButtonComponent
              className="mt-2 w-2/4"
              onClick={handleMedico}
              variant={"third"}
            >
              Médico
            </ButtonComponent>
          </div>
        </div>
      )}
      {isPaciente && (
        <div className="flex justify-center md:w-1/2">
          <UserRegisterForm />
        </div>
      )}
      {isMedico && (
        <div className="flex justify-center">
          <UserRegisterForm />
        </div>
      )}
    </div>
  );
}

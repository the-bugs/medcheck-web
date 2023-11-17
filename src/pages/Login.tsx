import React, { useContext } from "react";
import ButtonComponent from "../components/ui/ButtonComponent";
import { Link } from "react-router-dom";
import loginIMG from "../assets/imgs/loginIMG.png";

import { AuthContext } from "../contexts/AuthContext"; // Replace with the actual path to your AuthContext file
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type User = {
  email: string;
  senha: string;
};

export default function Login() {
  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data: User) => {
    try {
      if (authContext) {
        authContext.login(data.email, data.senha);
      }
    } catch (error: any) {
      toast.error(
        `Erro ao fazer login! : ${error.response && error.response.data}`,
        {
          duration: 2500,
          position: "bottom-right",
        }
      );
    }
  };

  return (
    <section
      id="login"
      className="flex justify-center mt-6 lg:w-9/12 items-center lg:mx-auto"
    >
      <img
        src={loginIMG}
        alt="techman"
        className="lg:block hidden mr-8 scale-90"
      />
      <form
        className="w-full lg:w-2/3 p-2 md:p-0 text-textColor first-letter:text-opacity-90 max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl">Bem vindo (a) de volta!</h2>
        <p className="text-base">Insira seus dados</p>
        <div className="flex flex-col mt-14">
          <label className="text-2xl" htmlFor="email">
            Digite seu email
          </label>
          <input
            placeholder="nome@email.com"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-gray-600 block w-full p-2.5 mt-4"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
          <label className="text-2xl mt-4" htmlFor="senha">
            Digite sua senha
          </label>
          <input
            placeholder="Senha"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4"
            type="password"
            {...register("senha", { required: true })}
          />
          {errors.senha && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
        </div>
        <Link to="../forgetPassword">
          <p className="text-base mt-4 text-primaryBlue">Esqueceu sua senha?</p>
        </Link>

        <div className="flex">
          <Link to="/signup">
            <ButtonComponent
              className="w-full md:w-36 mt-4 rounded-md border-2 border-primaryGreen"
              variant={"primary"}
              type="button"
            >
              Cadastrar
            </ButtonComponent>
          </Link>
          <ButtonComponent
            className="w-full md:w-36 mt-4 rounded border-2 border-primaryBlue"
            variant={"secondary"}
            type="submit"
          >
            Login
          </ButtonComponent>
        </div>
      </form>
    </section>
  );
}

import React, { useContext, useState } from "react";
import ButtonComponent from "../components/ui/ButtonComponent";
import { Link } from "react-router-dom";
import loginIMG from "../assets/imgs/loginIMG.png";

import { AuthContext } from "../contexts/AuthContext"; // Replace with the actual path to your AuthContext file

type User = {
  nome: string;
  email: string;
  password: string;
  tipo: string;
};

export default function Login() {
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState<User>({
    nome: "",
    email: "",
    password: "",
    tipo: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      if (authContext) {
        await authContext.login(formData);
      }
    } catch (error) {
      setError("Email ou senha inválidos");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <h2 className="text-3xl">Bem vindo (a) de volta!</h2>
        <p className="text-base">Insira seus dados</p>
        <div className="flex flex-col mt-14">
          <label className="text-2xl">Digite seu email</label>
          <input
            name="email"
            placeholder="Email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-gray-600 block w-full p-2.5 mt-4"
            type="text"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <label className="text-2xl mt-4">Digite sua senha</label>
          <input
            name="password"
            placeholder="Senha"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4"
            type="password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <Link to="../forgetPassword">
          <p className="text-base mt-4 text-primaryBlue">Esqueceu sua senha?</p>
        </Link>

        <div className="flex">
          <ButtonComponent
            className="w-full md:w-36 mt-4 rounded-md border-2 border-primaryGreen"
            variant={"primary"}
            type="submit"
            disabled={isSubmitting}
          >
            Cadastrar
          </ButtonComponent>
          <ButtonComponent
            className="w-full md:w-36 mt-4 rounded border-2 border-primaryBlue"
            variant={"secondary"}
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </ButtonComponent>
        </div>
      </form>
    </section>
  );
}

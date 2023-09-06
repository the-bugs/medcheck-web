import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ButtonComponent from "../components/ui/ButtonComponent";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface FormData {
  nome: string;
  email: string;
  senha: string;
}

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data, e) => {
    axios
      .post("http://localhost:3001/usuarios", data)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso!", {
          duration: 2500,
          position: "bottom-right",
        });
        console.log(response);
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar usuário!", {
          duration: 2500,
          position: "bottom-right",
        });
        console.log(error);
      });
    e?.preventDefault();
  };

  return (
    <form
      className="rounded px-8 pt-6 pb-8 mb-4 md:w-full md:flex md:flex-col md:items-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold mb-6">Cadastro</h2>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="nome"
      >
        Nome
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Seu Nome"
        {...register("nome", { required: true })}
      />
      {errors.nome && (
        <span className="text-red-500 text-sm">Campo obrigatório</span>
      )}
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        placeholder="Seu Email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">Campo obrigatório</span>
      )}
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="senha"
      >
        Senha
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="Sua Senha"
        {...register("senha", { required: true })}
      />
      {errors.senha && (
        <span className="text-red-500 text-sm">Campo obrigatório</span>
      )}
      <ButtonComponent
        className="w-full md:w-40 mt-4"
        variant={"secondary"}
        type="submit"
      >
        Cadastrar
      </ButtonComponent>
    </form>
  );
}

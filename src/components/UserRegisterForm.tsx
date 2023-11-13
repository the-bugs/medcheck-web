import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ButtonComponent from "./ui/ButtonComponent";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface FormData {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  sexo: string;
  dataNascimento: Date;
}

export default function RegisterForm(props: { type: string }) {
  // Adicionar navigate quando o usuário for cadastrado com sucesso
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    axios
      .post("http://localhost:3001/pacientes", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type",
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso!", {
          duration: 2500,
          position: "bottom-right",
        });
        navigate("/home");
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(`Erro ao cadastrar usuário! : ${error.response.data}`, {
          duration: 2500,
          position: "bottom-right",
        });
      });
  };

  return (
    <form
      className="pt-6 mb-4 w-full md:flex md:flex-col md:items-center md:justify-center h-screen px-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="nome md:w-1/2">
        <label className="block text-gray-700 mb-2" htmlFor="nome">
          Seu nome
        </label>
        <input
          className=" appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-mediumDarkBlue focus:shadow-outline"
          type="text"
          placeholder="Nome"
          {...register("nome", { required: true })}
        />
        {errors.nome && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>
      <div className="email my-6 md:w-1/2">
        <label className="text-gray-700 my-4" htmlFor="email">
          Seu email
        </label>
        <input
          className=" appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-mediumDarkBlue focus:shadow-outline"
          type="email"
          placeholder="nome@email.com"
          required
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>
      {props.type === "paciente" && (
        <div className="cpf mb-4 md:w-1/2">
          <label className=" text-gray-700 my-4" htmlFor="cpf">
            Seu CPF
          </label>
          <input
            className="appearance-none border-b-2  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-mediumDarkBlue focus:shadow-outline"
            type="text"
            placeholder="CPF"
            {...register("cpf", { required: true })}
          />

          {errors.senha && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
        </div>
      )}
      {props.type === "paciente" && (
        <div className="sexo mb-4 md:w-1/2">
          <label className=" text-gray-700 my-4" htmlFor="sexo">
            Sexo
          </label>
          <input
            className="appearance-none border-b-2  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-mediumDarkBlue focus:shadow-outline"
            type="text"
            placeholder="sexo"
            {...register("sexo", { required: true })}
          />

          {errors.senha && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
        </div>
      )}
      {props.type === "paciente" && (
        <div className="dataNascimento mb-4 md:w-1/2">
          <label className=" text-gray-700 my-4" htmlFor="dataNascimento">
            Data de Nascimento
          </label>
          <input
            className="appearance-none border-b-2  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-mediumDarkBlue focus:shadow-outline"
            type="date"
            placeholder="data de nascimento"
            {...register("dataNascimento", { required: true })}
          />

          {errors.senha && (
            <span className="text-red-500 text-sm">Campo obrigatório</span>
          )}
        </div>
      )}
      <div className="senha mb-4 md:w-1/2">
        <label className=" text-gray-700 my-4" htmlFor="senha">
          Sua senha
        </label>
        <input
          className="appearance-none border-b-2  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-mediumDarkBlue focus:shadow-outline"
          type="password"
          placeholder="Senha"
          {...register("senha", { required: true })}
        />

        {errors.senha && (
          <span className="text-red-500 text-sm">Campo obrigatório</span>
        )}
      </div>
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

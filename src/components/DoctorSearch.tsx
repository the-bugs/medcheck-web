import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import mobileIMG from "../assets/imgs/mobile_DoctorSearch.png";
import desktopIMG from "../assets/imgs/desktop_DoctorSearch.png";
import ButtonComponent from "./ui/ButtonComponent";

interface FormData {
  searchTerm: string;
}

interface Specialty {
  id: number;
  name: string;
}

export default function DoctorSearch(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  useEffect(() => {
    async function getSpecialties(): Promise<void> {
      try {
        const response = await axios.get(
          `http://localhost:3001/especialidades`
        );

        const specialtiesData: Specialty[] = response.data.map((item: any) => ({
          id: item.id,
          name: item.nome,
        }));

        setSpecialties(specialtiesData);
      } catch (error) {
        console.error("Erro na solicitação de especialidades:", error);
      }
    }
    getSpecialties();
  }, []);

  const onSubmit: SubmitHandler<FormData> = async ({ searchTerm }) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/especialidades/`,
        {
          params: { searchTerm },
        }
      );
      // Faça algo com a resposta (response.data) aqui
      console.log(response.data);
    } catch (error) {
      // Lide com erros de solicitação aqui
      console.error("Erro na solicitação:", error);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-col justify-center h-[500px]">
      <div className="absolute -z-10 inset-0">
        {/* Versão mobile */}
        <img
          src={mobileIMG}
          className="w-full h-full object-cover md:hidden"
          alt=""
        />
        {/* Versão desktop */}
        <img
          src={desktopIMG}
          className="w-full h-full object-cover hidden md:block"
          alt="search img"
        />
      </div>

      <div className="relative md:ml-80 z-10 bg-opacity-50 bg-gray-600 rounded-md max-w-3xl pt-2 p-2 md:p-4">
        <h1 className="text-4xl md:text-5xl font-semibold  text-white mb-4 ">
          Agende agora sua consulta
        </h1>
        <p className="text-white w-full font-light tracking-wide	">
          Diversas especialidades médicas disponíveis para marcação. Selecione o
          profissional que mais se aplica às suas necessidades!
        </p>
      </div>
      <form
        className="flex md:ml-80 flex-col w-full  md:flex-row p-2"
        onChange={handleSubmit(onSubmit)}
      >
        <select
          {...register("searchTerm")}
          className={`w-full h-12 px-2 mt-4 border-2 max-w-xl ${
            errors.searchTerm ? "border-red-500" : "border-gray-200"
          } focus:border-gray-400 rounded`}
        >
          <option value="" disabled selected>
            Selecione especialidade desejada
          </option>
          {specialties.map((specialty) => (
            <option key={specialty.id} value={specialty.name}>
              {specialty.name}
            </option>
          ))}
        </select>
        <ButtonComponent
          variant={"primary"}
          type="button"
          className="md:w-40 w-full h-12 mt-4 mx-0 md:ml-6"
        >
          Pesquisar
        </ButtonComponent>
      </form>
    </div>
  );
}

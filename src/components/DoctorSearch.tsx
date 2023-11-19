import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import mobileIMG from "../assets/imgs/mobile_DoctorSearch.png";
import desktopIMG from "../assets/imgs/desktop_DoctorSearch.png";
import ButtonComponent from "./ui/ButtonComponent";
import { useSpecialties } from "../utils/UseSpecialties";

interface FormData {
  searchTerm: string;
}

export default function DoctorSearch(): JSX.Element {
  const {
    register,

    formState: { errors },
  } = useForm<FormData>();
  const specialties = useSpecialties();

  const [selectedValue, setSelectedValue] = useState(
    "Selecione especialidade desejada"
  );
  const navigate = useNavigate();

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
      <div className="flex md:ml-80 flex-col md:flex-row p-2">
        <select
          {...register("searchTerm")}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className={`w-full h-12 px-2 mt-4 border-2 max-w-xl ${
            errors.searchTerm ? "border-red-500" : "border-gray-200"
          } focus:border-gray-400 rounded`}
        >
          <option disabled value="Selecione especialidade desejada">
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
          onClick={() => {
            const selectedSpecialty = specialties.find(
              (specialty) => specialty.name === selectedValue
            );
            if (selectedSpecialty) {
              navigate(`/medicos/especialidades/${selectedSpecialty.id}`);
            }
          }}
        >
          Pesquisar
        </ButtonComponent>
      </div>
    </div>
  );
}

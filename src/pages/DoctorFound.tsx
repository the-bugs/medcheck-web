import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSpecialties } from "../utils/UseSpecialties";
import axios from "axios";
import ButtonComponent from "../components/ui/ButtonComponent";

interface Medico {
  numeroRegistro: string;
  "usuario.nome": string;
  "especialidade.id": number;
  "especialidade.nome": string;
}

export default function DoctorFound(): JSX.Element {
  const specialties = useSpecialties();
  const navigate = useNavigate();

  const { id } = useParams();
  const [selectedValue, setSelectedValue] = useState("");
  const [data, setData] = useState<Medico[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/medicos/especialidades/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  }, [id]);

  return (
    <div className="md:ml-32">
      <div className="max-w-xl">
        <h1 className="text-3xl text-primaryGreen ">
          Pesquise pelo profissional
        </h1>
        <div className="flex flex-col md:flex-row p-2">
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="w-full h-12 px-2 mt-4 border-2 focus:border-gray-400 rounded"
          >
            <option disabled selected value="Selecione especialidade desejada">
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
      <h1 className="text-3xl text-primaryGreen my-8">Resultado</h1>
      <div className="grid grid-cols-3 md:w-10/12  text-xl text-center text-primaryBlue mx-auto">
        <h3>Nome do médico</h3>
        <h3>Especialidade</h3>
        <h3>Realizar Consulta</h3>
      </div>
      {data &&
        data.map((medico: Medico, index: number) => (
          <div
            key={index}
            className=" grid grid-cols-3 bg-gray-200 md:w-10/12 
                 items-center
                 my-3 mx-auto  rounded-lg text-center px-1 "
          >
            <h3>{medico["usuario.nome"]}</h3>
            <h3 className="">{medico["especialidade.nome"]}</h3>
            <ButtonComponent
              className="border-2 md:w-1/2 self-center mx-auto border-primaryGreen"
              type="submit"
              onSubmit={() => {}}
            >
              <h3>Agendar</h3>
            </ButtonComponent>
          </div>
        ))}
    </div>
  );
}
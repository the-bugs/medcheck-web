import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useSpecialties } from "../utils/UseSpecialties";
import axios from "axios";
import ButtonComponent from "../components/ui/ButtonComponent";
import ShowAgenda from "../components/ShowAgenda";
import { AuthContext } from "../contexts/AuthContext";

interface Medico {
  id: number;
  numeroRegistro: string;
  "usuario.nome": string;
  "especialidade.id": number;
  "especialidade.nome": string;
}

export default function DoctorFound(): JSX.Element {
  const specialties = useSpecialties();
  const navigate = useNavigate();

  const { id } = useParams();
  const authContext = useContext(AuthContext);
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
      <div className="max-w-xl ml-2 md:ml-32">
        <h1 className="text-3xl text-primaryGreen ">
          Pesquise pelo profissional
        </h1>
        <div className="flex flex-col md:flex-row p-1">
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
            className="md:w-40 w-full border-2 border-primaryGreen h-12 mt-4 mx-0 md:ml-3"
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
        <h1 className="text-3xl text-primaryGreen my-8">Resultado</h1>
      </div>
      <div className="grid grid-cols-3 md:w-10/12  text-xl text-center text-primaryBlue mx-auto">
        <h3>Nome do médico</h3>
        <h3>Especialidade</h3>
        <h3>Ver Agenda</h3>
      </div>
      <main className="px-1">
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
              {authContext?.user && <ShowAgenda medico={medico} />}
              {!authContext?.user && (
                <Link to="/login">
                  <ButtonComponent className="md:w-1/2 justify-self-center">
                    Login
                  </ButtonComponent>
                </Link>
              )}
            </div>
          ))}
      </main>
    </div>
  );
}

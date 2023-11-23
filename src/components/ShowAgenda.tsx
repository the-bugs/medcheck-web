import { useContext, useState } from "react";
import ButtonComponent from "./ui/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

interface AgendaType {
  id: number;
  dataAgenda: Date;
}
interface Medico {
  id: number;
  numeroRegistro: string;
  "usuario.nome": string;
  "especialidade.id": number;
  "especialidade.nome": string;
}
interface ShowAgendaProps {
  medico: Medico;
}
export default function ShowAgenda({ medico }: ShowAgendaProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agenda, setAgenda] = useState<AgendaType[]>([]);

  const handleAgendarClick = () => {
    setIsModalOpen(true);

    axios
      .get(`${process.env.REACT_APP_API_HOST}/agendas/medicos/${medico.id}/`, {
        headers: {
          'x-access-token': localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  };

  return (
    <>
      <ButtonComponent
        className="border-2 mx-0 md:mx-auto md:w-1/2  px-3 border-primaryGreen"
        type="submit"
        onClick={handleAgendarClick}
      >
        <h3>Agendar</h3>
      </ButtonComponent>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-6 rounded-lg relative z-10 w-full max-w-2xl">
            <button
              className="absolute top-0 right-0 m-2 md:m-0 md:p-2"
              onClick={() => setIsModalOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="flex justify-between md:justify-around p-2">
              <h2 className="text-lg text-primaryBlue">Horários disponíveis</h2>
              <h2 className="text-lg text-primaryBlue">Realizar consulta</h2>

              {agenda.map((date, index) => (
                <p key={index}>{date.dataAgenda.toString()}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useState, useContext } from "react";
import ButtonComponent from "./ui/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { format } from "date-fns";
import { AuthContext } from "../contexts/AuthContext";

interface AgendaType {
  id: number;
  disponivel: boolean;
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
  const headers = { "x-access-token": localStorage.getItem("authToken") };
  const authContext = useContext(AuthContext);

  const handleAgendarClick = () => {
    setIsModalOpen(true);

    axios
      .get(`${process.env.REACT_APP_API_HOST}/agendas/medicos/${medico.id}/`, {
        headers,
      })
      .then((response) => {
        setAgenda(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  };

  const handleMakeAppointmentClick = (idAgenda: number) => {
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/consultas/agendar`,
        {
          idPaciente: authContext?.user?.user_id,
          idAgenda: idAgenda,
        },
        {
          headers,
        }
      )
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
          <div className="bg-white p-3 md:p-6 rounded-lg relative z-10 w-full max-w-2xl">
            <button
              className="absolute top-0 right-0 m-2 md:m-0 md:p-2"
              onClick={() => setIsModalOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="md:p-2">
              <div className="flex w-full justify-around">
                <h2 className="text-lg text-primaryBlue">
                  Horários disponíveis
                </h2>
                <h2 className="text-lg text-primaryBlue">Realizar consulta</h2>
              </div>
              {agenda.map((date) => (
                <div
                  key={date.id}
                  className="flex mt-4 w-full justify-around items-center bg-slate-300 rounded-md"
                >
                  <p className="">
                    {format(new Date(date.dataAgenda), "dd/MM/yyyy HH:mm")}
                  </p>
                  {date.disponivel ? (
                    <ButtonComponent
                      type="submit"
                      className="border-2 border-primaryGreen mx-0"
                      onClick={() => handleMakeAppointmentClick(date.id)}
                    >
                      Agendar
                    </ButtonComponent>
                  ) : (
                    <ButtonComponent
                      className="border-2 border-red-600 mx-0"
                      disabled
                      variant={"danger"}
                    >
                      Indisponível
                    </ButtonComponent>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

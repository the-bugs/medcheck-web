import { useEffect, useState } from "react";
import axios from "axios";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../components/ui/ButtonComponent";
import toast from "react-hot-toast";
import { useSpecialties } from "../utils/UseSpecialties";

interface AddSpecialtiesModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddSpecialtiesModal({
  isModalOpen,
  setIsModalOpen,
}: AddSpecialtiesModalProps): JSX.Element {
  const [specialtyData, setSpecialtyData] = useState({
    nome: "",
  });
  interface SpecialtyType {
    nome: string;
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpecialtyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const headers = { "x-access-token": localStorage.getItem("authToken") };
  const specialties = useSpecialties();

  const handleCreateSpecialty = async () => {
    try {
      const response = await axios.post<SpecialtyType>(
        `${process.env.REACT_APP_API_HOST}/especialidades`,
        specialtyData,
        { headers }
      );

      toast.success("Especialidade cadastrada com sucesso!", {
        duration: 2500,
        position: "bottom-right",
      });
      window.location.reload();
      setIsModalOpen(false);
      // Update the specialties list after creating a new specialty
      setSpecialtyData((prevData) => ({
        ...prevData,
        nome: response.data.nome,
      }));
    } catch (error: any) {
      toast.error(
        "Erro ao cadastrar especialidade: " +
          (error.response?.data?.message || "Erro desconhecido"),
        {
          duration: 2500,
          position: "bottom-right",
        }
      );
    }
  };
  useEffect(() => {}, [specialties]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-3 md:p-6 rounded-lg relative z-10 w-full max-w-2xl">
            <button
              className="absolute top-0 text-xl right-0 m-2 md:m-0 md:p-3"
              onClick={() => setIsModalOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="md:p-2">
              <div className="flex w-full justify-around">
                <h2 className="text-xl text-primaryBlue">
                  Cadastrar Nova Especialidade
                </h2>
              </div>
              <div className="flex flex-col mt-4 w-full">
                <label
                  htmlFor="name"
                  className="mb-2 text-textColor font-semibold"
                >
                  Nome da Especialidade:
                </label>
                <input
                  type="text"
                  id="name"
                  name="nome"
                  value={specialtyData.nome}
                  onChange={handleInputChange}
                  className="border-2 border-gray-400 p-2 rounded-md"
                />
              </div>
              <ButtonComponent
                type="submit"
                className="border-2 border-primaryBlue mt-4"
                onClick={handleCreateSpecialty}
                variant={"secondary"}
              >
                Cadastrar
              </ButtonComponent>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

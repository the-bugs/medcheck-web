import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useSpecialties } from "../utils/UseSpecialties";
import { GrConfigure } from "react-icons/gr";
import { CgDanger } from "react-icons/cg";
import ButtonComponent from "../components/ui/ButtonComponent";
import AddSpecialtyModal from "../components/AddSpecialtyModal";

export default function SpecialtiesMenuPage(): JSX.Element {
  const authContext = useContext(AuthContext);
  const isAdmin = authContext?.user?.tipo === "Administrador";
  const specialties = useSpecialties();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isAdmin) {
    return (
      <div className="w-full flex items-center justify-center h-screen text-center">
        <p className="text-2xl">Sem permissão para acessar a página</p>
      </div>
    );
  }

  return (
    <div className="w-screen box-border">
      <div className="my-8 flex justify-between">
        <h1 className="text-3xl md:ml-40  text-primaryGreen">
          Menu de especialidades
        </h1>
        <ButtonComponent
          className="md:mr-40 border-2 border-primaryGreen h-1/2 md:h-2/3"
          onClick={() => setIsModalOpen(true)}
        >
          Novo
        </ButtonComponent>
      </div>
      <div className="flex justify-around md:w-10/12 text-xl text-center text-primaryBlue mx-auto">
        <h3>ID</h3>
        <h3>Especialidade</h3>
        <h3>Atualizar</h3>
        <h3>Excluir</h3>
      </div>
      <main className="px-1">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className="flex my-2 mx-auto md:w-10/12 text-center items-center justify-around bg-gray-200 rounded-md"
          >
            <h4 className="text-left">{specialty.id}</h4>
            <h4>{specialty.name}</h4>
            <ButtonComponent
              className="mx-0 bg-opacity-70 border-2 border-primaryBlue px-2"
              variant={"secondary"}
            >
              <GrConfigure />
            </ButtonComponent>
            <ButtonComponent variant={"danger"} className="mx-0">
              <CgDanger />
            </ButtonComponent>
          </div>
        ))}
      </main>
      <AddSpecialtyModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

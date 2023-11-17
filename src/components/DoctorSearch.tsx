import mobileIMG from "../assets/imgs/mobile_DoctorSearch.png";
import desktopIMG from "../assets/imgs/desktop_DoctorSearch.png";
import StyledInput from "./ui/StyledInput";
import ButtonComponent from "./ui/ButtonComponent";

export default function DoctorSearch(): JSX.Element {
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

      <div className="relative md:ml-80 z-10 bg-opacity-50 bg-gray-600 rounded-md max-w-3xl pt-2 p-2 md:p-4 mx-2">
        <h1 className="text-4xl md:text-5xl font-semibold  text-white mb-4 ">
          Agende agora sua consulta
        </h1>
        <p className="text-white w-full font-light tracking-wide	">
          Diversas especialidades médicas disponíveis para marcação. Selecione o
          profissional que mais se aplica às suas necessidades!
        </p>
      </div>
      <form className="flex md:ml-80 flex-col w-full  md:flex-row p-2">
        <StyledInput
          placeholder="Digite especilidade ou nome do médico"
          className="w-full h-12 px-2 mt-4 border-2 border-gray-200 focus:border-gray-400  rounded "
        />
        <ButtonComponent
          variant={"primary"}
          className="md:w-40 w-full h-12 mt-4 mx-0 md:ml-6"
        >
          Pesquisar
        </ButtonComponent>
      </form>
    </div>
  );
}

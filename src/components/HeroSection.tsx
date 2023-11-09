import doc from "../assets/imgs/doctor.jpg";
import ButtonComponent from "../components/ui/ButtonComponent";
export default function HeroSection(): JSX.Element {
  return (
    <div className="bg-white bg-opacity-30 flex justify-center">
      <div className="flex flex-col px-5 lg:flex-row ustify-center md:w-full md:p-4 lg:w-8/12 ">
        <section className="lg:w-3/6 lg:mr-6 self-center lg:mb-10">
          <div className="md:flex flex-col">
            <p className="text-textColor opacity-70 lg:w-3/6">
              Uma solução tecnológica para médicos e pacientes
            </p>
            <h1 className="text-5xl lg:text-start lg:text-6xl mt-3 mb-5  text-textColor text-opacity-90">
              <span className="font-bold text-primaryBlue">Medical </span>
              Check
            </h1>
            <p className="text-lg mb-4 md:mb-6 text-textColor opacity-90 md:w-5/6 lg:w-4/6">
              Marque consultas com os melhores médicos especialistas e tenha
              controle sobre sua saúde a qualquer momento.
            </p>
            <hr className="border-primaryBlue border-t-2 mb-6 w-1/2" />
            <ButtonComponent
              variant={"primary"}
              className="h-12 w-full md:h-14 md:w-36 mx-0 hover:font-semibold opacity-90"
            >
              Cadastrar
            </ButtonComponent>
          </div>
        </section>
        <img
          src={doc}
          alt="doctor"
          className="rounded-3xl shadow-2xl lg:h-5/6 scale-90 lg:w-3/5 lg:mt-0 mt-10"
        />
      </div>
    </div>
  );
}

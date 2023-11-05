import doc from "../assets/imgs/doctor.jpg";
import ButtonComponent from "../components/ui/ButtonComponent";
export default function HeroSection(): JSX.Element {
  return (
    <div className=" h-screen bg-backgroundColor1 bg-opacity-30 flex  justify-center -mt-28 pt-32 md:pt-20 ">
      <div className="flex flex-col px-5 md:flex-row items-center justify-center md:w-4/6 lg:w-8/12 ">
        <section className="md:w-3/6 md:mr-6">
          <div className="lg:flex flex-col lg:justify-center ">
            <p className="text-textColor opacity-70 lg:w-3/6">
              Uma solução tecnológica para médicos e pacientes
            </p>
            <h1 className="text-5xl lg:text-start lg:text-6xl mt-3 mb-5  text-textColor text-opacity-90">
              <span className="font-bold">Medical </span>
              Check
            </h1>
            <p className="text-lg mb-4 md:mb-10 text-textColor opacity-90 md:w-5/6 lg:w-4/6">
              Marque consultas com os melhores médicos especialistas e tenha
              controle sobre sua saúde a qualquer momento.
            </p>
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
          className="rounded-3xl shadow-2xl md:h-5/6 md:w-3/6 md:mt-0 mt-10"
        />
      </div>
    </div>
  );
}

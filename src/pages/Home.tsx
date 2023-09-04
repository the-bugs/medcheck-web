import { motion } from "framer-motion";
import doc from "../assets/imgs/doctor.jpg";
function Home(): JSX.Element {
  return (
    <div className="flex justify-center h-screen m-2">
      <section className=" mt-3 h-5/6 lg:w-5/6 text-center  rounded-md p-6 pt-24 md:flex md:justify-center md:content-center">
        <div className="lg:scale-105 md:w-1/2 md:text-left md:pl-8 md:pb-14 md:pr-16 lg:flex lg:flex-col lg:justify-center ">
          <p className="text-md font-semibold text-justify  text-slate-400">
            Uma solução tecnológica para médicos e pacientes
          </p>
          <h1 className="text-5xl md:text-justify lg:text-start  lg:text-6xl mt-3 mb-5 lg:mb-0 font-bold  text-blue-700">
            <span className="text-blue-900 mr-3">Med Check,</span>
            sua plataforma digital de saúde
          </h1>
          <hr className="w-28 ml-4 mb-6 border-blue-800 border-t-2 lg:w-max" />
          <p className=" mb-10 text-blue-900 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat veniam dolorem. Consectetur!
          </p>
          <div className="sm:flex lg:justify-end">
            <button
              type="submit"
              className="ml-24 md:ml-14 mr-5 md:mr-2 h-10 font-semibold bg-white  text-blue-900 border-2 border-blue-900 hover:bg-blue-950 hover:text-white w-28 rounded-3xl  "
            >
              Cadastre-se
            </button>
            <button className="border-2 h-10 w-24 rounded-3xl text-blue-500 border-blue-500 font-semibold hover:text-white hover:bg-blue-950 hover:border-blue-950 md:ml-7">
              Entrar
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src={doc}
            alt="doctor"
            className="rounded-full shadow-2xl md:ml-10 lg:ml-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;

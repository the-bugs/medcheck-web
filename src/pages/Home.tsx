import { motion } from 'framer-motion';
import doc from '../assets/imgs/doctor_aleatorio.jpg';
function Home(): JSX.Element {
    return (
        <div className="flex justify-center font-lato h-screen p-3">
            <section className="mt-5 h-5/6 lg:w-5/6 text-center border rounded-md p-6 pt-24 bg-transparent bg-slate-300">
                <p className="text-lg text-semibold  text-blue-400">
                    Uma solução tecnológica para médicos e pacientes
                </p>
                <h1 className="text-4xl  lg:text-5xl mt-3 mb-5 lg:mb-0  font-bold  text-blue-800">
                    <span className="text-blue-900 mr-3">
                        Sua plataforma digital
                    </span>
                    de saúde
                </h1>
                <hr className="w-28 mb-10 ml-4 lg:w-max" />
                <div>
                    <button
                        type="submit"
                        className=" ml-28 mr-5 h-10 font-semibold bg-white  text-slate-800 border-2 border-slate-900 hover:bg-slate-900 hover:text-white w-24 rounded-lg  "
                    >
                        Cadastre-se
                    </button>
                    <button className="border-2 h-10 w-24 rounded-lg text-blue-500 border-blue-500 font-semibold hover:text-white hover:bg-blue-950 hover:border-blue-950">
                        Entrar
                    </button>
                </div>
                <img
                    src={doc}
                    alt="Imagem de médico"
                    className=" rounded-md mt-14"
                />
            </section>
        </div>
    );
}

export default Home;

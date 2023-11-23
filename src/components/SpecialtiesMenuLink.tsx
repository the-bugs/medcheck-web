import { MdFolderSpecial } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SpecialtiesMenuLink(): JSX.Element {
  return (
    <Link
      to="/menu/especialidades"
      className="flex flex-col mx-auto w-11/12 md:w-1/5 rounded-lg justify-center items-center h-72 m-2 box-border  bg-primaryGreen bg-opacity-50"
    >
      <MdFolderSpecial className="text-6xl" />
      <h1 className="text-white font-bold">Menu Especialidades</h1>
    </Link>
  );
}

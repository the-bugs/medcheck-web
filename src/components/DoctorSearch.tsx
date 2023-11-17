import mobileIMG from "../assets/imgs/mobile_DoctorSearch.png";
export default function DoctorSearch(): JSX.Element {
  return (
    <div
      className="bg-gray-200 w-4/5 "
      style={{
        backgroundImage: `url(${mobileIMG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <div className="bg-gray-200 w-4/5">
        <h1 className="text-[39px]">Agende agora sua consulta</h1>
        <p>
          Diversas especialidades médicas disponíveis para marcação, selecione o
          profissional que mais se aplica às suas necessidades.
        </p>
      </div>
    </div>
  );
}

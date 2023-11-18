import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

export default function DoctorFound(): JSX.Element {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/medicos/especialidades/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  }, [id]);

  return <></>;
}

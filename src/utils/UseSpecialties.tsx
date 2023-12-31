import { useState, useEffect } from "react";
import axios from "axios";

interface Specialty {
  id: number;
  name: string;
}

export function useSpecialties() {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  useEffect(() => {
    async function getSpecialties(): Promise<void> {
      try {
        const response = await axios.get(
          `http://localhost:3001/especialidades`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "X-Requested-With, content-type",
              "x-access-token": localStorage.getItem("authToken"),
              Accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );

        const specialtiesData: Specialty[] = response.data.map((item: any) => ({
          id: item.id,
          name: item.nome,
        }));

        setSpecialties(specialtiesData);
      } catch (error) {
        console.error("Erro na solicitação de especialidades:", error);
      }
    }

    getSpecialties();
  }, []);

  return specialties;
}

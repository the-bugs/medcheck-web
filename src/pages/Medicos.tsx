import DataTable from '../components/ui/DataTableBase';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Medico {
  id: number,
  numeroRegistro: string;
  nome: string;
  email: string;
}

export default function Medicos(): JSX.Element {
  const [data, setData] = useState<Medico[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/medicos`)
      .then((response) => {
        const mappedData = response.data.map((data: { id: any; numeroRegistro: string; usuario: { nome: string; email: string; }; }) => {
          const { id, numeroRegistro, usuario } = data;
          const { nome, email } = usuario;
          return {
            id,
            numeroRegistro,
            nome,
            email
          }
        })
        setData(mappedData);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', type: 'number', width: 80, editable: false },
    { field: 'nome', headerName: 'Nome', width: 180, editable: true },
    {
      field: 'numeroRegistro',
      headerName: 'Número Registro',
      width: 180,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
      editable: true,
    }
  ];

  return (
    <DataTable columns={columns} data={data} />
  );
}

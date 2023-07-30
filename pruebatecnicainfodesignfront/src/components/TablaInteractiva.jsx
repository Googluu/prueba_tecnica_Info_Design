import { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  // TablePagination,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";

const TablaInteractiva = () => {
  const [data, setData] = useState([]); // Aquí almacenaremos los datos de la tabla
  const [filterLinea, setFilterLinea] = useState(""); // Estado para el texto de filtrado
  const [filterConsumo, setFilterConsumo] = useState(""); // Estado para el consumo
  const [filterPerdidas, setFilterPerdidas] = useState(""); // Estado para las perdidas
  const [filterCosto, setFilterCosto] = useState(""); // Estado para el costo
  const [orderBy, setOrderBy] = useState(""); // Estado para el campo de ordenamiento
  const [order, setOrder] = useState("asc"); // Estado para el tipo de ordenamiento (ascendente o descendente)

  // let fechainicial;
  // let fechafinal;

  useEffect(() => {
    // llamada a la API para obtener los datos
    axios
      .get(
        "http://localhost:4000/tramos?fechainicial=2010-02-01&fechafinal=2010-02-30"
        // `http://localhost:4000/tramos?fechainicial=${fechainicial}&fechafinal=${fechafinal}`
      )
      .then((response) => {
        setData(response.data); // Almacena los datos en el estado del componente
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handleFilterLinea = (event) => {
    setFilterLinea(event.target.value); // Actualiza el estado linea
  };

  const handleFilterConsumo = (event) => {
    setFilterConsumo(event.target.value); // Actualiza el estado consumo
  };

  const handleFilterPerdidas = (event) => {
    setFilterPerdidas(event.target.value); // Actualiza el estado perdidas
  };

  const handleFilterCosto = (event) => {
    setFilterCosto(event.target.value); // Actualiza el estado costo
  };

  const handleSortLinea = (field) => () => {
    const isAsc = orderBy === field && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(field);
  };

  // Función para aplicar el filtrado y ordenamiento a los datos
  const filteredAndSortedData = data
    .filter(
      (item) =>
        item.Linea.toLowerCase().includes(filterLinea.toLowerCase()) &&
        item.consumo.toString().includes(filterConsumo) &&
        item.perdidas.toString().includes(filterPerdidas) &&
        item.costo.toString().includes(filterCosto)
    )
    .sort((a, b) => {
      if (orderBy === "Linea") {
        // Ordena alfabéticamente por el campo 'nombre'
        return (
          (a.Linea.toLowerCase() < b.Linea.toLowerCase() ? -1 : 1) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "consumo") {
        return (
          (parseInt(a.consumo) - parseInt(b.consumo)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "perdidas") {
        return (
          (parseInt(a.perdidas) - parseInt(b.perdidas)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "costo") {
        return (
          (parseInt(a.costo) - parseInt(b.costo)) * (order === "asc" ? 1 : -1)
        );
      }
      return 0;
    });

  return (
    <>
      <TextField
        label="Filtrar por Linea"
        value={filterLinea}
        onChange={handleFilterLinea}
      />
      <TextField
        label="Filtrar por Consumo"
        value={filterConsumo}
        onChange={handleFilterConsumo}
      />
      <TextField
        label="Filtrar por Perdidas"
        value={filterPerdidas}
        onChange={handleFilterPerdidas}
      />
      <TextField
        label="Filtrar por Costo"
        value={filterCosto}
        onChange={handleFilterCosto}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "Linea"}
                  direction={order}
                  onClick={handleSortLinea("Linea")}
                >
                  Linea
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "consumo"}
                  direction={order}
                  onClick={handleSortLinea("consumo")}
                >
                  Consumo
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "perdidas"}
                  direction={order}
                  onClick={handleSortLinea("perdidas")}
                >
                  Perdidas
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "costo"}
                  direction={order}
                  onClick={handleSortLinea("costo")}
                >
                  Costo
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedData.map((item) => (
              <TableRow
                key={item.id}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.Linea}</TableCell>
                <TableCell>{item.consumo}</TableCell>
                <TableCell>{item.perdidas}</TableCell>
                <TableCell>{item.costo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablaInteractiva;

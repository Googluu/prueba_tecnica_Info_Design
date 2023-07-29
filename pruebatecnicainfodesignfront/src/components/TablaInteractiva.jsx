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
  const [filterText, setFilterText] = useState(""); // Estado para el texto de filtrado
  const [orderBy, setOrderBy] = useState(""); // Estado para el campo de ordenamiento
  const [order, setOrder] = useState("asc"); // Estado para el tipo de ordenamiento (ascendente o descendente)

  let fechainicial;
  let fechafinal;

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

  const handleFilter = (event) => {
    setFilterText(event.target.value); // Actualiza el estado con el texto de filtrado
  };

  const handleSort = (field) => () => {
    // Si ya está ordenando por el mismo campo, cambia el tipo de ordenamiento
    const isAsc = orderBy === field && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(field);
  };

  // Función para aplicar el filtrado y ordenamiento a los datos
  const filteredAndSortedData = data
    .filter((item) =>
      item.Linea.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (orderBy === "Linea") {
        // Ordena alfabéticamente por el campo 'nombre'
        return (
          (a.Linea.toLowerCase() < b.Linea.toLowerCase() ? -1 : 1) *
          (order === "asc" ? 1 : -1)
        );
      }
      return 0;
    });

  return (
    <>
      <TextField
        label="Filtrar por Linea"
        value={filterText}
        onChange={handleFilter}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "Linea"}
                  direction={order}
                  onClick={handleSort("Linea")}
                >
                  Linea
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.Linea}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablaInteractiva;

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
  Grid,
} from "@mui/material";
import axios from "axios";

const TablaInteractivaTramosCliente = () => {
  const [data, setData] = useState([]); // Aquí almacenaremos los datos de la tabla
  const [filterLinea, setFilterLinea] = useState(""); // Estado para el texto de filtrado
  const [filterTipoConsumo, setFilterTipoConsumo] = useState(""); // Estado para el tipo de consumo
  const [filterPerdidas, setFilterPerdidas] = useState(""); // Estado para las perdidas
  const [orderBy, setOrderBy] = useState(""); // Estado para el campo de ordenamiento
  const [order, setOrder] = useState("asc"); // Estado para el tipo de ordenamiento (ascendente o descendente)
  const [loading, setLoading] = useState(true); // Estado para indicar si la tabla está cargando los datos
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  // let fechainicial;
  // let fechafinal;

  useEffect(() => {
    // llamada a la API para obtener los datos

    fetchData();
  }, []);

  const fetchData = () => {
    const uri = `http://localhost:4000/tramos-cliente${
      fechaInicial && fechaFinal
        ? `?fechainicial=${formatDate(fechaInicial)}&fechafinal=${formatDate(
            fechaFinal
          )}`
        : ""
    }`;
    setLoading(true);
    axios
      .get(uri)
      .then((response) => {
        setData(response.data); // Almacena los datos en el estado del componente
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  if (loading) {
    return <div className="text-center mb-4">Cargando datos...</div>;
  }

  const handleFilterLinea = (event) => {
    setFilterLinea(event.target.value);
  };

  const handleFilterTipoConsumo = (event) => {
    setFilterTipoConsumo(event.target.value);
  };

  const handleFilterPerdidas = (event) => {
    setFilterPerdidas(event.target.value);
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
        item.TipoConsumo.toString().includes(filterTipoConsumo) &&
        item.Perdidas.toString().includes(filterPerdidas)
      // item.Fecha >= fechaInicial &&
      // item.Fecha <= fechaFinal // Aplicar filtrado por fechas
    )
    .sort((a, b) => {
      if (orderBy === "Linea") {
        return (
          (a.Linea.toLowerCase() < b.Linea.toLowerCase() ? -1 : 1) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "TipoConsumo") {
        return (
          (parseInt(a.TipoConsumo) - parseInt(b.TipoConsumo)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "Perdidas") {
        return (
          (parseInt(a.Perdidas) - parseInt(b.Perdidas)) *
          (order === "asc" ? 1 : -1)
        );
      }
      return 0;
    });

  const handleFiltrarClick = () => {
    // Realizar la solicitud de los datos filtrados cuando el usuario hace clic en el botón "Filtrar"
    setLoading(true);
    fetchData();
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Tabla Tramos-Cliente</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="column align-items-end">
            <div className="col-md-14">
              <label htmlFor="fechaInicial" className="form-label">
                Fecha Inicial:
              </label>
              <input
                // type="date"
                id="fechaInicial"
                className="form-control"
                placeholder="2010-02-01"
                value={fechaInicial}
                onChange={(e) => setFechaInicial(e.target.value)}
              />
            </div>
            <div className="col-md-14">
              <label htmlFor="fechaFinal" className="form-label">
                Fecha Final:
              </label>
              <input
                // type="date"
                id="fechaFinal"
                className="form-control"
                placeholder="2010-02-30"
                value={fechaFinal}
                onChange={(e) => setFechaFinal(e.target.value)}
              />
            </div>
            <br />
            <div className="col-md-2">
              <button className="btn btn-primary" onClick={handleFiltrarClick}>
                Filtrar
              </button>
            </div>
          </div>
          <br />
          <TextField
            label="Filtrar por Linea"
            value={filterLinea}
            onChange={handleFilterLinea}
            fullWidth
          />
          <TextField
            label="Filtrar por Tipo de Consumo"
            value={filterTipoConsumo}
            onChange={handleFilterTipoConsumo}
            fullWidth
          />
          <TextField
            label="Filtrar por Perdidas"
            value={filterPerdidas}
            onChange={handleFilterPerdidas}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
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
                      active={orderBy === "TipoConsumo"}
                      direction={order}
                      onClick={handleSortLinea("TipoConsumo")}
                    >
                      Tipo de Consumo
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "Perdidas"}
                      direction={order}
                      onClick={handleSortLinea("Perdidas")}
                    >
                      Perdidas
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAndSortedData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.Linea}</TableCell>
                    <TableCell>{item.TipoConsumo}</TableCell>
                    <TableCell>{item.Perdidas}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default TablaInteractivaTramosCliente;

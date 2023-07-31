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

const TablaInteractivaTramos = () => {
  const [data, setData] = useState([]); // Aquí almacenaremos los datos de la tabla
  const [filterLinea, setFilterLinea] = useState(""); // Estado para el texto de filtrado
  const [filterConsumo, setFilterConsumo] = useState(""); // Estado para el consumo
  const [filterPerdidas, setFilterPerdidas] = useState(""); // Estado para las perdidas
  const [filterCosto, setFilterCosto] = useState(""); // Estado para el costo
  const [orderBy, setOrderBy] = useState(""); // Estado para el campo de ordenamiento
  const [order, setOrder] = useState("asc"); // Estado para el tipo de ordenamiento (ascendente o descendente)
  const [loading, setLoading] = useState(true); // Estado para indicar si la tabla está cargando los datos
  // filtrado por fechas
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  // let fechainicial;
  // let fechafinal;

  useEffect(() => {
    // llamada a la API para obtener los datos
    fetchData();
  }, []);

  const fetchData = () => {
    const uri = `http://localhost:4000/tramos${
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
        setLoading(false); // Indicar que la carga ha terminado (se obtengan o no los datos)
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
      // item.Fecha >= fechaInicial &&
      // item.Fecha <= fechaFinal // Aplicar filtrado por fechas
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

  const handleFiltrarClick = () => {
    // Realizar la solicitud de los datos filtrados cuando el usuario hace clic en el botón "Filtrar"
    setLoading(true);
    fetchData();
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Tabla Tramos</h2>
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
            label="Filtrar por Consumo"
            value={filterConsumo}
            onChange={handleFilterConsumo}
            fullWidth
          />
          <TextField
            label="Filtrar por Perdidas"
            value={filterPerdidas}
            onChange={handleFilterPerdidas}
            fullWidth
          />
          <TextField
            label="Filtrar por Costo"
            value={filterCosto}
            onChange={handleFilterCosto}
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
                  <TableRow key={item.id}>
                    <TableCell>{item.Linea}</TableCell>
                    <TableCell>{item.consumo}</TableCell>
                    <TableCell>{item.perdidas}</TableCell>
                    <TableCell>{item.costo}</TableCell>
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

export default TablaInteractivaTramos;

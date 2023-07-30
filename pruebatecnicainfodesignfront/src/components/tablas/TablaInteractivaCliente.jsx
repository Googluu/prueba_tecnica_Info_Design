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

const TablaInteractivaCliente = () => {
  const [data, setData] = useState([]);
  const [filterLinea, setFilterLinea] = useState("");
  const [filterConsumoResidencial, setFilterConsumoResidencial] = useState("");
  const [filterConsumoComercial, setFilterConsumoComercial] = useState("");
  const [filterConsumoIndustrial, setFilterConsumoIndustrial] = useState("");
  const [filterPerdidasResidencial, setFilterPerdidasResidencial] =
    useState("");
  const [filterPerdidasComercial, setFilterPerdidasComercial] = useState("");
  const [filterPerdidasIndustrial, setFilterPerdidasIndustrial] = useState("");
  const [filterCostoResidencial, setFilterCostoResidencial] = useState("");
  const [filterCostoComercial, setFilterCostoComercial] = useState("");
  const [filterCostoIndustrial, setFilterCostoIndustrial] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [loading, setLoading] = useState(true); // Estado para indicar si la tabla está cargando los datos

  // let fechainicial;
  // let fechafinal;

  useEffect(() => {
    // llamada a la API para obtener los datos
    const fetchData = () => {
      setLoading(true);
      axios
        .get(
          // `http://localhost:4000/tramos?fechainicial=${fechaInicial}&fechafinal=${fechaFinal}`
          "http://localhost:4000/cliente?fechainicial=2010-02-01&fechafinal=2010-02-30"
        )
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

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mb-4">Cargando datos...</div>;
  }

  const handleFilterLinea = (event) => {
    setFilterLinea(event.target.value); // Actualiza el estado linea
  };

  const handleFilterConsumoResidencial = (event) => {
    setFilterConsumoResidencial(event.target.value);
  };

  const handleFilterConsumoComercial = (event) => {
    setFilterConsumoComercial(event.target.value);
  };

  const handleFilterConsumoIndustrial = (event) => {
    setFilterConsumoIndustrial(event.target.value);
  };

  const handleFilterPerdidasResidencial = (event) => {
    setFilterPerdidasResidencial(event.target.value);
  };

  const handleFilterPerdidasComercial = (event) => {
    setFilterPerdidasComercial(event.target.value);
  };

  const handleFilterPerdidasIndustrial = (event) => {
    setFilterPerdidasIndustrial(event.target.value);
  };

  const handleFilterCostoResidencial = (event) => {
    setFilterCostoResidencial(event.target.value);
  };

  const handleFilterCostoComercial = (event) => {
    setFilterCostoComercial(event.target.value);
  };

  const handleFilterCostoIndustrial = (event) => {
    setFilterCostoIndustrial(event.target.value);
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
        item.consumo_residencial
          .toString()
          .includes(filterConsumoResidencial) &&
        item.consumo_comercial.toString().includes(filterConsumoComercial) &&
        item.consumo_industrial.toString().includes(filterConsumoIndustrial) &&
        item.perdidas_residencial
          .toString()
          .includes(filterPerdidasResidencial) &&
        item.perdidas_comercial.toString().includes(filterPerdidasComercial) &&
        item.perdidas_industrial
          .toString()
          .includes(filterPerdidasIndustrial) &&
        item.costo_residencial.toString().includes(filterCostoResidencial) &&
        item.costo_comercial.toString().includes(filterCostoComercial) &&
        item.costo_industrial.toString().includes(filterCostoIndustrial)
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
      } else if (orderBy === "consumo_residencial") {
        return (
          (parseInt(a.consumo_residencial) - parseInt(b.consumo_residencial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "consumo_comercial") {
        return (
          (parseInt(a.consumo_comercial) - parseInt(b.consumo_comercial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "consumo_industrial") {
        return (
          (parseInt(a.consumo_industrial) - parseInt(b.consumo_industrial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "perdidas_residencial") {
        return (
          (parseInt(a.perdidas_residencial) -
            parseInt(b.perdidas_residencial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "perdidas_comercial") {
        return (
          (parseInt(a.perdidas_comercial) - parseInt(b.perdidas_comercial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "perdidas_industrial") {
        return (
          (parseInt(a.perdidas_industrial) - parseInt(b.perdidas_industrial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "costo_residencial") {
        return (
          (parseInt(a.costo_residencial) - parseInt(b.costo_residencial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "costo_comercial") {
        return (
          (parseInt(a.costo_comercial) - parseInt(b.costo_comercial)) *
          (order === "asc" ? 1 : -1)
        );
      } else if (orderBy === "costo_industrial") {
        return (
          (parseInt(a.costo_industrial) - parseInt(b.costo_industrial)) *
          (order === "asc" ? 1 : -1)
        );
      }
      return 0;
    });

  return (
    <div className="container">
      <h2 className="text-center mb-4">Tabla Cliente</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Filtrar por Linea"
            value={filterLinea}
            onChange={handleFilterLinea}
            fullWidth
          />
          <TextField
            label="Filtrar por Consumo Residencial"
            value={filterConsumoResidencial}
            onChange={handleFilterConsumoResidencial}
            fullWidth
          />
          <TextField
            label="Filtrar por Consumo Comercial"
            value={filterConsumoComercial}
            onChange={handleFilterConsumoComercial}
            fullWidth
          />
          <TextField
            label="Filtrar por Consumo Industrial"
            value={filterConsumoIndustrial}
            onChange={handleFilterConsumoIndustrial}
            fullWidth
          />
          <TextField
            label="Filtrar por Perdidas Residenciales"
            value={filterPerdidasResidencial}
            onChange={handleFilterPerdidasResidencial}
            fullWidth
          />
          <TextField
            label="Filtrar por Perdidas Comerciales"
            value={filterPerdidasComercial}
            onChange={handleFilterPerdidasComercial}
            fullWidth
          />
          <TextField
            label="Filtrar por Perdidas Industriales"
            value={filterPerdidasIndustrial}
            onChange={handleFilterPerdidasIndustrial}
            fullWidth
          />
          <TextField
            label="Filtrar por Costo Residencial"
            value={filterCostoResidencial}
            onChange={handleFilterCostoResidencial}
            fullWidth
          />
          <TextField
            label="Filtrar por Costo Comercial"
            value={filterCostoComercial}
            onChange={handleFilterCostoComercial}
            fullWidth
          />
          <TextField
            label="Filtrar por Costo Industrial"
            value={filterCostoIndustrial}
            onChange={handleFilterCostoIndustrial}
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
                      active={orderBy === "consumo_residencial"}
                      direction={order}
                      onClick={handleSortLinea("consumo_residencial")}
                    >
                      Consumo Residencial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "consumo_comercial"}
                      direction={order}
                      onClick={handleSortLinea("consumo_comercial")}
                    >
                      Consumo Comercial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "consumo_industrial"}
                      direction={order}
                      onClick={handleSortLinea("consumo_industrial")}
                    >
                      Consumo Industrial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "perdidas_residencial"}
                      direction={order}
                      onClick={handleSortLinea("perdidas_residencial")}
                    >
                      Perdidas Residencial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "perdidas_comercial"}
                      direction={order}
                      onClick={handleSortLinea("perdidas_comercial")}
                    >
                      Perdidas Comercial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "perdidas_industrial"}
                      direction={order}
                      onClick={handleSortLinea("perdidas_industrial")}
                    >
                      Perdidas Industrial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "costo_residencial"}
                      direction={order}
                      onClick={handleSortLinea("costo_residencial")}
                    >
                      Costo Residencial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "costo_comercial"}
                      direction={order}
                      onClick={handleSortLinea("costo_comercial")}
                    >
                      Costo Comercial
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "costo_industrial"}
                      direction={order}
                      onClick={handleSortLinea("costo_industrial")}
                    >
                      Costo Industrial
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAndSortedData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.Linea}</TableCell>
                    <TableCell>{item.consumo_residencial}</TableCell>
                    <TableCell>{item.consumo_comercial}</TableCell>
                    <TableCell>{item.consumo_industrial}</TableCell>
                    <TableCell>{item.perdidas_residencial}</TableCell>
                    <TableCell>{item.perdidas_comercial}</TableCell>
                    <TableCell>{item.perdidas_industrial}</TableCell>
                    <TableCell>{item.costo_residencial}</TableCell>
                    <TableCell>{item.costo_comercial}</TableCell>
                    <TableCell>{item.costo_industrial}</TableCell>
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

export default TablaInteractivaCliente;

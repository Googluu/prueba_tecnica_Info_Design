import { useState } from "react";
// import axios from "axios";

import DateRangePicker from "./DateRangePicker";
// import GraficaHistorica from "./GraficaHistorica";
// import TablaInteractiva from "./TablaInteractiva";

const MainComponent = () => {
  const [fechaInicial, setFechaInicial] = useState(null);
  const [fechaFinal, setFechaFinal] = useState(null);
  //   const [data, setData] = useState([]);

  //   const fetchData = () => {
  //     // Realizar la llamada a la API con las fechas seleccionadas
  //     // Utilizar axios
  //     // La URL de la API sería algo como:
  //     // `http://localhost:4000/tramos?fechainicial=${fechaInicial}&fechafinal=${fechaFinal}`
  //     // Actualizar el estado 'datos' con los datos obtenidos de la API
  //     // setDatos([...datos obtenidos de la API]);
  //     // llamada a la API para obtener los datos
  //     axios
  //       .get(
  //         `http://localhost:4000/tramos?fechainicial=${fechaInicial}&fechafinal=${fechaFinal}`
  //         // `http://localhost:4000/tramos?fechainicial=${fechainicial}&fechafinal=${fechafinal}`
  //       )
  //       .then((response) => {
  //         setData(response.data); // Almacena los datos en el estado del componente
  //       })
  //       .catch((error) => {
  //         console.error("Error al obtener los datos:", error);
  //       });
  //   };

  // Funciones para manejar el cambio de fechas en el componente DateRangePicker
  const handleFechaInicialChange = (date) => {
    setFechaInicial(date);
  };

  const handleFechaFinalChange = (date) => {
    setFechaFinal(date);
  };

  return (
    <div>
      <DateRangePicker
        fechaInicial={fechaInicial}
        fechaFinal={fechaFinal}
        onFechaInicialChange={handleFechaInicialChange}
        onFechaFinalChange={handleFechaFinalChange}
      />
      {/* <GraficaHistorica fechaInicial={fechaInicial} fechaFinal={fechaFinal} /> */}
      {/* <TablaInteractiva
        datos={data}
        fechaInicial={fechaInicial}
        fechaFinal={fechaFinal}
      /> */}
    </div>
  );
};

export default MainComponent;

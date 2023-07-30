import { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Chart } from "react-chartjs-2";
// import { Chart } from "chart.js";

const GraficaTramos = () => {
  const [data, setData] = useState([]);
  const [shouldRenderChart, setShouldRenderChart] = useState(true); // Agrega un estado para controlar si se debe renderizar la gráfica

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!shouldRenderChart) {
      console.log(shouldRenderChart);
      // Si shouldRenderChart es falso, destruye la gráfica antes de volver a renderizarla con nuevos datos
      Chart.getChart(0).destroy();
    }
  }, [shouldRenderChart]);

  const fetchData = () => {
    // Realiza la llamada a la API para obtener los datos de los tramos
    // Utiliza axios o la librería de tu preferencia
    // La URL de la API sería algo como: http://localhost:4000/tramos
    axios
      .get(
        "http://localhost:4000/tramos?fechainicial=2010-02-01&fechafinal=2010-02-30"
      )
      .then((response) => {
        setData(response.data);
        setShouldRenderChart(true); // Habilita la renderización de la gráfica con los nuevos datos
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  // Resto del código de la gráfica
  const chartData = {
    labels: data.map((item) => item.Linea), // Nombres de los tramos para el eje X (labels)
    datasets: [
      {
        label: "Consumo",
        data: data.map((item) => item.consumo),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Perdidas",
        data: data.map((item) => item.perdidas),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Costo",
        data: data.map((item) => item.costo),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {shouldRenderChart && (
        <Bar data={chartData} options={chartOptions} id="my-chart" />
      )}
    </div>
  );
};

export default GraficaTramos;

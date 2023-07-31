import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { v4 as uuidv4 } from "uuid";

const GraficaTramosCliente = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const chartId = uuidv4;

  useEffect(() => {
    fetchData();

    // Función de limpieza para destruir la gráfica anterior antes de desmontar el componente
    return () => {
      const canvas = document.getElementById(chartId);
      const existingChart = Chart.getChart(canvas);
      if (existingChart) {
        existingChart.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!loading && data.length > 0) {
      // Si ya se obtuvieron los datos y no hay carga, renderizar la gráfica
      renderChart();
    }
  }, [loading, data]);

  const fetchData = () => {
    axios
      .get(
        "http://localhost:4000/tramos-cliente?fechainicial=2010-02-01&fechafinal=2010-02-30"
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false); // Si hay un error, también detener la carga para evitar errores infinitos
      });
  };

  const chartData = {
    labels: data.map((item) => `${item.Linea} - ${item.TipoConsumo}`),
    datasets: [
      // ... Configuración de los datasets ...
      {
        label: "Perdidas",
        data: data.map((item) => item.Perdidas),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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

  const renderChart = () => {
    const canvas = document.getElementById(chartId);
    const existingChart = Chart.getChart(canvas);
    if (existingChart) {
      existingChart.destroy();
    }

    // Crear una nueva instancia de la gráfica
    new Chart(canvas, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Grafica Tramos Cliente</h2>
      {loading ? (
        <div className="text-center mb-4">Cargando datos...</div>
      ) : (
        <Bar data={chartData} options={chartOptions} id={chartId} />
      )}
    </div>
  );
};

export default GraficaTramosCliente;
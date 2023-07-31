import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const GraficaTramosCliente = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const chartId = "grafica-tramos-chart";

  useEffect(() => {
    fetchData();
  }, []);

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
      // {
      //   label: "Tipo de Consumo",
      //   data: data.map((item) => item.TipoConsumo),
      //   backgroundColor: "rgba(75, 192, 192, 0.2)",
      //   borderColor: "rgba(75, 192, 192, 1)",
      //   borderWidth: 1,
      // },
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

  return (
    <div>
      <h2 className="text-center mb-4">Grafica Tramos Cliente</h2>
      {loading ? (
        <div>Cargando datos...</div>
      ) : (
        <Bar data={chartData} options={chartOptions} id={chartId} />
      )}
    </div>
  );
};

export default GraficaTramosCliente;

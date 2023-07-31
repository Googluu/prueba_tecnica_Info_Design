import GraficaCliente from "./GraficaCliente";
import GraficaTramos from "./GraficaTramos";
import GraficaTramosCliente from "./GraficaTramosCliente";

const GraficasPage = () => {
  return (
    <div>
      <h1>Graficas</h1>
      <div>
        <div>
          <GraficaTramos />
        </div>
        <div>
          <GraficaCliente />
        </div>
        <div>
          <GraficaTramosCliente />
        </div>
      </div>
    </div>
  );
};

export default GraficasPage;

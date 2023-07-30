import TablaInteractivaTramos from "./TablaInteractivaTramos";
import TablaInteractivaCliente from "./TablaInteractivaCliente";
import TablaInteractivaTramosCliente from "./TablaInteractivaTramosCliente";

const TablasPage = () => {
  return (
    <div>
      <h1>Tablas</h1>
      <div>
        <div>
          <TablaInteractivaTramos />
        </div>
        <div>
          <TablaInteractivaCliente />
        </div>
        <div>
          <TablaInteractivaTramosCliente />
        </div>
      </div>
    </div>
  );
};

export default TablasPage;

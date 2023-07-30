import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/tablas">
          Tablas
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/graficas">
          Graficas
        </NavLink>
      </div>
    </div>
  );
};

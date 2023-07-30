import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      Not Found status code: 404 <br />
      <Link to="/" className="btn btn-dark">
        Volver al Home
      </Link>
    </div>
  );
};

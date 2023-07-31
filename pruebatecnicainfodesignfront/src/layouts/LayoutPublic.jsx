import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/NavBar";

export const LayoutPublic = () => {
  const navidation = useNavigation();

  return (
    <div>
      <Navbar />
      <main className="container">
        {navidation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet />
      </main>
      <footer className="text-center">
        <br />
      </footer>
    </div>
  );
};

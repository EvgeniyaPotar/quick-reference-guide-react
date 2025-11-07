import { Outlet } from "react-router";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

const LayoutWithNav = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1">
        <NavBar />
        <main className="flex-1 flex flex-col">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default LayoutWithNav;

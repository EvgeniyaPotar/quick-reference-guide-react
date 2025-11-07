import { Button, Image } from "antd";
import logo from "../assets/react.svg";
import { NavLink } from "react-router";
import { topics } from "../utils/topics.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { useContext } from "react";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center flex-1 px-4 py-8">
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <Image width={150} preview={false} src={logo} className="pb-4" />
        <h1 className="p-4 text-6xl font-bold">React</h1>
        <p className="p-4 text-2xl text-center">
          Краткое справочное руководство.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
          <Button
            color="primary"
            variant={theme === "light" ? "outlined" : "solid"}
            size="large"
            className="m-2 min-w-48 ease-in"
          >
            <NavLink to={topics[0].path}>Шпаргалка по React</NavLink>
          </Button>
          <Button
            color="primary"
            variant={theme === "light" ? "outlined" : "solid"}
            size="large"
            className="m-2 min-w-48 ease-in"
          >
            <a href="https://react.dev/">Документация React</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

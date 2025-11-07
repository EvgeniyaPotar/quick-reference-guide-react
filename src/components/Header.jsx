import logo from "../assets/react.svg";
import { Link } from "react-router";
import { Button, Tooltip } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Header = () => {
  const { themeToggle, theme } = useContext(ThemeContext);
  return (
    <header className="p-6 flex items-center flex-row justify-between h-[72px] top-0 w-full relative lg:sticky border-b-1 shadow-xs bg-[#e6f7fc] dark:bg-[#565555] border-[#dfe4e5]">
      <div className="flex">
        <Link to="/">
          <img className="header-logo" alt="logo" src={logo} />
        </Link>
        <h1 className=" pl-6 text-2xl">React notebook</h1>
      </div>
      <div className="flex ">
        <a
          className="text-[\] w-full hidden lg:flex pt-2 pb-2 pl-3 pr-3 mr-6 rounded-[10px] transition  hover:bg-[#dfe4e5] dark:hover:bg-[#636161]  focus:bg-[#cdd3d4] dark:focus:bg-[#474646]  active:bg-[#a8adad] dark:active:bg-[#595757] ease-in"
          href="https://react.dev/"
        >
          Документация
        </a>
        <Tooltip title={theme === "light" ? "Темная тема" : "Светлая тема"}>
          <Button
            className="self-center"
            shape="circle"
            color="primary"
            variant={theme === "light" ? "outlined" : "solid"}
            icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
            onClick={themeToggle}
          />
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;

import { NavLink } from "react-router";
import { topics } from "../utils/topics.jsx";

const NavBar = () => {
  return (
    <nav className="flex lg:flex-col items-center whitespace-nowrap min-w-[250px] p-2 lg:p-6  border-b-1 lg:border-r-1 lg:border-b-0 border-[#dfe4e5] leading-7  lg:leading-10 sticky h-[62px] lg:h-[calc(100vh-72px)] overflow-x-auto lg:overflow-y-auto top-0 lg:top-[72px]  font-semibold  bg-white dark:bg-[#282727]">
      {topics.map((item) => {
        const { path, title } = item;
        return (
          <NavLink
            key={item.id}
            className={({ isActive }) =>
              `lg:w-full pt-1 pb-1 pl-3 pr-3 mr-2 lg:mb-2 rounded-[10px] transition ease-in hover:bg-[#dfe4e5] dark:hover:bg-[#636161] focus:bg-[#cdd3d4] dark:focus:bg-[#474646] ${
                isActive ? "bg-[#a8adad] dark:bg-[#595757]" : ""
              }`
            }
            to={path}
          >
            {title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;
